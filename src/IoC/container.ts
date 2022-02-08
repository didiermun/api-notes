import { createContainer, InjectionMode } from 'awilix';

import ICradle from './icradle.interface';
import authProvider from './providers/auth.provider';
import userProvider from './providers/user.provider';
import TodoProvider from './providers/todo.provide';

const container = createContainer<ICradle>({
  injectionMode: InjectionMode.CLASSIC,
});

authProvider(container);
userProvider(container);
TodoProvider(container);

export default container;
