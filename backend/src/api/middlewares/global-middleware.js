import express from "express";
import logger from "morgan";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import pdf from "express-pdf";

import swaggerDocument from "../../config/swagger.json";
import { configureJWTStrategy } from "./passport-jwt";
import { configureGoogleStrategy } from "./passport-google";
import { configureGithubStrategy } from "./passport-github";
import { devConfig } from "../../config/env/development";
import User from "../resources/user/user.model";

export const setGlobalMiddleware = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(pdf);
  app.use(logger("dev"));
  app.use(
    session({
      secret: devConfig.secret,
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(passport.initialize({ userProperty: "currentUser" }));
  app.use(passport.session());
  configureJWTStrategy();
  configureGoogleStrategy();
  configureGithubStrategy();

  // save user into session
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  // extract the userId from session
  passport.deserializeUser(async (id, done) => {
    const user = User.findById(id);
    if (user) {
      done(null, user);
    }
  });

  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      explorer: true,
    })
  );

  app.get("/failure", (req, res) => {
    return res.redirect(`${devConfig.frontendURL}/login`);
  });
};
