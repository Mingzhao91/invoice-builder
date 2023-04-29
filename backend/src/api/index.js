import express from "express";

import { invoiceRouter } from "./resources/invoice/invoice.router";

export const restRouter = express.Router();

restRouter.use("/invoices", invoiceRouter);
