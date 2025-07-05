import { createPurchases, getAllPurchases } from '../services/purchases.js';

export const getAllPurchasesController = async (req, res) => {
  const customerEmail = req.query;
  const purchases = await getAllPurchases({ customerEmail });

  res.status(200).json({
    status: 200,
    message: 'Successfully found purchases!',
    data: purchases,
  });
};

export const createPurchaseController = async (req, res) => {
  const purchase = await createPurchases({ ...req.body });

  res.status(201).json({
    status: 201,
    message: 'Successfully created a purchase!',
    data: purchase,
  });
};
