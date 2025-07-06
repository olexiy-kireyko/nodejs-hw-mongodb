import Joi from 'joi';

export const createPurchaseSchema = Joi.object({
  productName: Joi.string().max(30).required(),
  productPrice: Joi.number().positive().required(),
  customerFirstName: Joi.string().max(30),
  customerEmail: Joi.string().max(30).required(),
  customerState: Joi.string().max(30),
});
