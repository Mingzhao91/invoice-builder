import Joi from "joi";

export default {
  validateSignupSchema(body) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      name: Joi.string().required(),
    });

    const { error, value } = schema.validate(body);
    if (error) {
      return { error };
    }
    return { value };
  },

  validateLoginSchema(body) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    const { error, value } = schema.validate(body);
    if (error) {
      return { error };
    }
    return { value };
  },

  getUser(user) {
    let rsp = {};

    if (user.local.email) {
      rsp.name = user.local.name;
      rsp.email = user.local.email;
    }

    if (user.google.email) {
      rsp.name = user.google.displayName;
      rsp.email = user.google.email;
    }

    if (user.github.email) {
      rsp.name = user.github.displayName;
      rsp.email = user.github.email;
    }

    return rsp;
  },
};
