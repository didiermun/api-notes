import Option from '../../common/types/Option.type';
import { CreateNoteDTO, PublicNoteDTO } from '../dto/note.dto';
import INoteRepository from './INoteRepository';

export default class NoteService {
  constructor(private NoteRepository: INoteRepository) {}

  createNote(id: number, data: CreateNoteDTO): Promise<PublicNoteDTO> {
    return this.NoteRepository.createNote(id, data);
  }

  addTag(id: number, tag: string): Promise<PublicNoteDTO> {
    return this.NoteRepository.addTag(id, tag);
  }

  updateNote(id: number, data: CreateNoteDTO): Promise<PublicNoteDTO> {
    return this.NoteRepository.updateNote(id, data);
  }

  getNoteById(id: number): Promise<Option<PublicNoteDTO>> {
    return this.NoteRepository.getNoteById(id);
  }

  getAllNotes(): Promise<PublicNoteDTO[]> {
    return this.NoteRepository.getAllNotes();
  }

  getNotesByUser(userId: number): Promise<PublicNoteDTO[]> {
    return this.NoteRepository.getNotesByUser(userId);
  }
}
