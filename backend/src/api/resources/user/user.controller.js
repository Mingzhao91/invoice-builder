import { StatusCodes } from "http-status-codes";

import userService from "./user.service";
import User from "./user.model";

export default {
  async signup(req, res) {
    try {
      const { value, error } = userService.validateSchema(req.body);
      if (error) {
        return res.status(StatusCodes.BAD_REQUEST).json(error);
      }

      const user = await User.create(value);
      return res.json({ success: true, message: "User create successfully" });
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },
};
