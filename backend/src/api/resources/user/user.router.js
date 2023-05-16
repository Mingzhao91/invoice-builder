import express from "express";
import passport from "passport";
import userController from "./user.controller";

export const userRounter = express.Router();

userRounter.post("/signup", userController.signup);
userRounter.post("/login", userController.login);
userRounter.post("/forgot-password", userController.forgotPassword);
userRounter.put(
  "/reset-password",
  passport.authenticate("jwt", { session: false }),
  userController.resetPassword
);
