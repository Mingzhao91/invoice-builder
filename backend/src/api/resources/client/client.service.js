import Joi from "joi";

export default {
  validateCreateSchema(body) {
    const schema = Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
    });

    const { error, value } = schema.validate(body);
    if (error) {
      return { error };
    }
    return { value };
  },
};
