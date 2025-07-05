import { PurchasesCollection } from '../db/models/purchases.js';

export const getAllPurchases = async ({ customerEmail }) => {
  const purchases = await PurchasesCollection.find({ customerEmail });

  return { data: purchases };
};

export const createPurchases = async (payload) => {
  const purchase = await PurchasesCollection.create(payload);

  return purchase;
};
