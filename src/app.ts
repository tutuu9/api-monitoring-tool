import express from 'express';

import authRoutes from './modules/auth/auth.routes';

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'API Monitoring Tool is running',
  });
});

export default app;