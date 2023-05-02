import Joi from "joi";

export default {
  validateSchema(body) {
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
};
