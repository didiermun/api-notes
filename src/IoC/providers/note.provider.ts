import { asClass, AwilixContainer } from 'awilix';
import NoteController from '../../modules/note/application/controller';
import NoteMiddleware from '../../modules/note/application/middleware';
import NoteRepository from '../../modules/note/persistence/note.repository';
import NoteService from '../../modules/note/service/note.service';

import ICradle from '../icradle.interface';

export interface INoteProvider {
  NoteRepository: NoteRepository;
  NoteService: NoteService;
  NoteController: NoteController;
  NoteMiddleware: NoteMiddleware;
}

const NoteProvider = (container: AwilixContainer<ICradle>): void => {
  container.register({
    NoteRepository: asClass(NoteRepository),
    NoteService: asClass(NoteService),
    NoteController: asClass(NoteController),
    NoteMiddleware: asClass(NoteMiddleware),
  });
};

export default NoteProvider;
