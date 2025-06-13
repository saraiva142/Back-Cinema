import { Injectable } from '@nestjs/common';
import { UpdateSessoeDto } from './dto/update-sessoe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SessoesService {
  constructor(private prisma: PrismaService) {}
  
    async getSessoes() {
      return await this.prisma.sessao.findMany({
        include: {
          filme: true,
          sala: true,
        },
      });
      
    }
  
    async criarSessao(data: {
      dataHora: string;
      valor: string;
      idioma: string;
      formato: string;
      filmeId: number;
      salaId: number;
    }) {
      return await this.prisma.sessao.create({
        data:{
          ...data,
          dataHora: new Date(data.dataHora),
          valor: parseFloat(data.valor),
        },
      });
    }
  
    async getSessaoPorId(id: number) {
      return await this.prisma.sessao.findUnique({
        where: { id },
      });
    }

    async atualizarSessao(id: number, data: {
      dataHora?: string;
      valor?: string;
      idioma?: string;
      formato?: string;
      filmeId?: number;
      salaId?: number;
    }) {
      return await this.prisma.sessao.update({
        where: { id },
        data: {
          ...data,
          dataHora: data.dataHora ? new Date(data.dataHora) : undefined,
          valor: data.valor ? parseFloat(data.valor) : undefined,
        },
      });
    }

    async removerSessao(id: number) {
      return await this.prisma.sessao.delete({
        where: { id },
      });
    }
}
