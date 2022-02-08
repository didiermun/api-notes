import { Request, Response } from 'express';
import { AuthenticatedUserDTO } from '../../user/dto/user.dto';
import NoteService from '../service/note.service';

export default class NoteController {
  constructor(private NoteService: NoteService) {}

  getById = async (req: Request, res: Response): Promise<unknown> => {
    try {
      const id = Number(req.params.id);
      const Note = await this.NoteService.getNoteById(id);

      if (!Note) {
        return res.status(404).json({
          error: {
            code: 404,
            message: 'Not Found',
            details: 'Note not found',
          },
        });
      }

      res.status(200).json(Note);
    } catch (err) {
      console.log('Unable to get profile:', err);

      return res.status(500).json({
        error: {
          code: 500,
          message: 'Server Internal Error',
          details: 'Unable to get profile',
        },
      });
    }
  };

  getNotesByUser = async (req: Request, res: Response): Promise<unknown> => {
    try {
      const authenticatedNote = req.requester as AuthenticatedUserDTO;
      const Note = await this.NoteService.getNotesByUser(authenticatedNote.id);

      if (!Note) {
        return res.status(404).json({
          error: {
            code: 404,
            message: 'Not Found',
            details: 'Note not found',
          },
        });
      }

      res.status(200).json(Note);
    } catch (err) {
      console.log('Unable to get profile:', err);

      return res.status(500).json({
        error: {
          code: 500,
          message: 'Server Internal Error',
          details: 'Unable to get profile',
        },
      });
    }
  };

  getAllNotes = async (req: Request, res: Response): Promise<unknown> => {
    try {
      const Notes = await this.NoteService.getAllNotes();

      res.status(200).json(Notes);
    } catch (err) {
      console.log('Unable to get Notes:', err);

      return res.status(500).json({
        error: {
          code: 500,
          message: 'Server Internal Error',
          details: 'Unable to get Notes',
        },
      });
    }
  };

  createNote = async (req: Request, res: Response): Promise<unknown> => {
    try {
      const createdNote = await this.NoteService.createNote(req.body);

      res.status(201).json(createdNote);
    } catch (err) {
      console.log('Unable to create Note:', err);

      return res.status(500).json({
        error: {
          code: 500,
          message: 'Server Internal Error',
          details: 'Unable to create note',
        },
      });
    }
  };

  updateNote = async (req: Request, res: Response): Promise<unknown> => {
    try {
      const authenticatedNote = req.requester as AuthenticatedUserDTO;
      const createdNote = await this.NoteService.updateNote(authenticatedNote.id, req.body);

      res.status(201).json(createdNote);
    } catch (err) {
      console.log('Unable to update Note:', err);

      return res.status(500).json({
        error: {
          code: 500,
          message: 'Server Internal Error',
          details: 'Unable to update note',
        },
      });
    }
  };
}
