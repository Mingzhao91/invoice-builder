import express from "express";
import mongoose from "mongoose";

import { router } from "./config/routes";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/invoice-builder");

const app = express();
const PORT = 3000;

app.use("/api", router);

app.get("/", (req, res) => {
  res.json({
    msg: "welcome to invoice builder backend",
  });
});

app.listen(PORT, function () {
  console.log(`Server is running at ${PORT}`);
});
