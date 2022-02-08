export default interface NoteEntity {
  id: number;
  title: string;
  content: string;
  date: string;
  isPublic: boolean;
  tags: string[];
}
