import { Router } from 'express'
import profile from '../routes/profile.js';

const router = Router();

export default router
.use(profile)