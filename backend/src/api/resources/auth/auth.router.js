import express from "express";

export const authRouter = express.Router();

authRouter.route("/test").get(function (req, res) {
  res.json({ mgs: "working" });
});
