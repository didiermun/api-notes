import Option from '../../common/types/Option.type';
import { CreateTodoDTO, PublicTodoDTO } from '../dto/todo.dto';

export default interface ITodoRepository {
  createTodo(data: CreateTodoDTO): Promise<PublicTodoDTO>;
  updateTodo(id: number, data: CreateTodoDTO): Promise<PublicTodoDTO>;
  getTodoById(id: number): Promise<Option<PublicTodoDTO>>;
  getAllTodos(): Promise<PublicTodoDTO[]>;
  getTodosByUser(userId: number): Promise<PublicTodoDTO[]>;
}
