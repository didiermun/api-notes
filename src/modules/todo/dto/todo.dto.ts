import TodoEntity from '../entity/todo.entity';
export interface CreateTodoDTO {
  title: string;
  description: string;
  public: string;
  completed: boolean;
  date: string;
}

// export type PublicTodoDTO = TodoEntity;

export type PublicTodoDTO = Omit<TodoEntity, 'date'>;
