import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createPurchaseController,
  getAllPurchasesController,
} from '../controllers/purchases.js';
import { createPurchaseSchema } from '../validation/purchases.js';

const router = Router();

router.get('/', ctrlWrapper(getAllPurchasesController));

router.post(
  '/',
  validateBody(createPurchaseSchema),
  ctrlWrapper(createPurchaseController),
);

export default router;
