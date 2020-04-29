const Joi = require('@hapi/joi');

const schemas = {
  create: {
    body: Joi.object().keys({
      name: Joi.string().required(),
      surname: Joi.string().required(),
      phone: Joi.number().required(),
      email: Joi.string().required()
    })
  },
  get: {
    params: Joi.object().keys({
      id: Joi.string()
    })
  },
  update: {
    body: Joi.object().keys({
      name: Joi.string(),
      surname: Joi.string(),
      phone: Joi.number(),
      email: Joi.string()
    }),
    params: Joi.object().keys({
      id: Joi.string()
    })
  }
};

module.exports = schemas;
