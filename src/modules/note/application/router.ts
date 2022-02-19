import { Router } from 'express';
import ICradle from '../../../IoC/icradle.interface';

export default (cradle: ICradle) => {
  const router = Router();

  router.post('/note', cradle.authMiddleware.authenticate, cradle.NoteController.createNote);

  router.put('/note/:id', cradle.authMiddleware.authenticate, cradle.NoteController.createNote);

  router.put('/note/tags/add', cradle.authMiddleware.authenticate, cradle.NoteController.addTag);

  router.get('/notes', cradle.authMiddleware.authenticate, cradle.NoteController.getNotesByUser);

  router.get('/note/:id', cradle.authMiddleware.authenticate, cradle.NoteController.getById);

  return router;
};
