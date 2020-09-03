const Joi = require('joi');

module.exports = {
  get: {
    paramsOptional: Joi.object().keys({
      id: Joi.string(),
    }),
    paramsRequired: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },
  put: {
    body: Joi.object().keys({
      name: Joi.string().required(),
      CPF: Joi.string().regex(/^[0-9]{11}$/).required(),
      RG: Joi.string().required(),
      birthDate: Joi.date().required(),
      planType: Joi.string().regex(/basic|standard|premium/).required(),
      dependentsAmount: Joi.number().integer().min(0).max(20)
        .optional(),
    }),
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },
  patch: {
    body: Joi.object().keys({
      name: Joi.string().optional(),
      CPF: Joi.string().regex(/^[0-9]{11}$/).optional(),
      RG: Joi.string().optional(),
      birthDate: Joi.date().optional(),
      planType: Joi.string().regex(/​basic|standard|premium/).optional(),
      dependentsAmount: Joi.number().integer().min(0).max(20)
        .optional(),
    }),
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },
  post: {
    body: Joi.object().keys({
      name: Joi.string().required(),
      CPF: Joi.string().regex(/^[0-9]{11}$/).required(),
      RG: Joi.string().required(),
      birthDate: Joi.date().required(),
      planType: Joi.string().regex(/basic|standard|premium/).required(),
      dependentsAmount: Joi.number().integer().min(0).max(20)
        .optional(),
    }),
  },
  del: {
    params: Joi.object().keys({
      id: Joi.string(),
    }),
  },
};
