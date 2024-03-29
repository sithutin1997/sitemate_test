import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}
  async create(createPostDto: CreatePostDto) {
    const result = await this.prisma.post.create({
      data : {
        title: createPostDto.title,
        description: createPostDto.description
      }
    })
    return result;
  }

  async findAll() {
    return await this.prisma.post.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.post.findUnique({
      where : {
        id: id
      }
    });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return await this.prisma.post.update({
      where : {
        id: id
      },
      data: {
        title: updatePostDto.title,
        description: updatePostDto.description
      }
    });
  }

  async remove(id: number) {
    return await this.prisma.post.delete({
      where : {
        id: id
      }
    });
  }
}
