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
          details: err,
        },
      });
    }
  };

  addTag = async (req: Request, res: Response): Promise<unknown> => {
    try {
      const id = Number(req.body.noteId);
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

      const tagAdded = await this.NoteService.addTag(id, req.body.tag);

      res.status(200).json(Note);
    } catch (err) {
      console.log('Unable to get profile:', err);

      return res.status(500).json({
        error: {
          code: 500,
          message: 'Server Internal Error',
          details: err,
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
          details: err,
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
          details: err,
        },
      });
    }
  };

  createNote = async (req: Request, res: Response): Promise<unknown> => {
    try {
      const authenticatedNote = req.requester as AuthenticatedUserDTO;
      const createdNote = await this.NoteService.createNote(authenticatedNote.id, req.body);

      res.status(201).json(createdNote);
    } catch (err) {
      console.log('Unable to create Note:', err);

      return res.status(500).json({
        error: {
          code: 500,
          message: 'Server Internal Error',
          details: err,
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
          details: err,
        },
      });
    }
  };
}
