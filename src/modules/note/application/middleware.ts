import { NextFunction, Request, Response } from 'express';
import NoteService from '../service/note.service';

export default class NoteMiddleware {
  constructor(private NoteService: NoteService) {}

  validateCreateAccountBody = async (req: Request, res: Response, next: NextFunction): Promise<unknown> => {
    const { title, content, isPublic } = req.body;

    if (!title) {
      return res.status(400).json({
        error: {
          code: 400,
          message: 'Bad Request',
          details: 'Title is required',
        },
      });
    }

    if (!content) {
      return res.status(400).json({
        error: {
          code: 400,
          message: 'Bad Request',
          details: 'Content is required',
        },
      });
    }

    if (!isPublic) {
      return res.status(400).json({
        error: {
          code: 400,
          message: 'Bad Request',
          details: 'IsPublic is required',
        },
      });
    }

    next();
  };
}
