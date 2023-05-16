import { StatusCodes } from "http-status-codes";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import userService from "./user.service";
import User from "./user.model";
import { devConfig } from "../../../config/env/development";
import { getJWTToken } from "../../modules/utils";
import { sendEmail } from "../../modules/mail";

export default {
  async signup(req, res) {
    try {
      const { value, error } = userService.validateSignupSchema(req.body);
      if (error) {
        return res.status(StatusCodes.BAD_REQUEST).json(error);
      }

      const existingUser = await User.findOne({ "local.email": value.email });

      if (existingUser) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ err: "You have already created an account" });
      }

      const user = await new User();
      user.local.email = value.email;
      user.local.name = value.name;
      const salt = await bcryptjs.genSalt();
      const hash = await bcryptjs.hash(value.password, salt);
      user.local.password = hash;
      await user.save();

      return res.json({ success: true, message: "User created successfully" });
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },

  async login(req, res) {
    try {
      const { value, error } = userService.validateLoginSchema(req.body);
      if (error) {
        return res.status(StatusCodes.BAD_REQUEST).json(error);
      }

      const user = await User.findOne({ "local.email": value.email });

      if (!user) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ err: "Invalid emai or password." });
      }

      const matched = await bcryptjs.compare(
        value.password,
        user.local.password
      );

      if (!matched) {
        res
          .status(StatusCodes.UNAUTHORIZED)
          .json({ err: "invalid credential" });
      }
      const token = jwt.sign({ id: user._id }, devConfig.secret, {
        expiresIn: "1d",
      });

      return res.json({ success: true, token });
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },

  async forgotPassword(req, res) {
    try {
      const { value, error } = userService.validateForgotPasswordSchema(
        req.body
      );
      if (error) {
        return res.status(StatusCodes.BAD_REQUEST).json(error);
      }
      const criteria = {
        $or: [
          {
            "google.email": value.email,
          },
          {
            "github.email": value.email,
          },
          {
            "local.email": value.email,
          },
        ],
      };

      const user = await User.findOne(criteria);
      if (!user) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ err: "User does not exist" });
      }

      const token = getJWTToken({ id: user._id });

      const resetLink = `
      <h4>Please click on the link to reset the password</h4>
      <a href='${devConfig.frontendURL}/reset-password/${token}'>Reset Password</a>
      `;

      const sanitisedUser = userService.getUser(user);

      console.log("before send email");

      const results = await sendEmail({
        html: resetLink,
        subject: "Forgot Password",
        email: sanitisedUser.email,
      });

      console.log("results: ", results);

      return res.json(results);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },
};
