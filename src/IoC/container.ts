import { createContainer, InjectionMode } from 'awilix';

import ICradle from './icradle.interface';
import authProvider from './providers/auth.provider';
import userProvider from './providers/user.provider';
import todoProvider from './providers/todo.provider';
import noteProvider from './providers/note.provider';

const container = createContainer<ICradle>({
  injectionMode: InjectionMode.CLASSIC,
});

authProvider(container);
userProvider(container);
todoProvider(container);
noteProvider(container);

export default container;
