import prismaClient from '../../common/persistence/prisma-client';
import Option from '../../common/types/Option.type';
import { CreateTodoDTO, PublicTodoDTO } from '../dto/todo.dto';
import ITodoRepository from '../service/ITodoRepository';

export default class TodoRepository implements ITodoRepository {
  async updateTodo(id: number, data: CreateTodoDTO): Promise<PublicTodoDTO> {
    return await prismaClient.todo.update({
      where: {
        id,
      },
      data: {
        completed: data.completed,
        title: data.title,
        description: data.description,
      },
    });
  }
  async getTodosByUser(userId: number): Promise<PublicTodoDTO[]> {
    return await prismaClient.todo.findMany({
      where: {
        userId: userId,
      },
    });
  }
  async getTodoById(id: number): Promise<Option<PublicTodoDTO>> {
    const foundTodo = await prismaClient.todo.findUnique({ where: { id } });

    if (!foundTodo) return;

    const { completed, title, description } = foundTodo;

    return {
      id,
      completed,
      title,
      description,
    };
  }
  async createTodo({ completed, title, description }: CreateTodoDTO): Promise<PublicTodoDTO> {
    const createdTodo = await prismaClient.todo.create({
      data: {
        completed,
        title,
        description,
        date: this.getDate(),
      },
    });

    return {
      id: createdTodo.id,
      completed,
      title,
      description,
    };
  }

  async getAllTodos(): Promise<PublicTodoDTO[]> {
    return await prismaClient.todo.findMany({});
  }
  //return year-month-day
  getDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${year}-${month}-${day}`;
  }
}
