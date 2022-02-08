import { asClass, AwilixContainer } from 'awilix';
import TodoController from '../../modules/todo/application/controller';
import TodoMiddleware from '../../modules/todo/application/middleware';
import TodoRepository from '../../modules/todo/persistence/todo.repository';
import TodoService from '../../modules/todo/service/todo.service';

import ICradle from '../icradle.interface';

export interface ITodoProvider {
  todoRepository: TodoRepository;
  todoService: TodoService;
  todoController: TodoController;
  todoMiddleware: TodoMiddleware;
}

const TodoProvider = (container: AwilixContainer<ICradle>): void => {
  container.register({
    todoRepository: asClass(TodoRepository),
    todoService: asClass(TodoService),
    todoController: asClass(TodoController),
    todoMiddleware: asClass(TodoMiddleware),
  });
};

export default TodoProvider;
