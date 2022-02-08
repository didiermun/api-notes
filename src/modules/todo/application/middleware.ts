import { NextFunction, Request, Response } from 'express';

export default class TodoMiddleware {
  validateCreateAccountBody = async (req: Request, res: Response, next: NextFunction): Promise<unknown> => {
    const { title, description, completed } = req.body;

    if (!title) {
      return res.status(400).json({
        error: {
          code: 400,
          message: 'Bad Request',
          details: 'Title is required',
        },
      });
    }

    if (!description) {
      return res.status(400).json({
        error: {
          code: 400,
          message: 'Bad Request',
          details: 'Description is required',
        },
      });
    }

    if (!completed) {
      return res.status(400).json({
        error: {
          code: 400,
          message: 'Bad Request',
          details: 'Completed is required',
        },
      });
    }

    next();
  };
}
