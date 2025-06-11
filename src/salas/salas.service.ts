import { Injectable } from '@nestjs/common';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SalasService {
  constructor(private prisma: PrismaService) {}

  async getSalas() {
    return await this.prisma.sala.findMany();
  }

  async criarSala(data: {
    nomeSala: string;
    capacidade: number;
    tipo: string;
  }) {
    return await this.prisma.sala.create({
      data,
    });
  }

  async getSalaPorId(id: number) {
    return await this.prisma.sala.findUnique({
      where: { id },
    });
  }

  async atualizarSala(id: number, data: {
    nomeSala?: string;
    capacidade?: number;
    tipo?: string;
  }) {
    return await this.prisma.sala.update({
      where: { id },
      data,
    });
  }

  async removerSala(id: number) {
    return await this.prisma.sala.delete({
      where: { id },
    });
  }
}
