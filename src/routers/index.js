import { Router } from 'express';
import usersRouter from '../routers/auth.js';
import contactsRouter from '../routers/contacts.js';

const router = Router();
router.use('/auth', usersRouter);
router.use('/contacts', contactsRouter);
export default router;
