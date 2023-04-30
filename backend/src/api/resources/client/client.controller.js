import { StatusCodes } from "http-status-codes";

import clientService from "./client.service";
import Client from "./client.model";

export default {
  async create(req, res) {
    try {
      const { value, error } = clientService.validateCreateSchema(req.body);
      if (error) {
        return res.status(StatusCodes.BAD_REQUEST).json(error);
      }

      const client = await Client.create(value);
      return res.json(client);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },

  async findAll(req, res) {
    try {
      const client = await Client.find();
      return res.json(client);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },

  async findOne(req, res) {
    try {
      const { id } = req.params;
      const client = await Client.findById(id);

      if (!client) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ err: "Could not find a client" });
      }

      return res.json(client);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const client = await Client.findByIdAndRemove(id);

      if (!client) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ err: "Conld not delete a client" });
      }

      return res.json(client);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },

  async update(req, res) {
    try {
      const { value, error } = clientService.validateCreateSchema(req.body);
      if (error) {
        return res.status(StatusCodes.BAD_REQUEST).json(error);
      }
      const { id } = req.params;
      const client = await Client.findByIdAndUpdate(id, value, { new: true });

      if (!client) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ err: "Could not update client" });
      }
      return res.json(client);
    } catch (err) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    }
  },
};
