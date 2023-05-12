import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

import { devConfig } from "../../../config/env/development";

export default {
  sendJWTToken(req, res) {
    const token = jwt.sign({ id: req.currentUser._id }, devConfig.secret, {
      expiresIn: "1d",
    });

    // return res.json({ success: true, token });
    res.redirect(`${devConfig.frontendURL}/dashboard/invoices?token=${token}`);
  },

  authenticate(req, res) {
    return res.send(true);
  },

  logout(req, res) {
    // remove the session and remove req.currentUser
    req.logout(function (err) {
      if (err) res.status(StatusCodes.BAD_REQUEST).json(err);
      return res.json({ success: true });
    });
  },
};
