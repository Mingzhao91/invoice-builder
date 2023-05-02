import express from "express";
import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";

import { restRouter } from "./api/index";
import { devConfig } from "./config/env/development";
import { setGlobalMiddleware } from "./api/middlewares/global-middleware";

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost/${devConfig.database}`);

const app = express();
const PORT = devConfig.port;

// register global middleware
setGlobalMiddleware(app);

app.use("/api", restRouter);
app.use((req, res, next) => {
  const error = new Error("Not Found!");
  error.message = "Invalid Route";
  error.status = StatusCodes.NOT_FOUND;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR);
  return res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, function () {
  console.log(`Server is running at ${PORT}`);
});
