import NoteEntity from '../entity/note.entity';
export interface CreateNoteDTO {
  content: string;
  title: string;
  isPublic: boolean;
  tags: string[];
  date: string;
}

export type PublicNoteDTO = NoteEntity;
