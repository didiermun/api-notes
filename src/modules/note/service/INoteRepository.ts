import Option from '../../common/types/Option.type';
import { CreateNoteDTO, PublicNoteDTO } from '../dto/note.dto';

export default interface INoteRepository {
  createNote(id: number, data: CreateNoteDTO): Promise<PublicNoteDTO>;
  updateNote(id: number, data: CreateNoteDTO): Promise<PublicNoteDTO>;
  getNoteById(id: number): Promise<Option<PublicNoteDTO>>;
  getAllNotes(): Promise<PublicNoteDTO[]>;
  getNotesByUser(userId: number): Promise<PublicNoteDTO[]>;
}
