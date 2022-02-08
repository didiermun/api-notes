import prismaClient from '../../common/persistence/prisma-client';
import Option from '../../common/types/Option.type';
import { CreateNoteDTO, PublicNoteDTO } from '../dto/note.dto';
import INoteRepository from '../service/INoteRepository';

export default class NoteRepository implements INoteRepository {
  async updateNote(id: number, data: CreateNoteDTO): Promise<PublicNoteDTO> {
    return await prismaClient.note.update({
      where: {
        id,
      },
      data: {
        isPublic: data.isPublic,
        title: data.title,
        content: data.content,
        tags: data.tags,
      },
    });
  }
  async getNotesByUser(userId: number): Promise<PublicNoteDTO[]> {
    return await prismaClient.note.findMany({
      where: {
        userId: userId,
      },
    });
  }
  async getNoteById(id: number): Promise<Option<PublicNoteDTO>> {
    const foundNote = await prismaClient.note.findUnique({ where: { id } });

    if (!foundNote) return;

    const { isPublic, title, content, tags } = foundNote;

    return {
      id,
      isPublic,
      title,
      tags,
      content,
    };
  }
  async createNote({ isPublic, content, title, tags }: CreateNoteDTO): Promise<PublicNoteDTO> {
    const createdNote = await prismaClient.note.create({
      data: {
        isPublic,
        title,
        content,
        date: this.getDate(),
      },
    });

    return {
      id: createdNote.id,
      content,
      title,
      isPublic,
      tags,
    };
  }

  async getAllNotes(): Promise<PublicNoteDTO[]> {
    return await prismaClient.note.findMany({});
  }
  //return year-month-day
  getDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${year}-${month}-${day}`;
  }
}
