import { Router } from 'express';
import ICradle from '../../../IoC/icradle.interface';

export default (cradle: ICradle) => {
  const router = Router();

  router.post('/Note', cradle.authMiddleware.authenticate, cradle.NoteController.createNote);

  router.put('/Note/:id', cradle.authMiddleware.authenticate, cradle.NoteController.createNote);

  router.get('/Notes', cradle.authMiddleware.authenticate, cradle.NoteController.getNotesByUser);

  router.get('/Note/:id', cradle.authMiddleware.authenticate, cradle.NoteController.getById);

  return router;
};
