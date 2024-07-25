import express from 'express'
import { createUser, signin, signup } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/create-user', createUser);
router.post('/sign-up', signup);
router.post('/sign-in', signin);

export default router