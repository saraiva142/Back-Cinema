import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
   constructor(private prisma: PrismaService) {}


  async getFilmes() {
    const filmes = await this.prisma.filme.findMany();

    return filmes
  }

  async criarFilme(titulo: string) {
    
    const filme = await this.prisma.filme.create({data: {
      titulo
    }})

    return filme
  }

}
