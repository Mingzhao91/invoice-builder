import express from "express";
import passport from "passport";

import authController from "./auth.controller";

export const authRouter = express.Router();

authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
  }),
  authController.sendJWTToken
);
