const Joi = require('joi');

module.exports = {
  get: {
    params: Joi.object({
      id: Joi.string().regex(/^\d{1,4}$/),
    }),
  },
  put: {
    body: Joi.object({
      name: Joi.string().required(),
      CPF: Joi.string().regex(/^[0-9]{11}$/).required(),
      RG: Joi.string().required(),
      birthDate: Joi.date().required(),
      planType: Joi.string().regex(/^​basic​|standard​|​premium$/).optional(),
    }),
  },
  patch: {
    body: Joi.object({
      name: Joi.string().optional(),
      CPF: Joi.string().regex(/^[0-9]{11}$/).optional(),
      RG: Joi.string().optional(),
      birthDate: Joi.date().optional(),
      planType: Joi.string().regex(/^​basic​|standard​|​premium$/).optional(),
    }),
  },
  post: {
    body: Joi.object({
      name: Joi.string().required(),
      CPF: Joi.string().regex(/^[0-9]{11}$/).required(),
      RG: Joi.string().required(),
      birthDate: Joi.date().required(),
      planType: Joi.string().regex(/^​basic​|standard​|​premium$/).optional(),
    }),
  },
  del: {
    params: Joi.object({
      id: Joi.string().regex(/^\d{1,4}$/),
    }),
  },
};
