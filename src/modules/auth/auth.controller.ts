import { Request, Response } from 'express';

export const testAuth = (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Auth module is working',
  });
};