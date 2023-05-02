import express from "express";
import userController from "./user.controller";
import passport from "passport";

export const userRounter = express.Router();

userRounter.post("/signup", userController.signup);
userRounter.post("/login", userController.login);
userRounter.post(
  "/test",
  passport.authenticate("jwt", { session: false }),
  userController.test
);
