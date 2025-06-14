import { Injectable } from '@nestjs/common';
import { CreateIngressoDto } from './dto/create-ingresso.dto';
import { UpdateIngressoDto } from './dto/update-ingresso.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IngressosService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.ingresso.findMany({
      include: {
        sessao: {
          include: {
            filme: true,
            sala: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.ingresso.findUnique({
      where: { id },
      include: {
        sessao: {
          include: {
            filme: true,
            sala: true,
          },
        },
      },
    });
  }

  async create(data: CreateIngressoDto) {
    return await this.prisma.ingresso.create({
      data,
      include: {
        sessao: {
          include: {
            filme: true,
            sala: true,
          },
        },
      },
    });
  }

  async update(id: number, data: UpdateIngressoDto) {
    return await this.prisma.ingresso.update({
      where: { id },
      data,
      include: {
        sessao: {
          include: {
            filme: true,
            sala: true,
          },
        },
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.ingresso.delete({
      where: { id },
    });
  }


}
