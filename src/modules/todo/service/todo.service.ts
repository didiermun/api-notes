import Option from '../../common/types/Option.type';
import { CreateTodoDTO, PublicTodoDTO } from '../dto/todo.dto';
import ITodoRepository from './ITodoRepository';

export default class TodoService {
  constructor(private TodoRepository: ITodoRepository) {}

  createTodo(data: CreateTodoDTO): Promise<PublicTodoDTO> {
    return this.TodoRepository.createTodo(data);
  }

  updateTodo(id: number, data: CreateTodoDTO): Promise<PublicTodoDTO> {
    return this.TodoRepository.updateTodo(id, data);
  }

  getTodoById(id: number): Promise<Option<PublicTodoDTO>> {
    return this.TodoRepository.getTodoById(id);
  }

  getAllTodos(): Promise<PublicTodoDTO[]> {
    return this.TodoRepository.getAllTodos();
  }

  getTodosByUser(userId: number): Promise<PublicTodoDTO[]> {
    return this.TodoRepository.getTodosByUser(userId);
  }
}
