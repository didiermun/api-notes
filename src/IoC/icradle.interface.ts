import { IAuthProvider } from './providers/auth.provider';
import { IUserProvider } from './providers/user.provider';
import { ITodoProvider } from './providers/todo.provider';
import { INoteProvider } from './providers/note.provider';

export default interface ICradle extends IAuthProvider, IUserProvider, ITodoProvider, INoteProvider {}
