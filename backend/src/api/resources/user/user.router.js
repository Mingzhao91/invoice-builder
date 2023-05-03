import express from "express";
import userController from "./user.controller";

export const userRounter = express.Router();

userRounter.post("/signup", userController.signup);
userRounter.post("/login", userController.login);
