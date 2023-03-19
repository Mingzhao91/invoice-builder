import express from "express";
import mongoose from "mongoose";
import logger from "morgan";
import { StatusCodes } from "http-status-codes";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./config/swagger.json";

import { router } from "./config/routes";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/invoice-builder");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(logger("dev"));
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    explorer: true,
  })
);
app.use("/api", router);
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
