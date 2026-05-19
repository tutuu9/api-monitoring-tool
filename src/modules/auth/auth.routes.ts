import { Router } from 'express';
import { testAuth } from './auth.controller';

const router = Router();

router.get('/test', testAuth);

export default router;