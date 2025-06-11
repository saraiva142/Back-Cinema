import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FilmesService {
   constructor(private prisma: PrismaService) {}


  async getFilmes() {
    const filmes = await this.prisma.filme.findMany();

    return filmes.map(filme => ({
      ...filme,
      estreia: filme.estreia.toISOString().split('T')[0],
    }));
  }

  async criarFilme(data: {
    titulo: string;
    genero: string;
    descricao: string;
    classificacao: string;
    duracao: number;
    estreia: Date;
  }) {
    const filme = await this.prisma.filme.create({
      data: {
        ...data,
      },
    });

    return {
      ...filme,
      estreia: filme.estreia.toISOString().split('T')[0],
    };
  }

  async getFilmePorId(id: number) {
    return await this.prisma.filme.findUnique({
      where: { id },
    });
  }

  async atualizarFilme(id: number, data: {
    titulo: string;
    genero: string;
    descricao: string;
    classificacao: string;
    duracao: number;
    estreia: Date;
  }) {
    return await this.prisma.filme.update({
      where: { id },
      data,
    });
  }

  async removerFilme(id: number) {
    return await this.prisma.filme.delete({
      where: { id },
    });
  }
}

