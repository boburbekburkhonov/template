import Joi from 'joi'

export const validation = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required(),
  message: Joi.string().required()
}).required()