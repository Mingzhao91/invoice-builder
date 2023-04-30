import express from "express";

import { invoiceRouter } from "./resources/invoice";
import { clientRouter } from "./resources/client";

export const restRouter = express.Router();

restRouter.use("/invoices", invoiceRouter);
restRouter.use("/clients", clientRouter);
