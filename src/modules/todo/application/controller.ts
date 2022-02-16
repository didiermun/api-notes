import { Request, Response } from 'express';
import { AuthenticatedUserDTO } from '../../user/dto/user.dto';
import TodoService from '../service/todo.service';

export default class TodoController {
  constructor(private TodoService: TodoService) {}

  getById = async (req: Request, res: Response): Promise<unknown> => {
    try {
      const id = Number(req.params.id);
      const Todo = await this.TodoService.getTodoById(id);

      if (!Todo) {
        return res.status(404).json({
          error: {
            code: 404,
            message: 'Not Found',
            details: 'Todo not found',
          },
        });
      }

      res.status(200).json(Todo);
    } catch (err) {
      console.log('Unable to get todo:', err);

      return res.status(500).json({
        error: {
          code: 500,
          message: 'Server Internal Error',
          details: err,
        },
      });
    }
  };

  getTodosByUser = async (req: Request, res: Response): Promise<unknown> => {
    try {
      const authenticatedTodo = req.requester as AuthenticatedUserDTO;
      const Todo = await this.TodoService.getTodosByUser(authenticatedTodo.id);

      if (!Todo) {
        return res.status(404).json({
          error: {
            code: 404,
            message: 'Not Found',
            details: 'Todo not found',
          },
        });
      }

      res.status(200).json(Todo);
    } catch (err) {
      console.log('Unable to get todo:', err);

      return res.status(500).json({
        error: {
          code: 500,
          message: 'Server Internal Error',
          details: err,
        },
      });
    }
  };

  getAllTodos = async (req: Request, res: Response): Promise<unknown> => {
    try {
      const Todos = await this.TodoService.getAllTodos();

      res.status(200).json(Todos);
    } catch (err) {
      console.log('Unable to get Todos:', err);

      return res.status(500).json({
        error: {
          code: 500,
          message: 'Server Internal Error',
          details: err,
        },
      });
    }
  };

  createTodo = async (req: Request, res: Response): Promise<unknown> => {
    try {
      const createdTodo = await this.TodoService.createTodo(req.body);

      res.status(201).json(createdTodo);
    } catch (err) {
      console.log('Unable to create Todo:', err);

      return res.status(500).json({
        error: {
          code: 500,
          message: 'Server Internal Error',
          details: err,
        },
      });
    }
  };

  updateTodo = async (req: Request, res: Response): Promise<unknown> => {
    try {
      const authenticatedTodo = req.requester as AuthenticatedUserDTO;
      const createdTodo = await this.TodoService.updateTodo(authenticatedTodo.id, req.body);

      res.status(201).json(createdTodo);
    } catch (err) {
      console.log('Unable to update Todo:', err);

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
