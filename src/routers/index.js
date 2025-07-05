import { Router } from 'express';
import usersRouter from '../routers/auth.js';
import contactsRouter from '../routers/contacts.js';
import purchasesRouter from '../routers/purchases.js';

const router = Router();
router.use('/auth', usersRouter);
router.use('/contacts', contactsRouter);
router.use('/purchases', purchasesRouter);
export default router;
