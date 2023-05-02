import PassportJWT from "passport-jwt";
import passport from "passport";

import { devConfig } from "../../config/env/development";
import User from "../resources/user/user.model";

export const configureJWTStrategy = () => {
  var opts = {};
  opts.jwtFromRequest = PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = devConfig.secret;

  passport.use(
    new PassportJWT.Strategy(opts, async function (payload, done) {
      try {
        const user = await User.findOne({ _id: payload.id });
        console.log(user);

        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (err) {
        return done(err, false);
      }
    })
  );
};
