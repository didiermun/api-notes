import { Router } from 'express';
import ICradle from '../../../IoC/icradle.interface';

export default (cradle: ICradle) => {
  const router = Router();

  router.post('/todo', cradle.authMiddleware.authenticate, cradle.todoController.createTodo);

  router.put('/todo/:id', cradle.authMiddleware.authenticate, cradle.todoController.createTodo);

  router.get('/todos', cradle.authMiddleware.authenticate, cradle.todoController.getTodosByUser);

  router.get('/todo/:id', cradle.authMiddleware.authenticate, cradle.userController.getAllUsers);

  return router;
};
