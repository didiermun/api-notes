import NoteEntity from '../entity/note.entity';
export interface CreateNoteDTO {
  content: string;
  title: string;
  isPublic: boolean;
  tags: string[];
  date: string;
}

export interface AddTagDTO {
  noteId: number;
  tag: string;
}

export type PublicNoteDTO = NoteEntity;
