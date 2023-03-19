import Joi from "joi";
import { StatusCodes } from "http-status-codes";

import Invoice from "../models/invoice.model";

export default {
  findAll(req, res, next) {
    Invoice.find()
      .then((invoices) => res.json(invoices))
      .catch((err) => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
  },
  create(req, res, next) {
    const schema = Joi.object({
      item: Joi.string().required(),
      date: Joi.date().required(),
      due: Joi.date().required(),
      qty: Joi.number().integer().required(),
      tax: Joi.number().optional(),
      rate: Joi.number().optional(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) {
      return res.status(StatusCodes.BAD_REQUEST).json(error);
    }

    Invoice.create(value)
      .then((invoice) => res.json(invoice))
      .catch((err) => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
  },
  findOne(req, res, nex) {
    const { id } = req.params;
    Invoice.findById(id)
      .then((invoice) => {
        if (!invoice) {
          return res
            .status(StatusCodes.NOT_FOUND)
            .json({ err: "Could not find any invoice" });
        }

        return res.json(invoice);
      })
      .catch((err) => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
  },
};
