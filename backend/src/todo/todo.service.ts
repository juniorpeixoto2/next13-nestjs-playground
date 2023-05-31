import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  create(createTodoDto: CreateTodoDto) {
    return this.prisma.todos.create({
      data: {
        title: createTodoDto.title,
        description: createTodoDto.description,
      },
    });
  }

  findAll() {
    return this.prisma.todos.findMany();
  }

  findOne(id: number) {
    return this.prisma.todos.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.prisma.todos.update({
      where: {
        id,
      },
      data: {
        title: updateTodoDto.title,
        description: updateTodoDto.description,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
