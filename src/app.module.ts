import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { SalasModule } from './salas/salas.module';
import { FilmesModule } from './filmes/filmes.module';
import { SessoesModule } from './sessoes/sessoes.module';
import { IngressosModule } from './ingressos/ingressos.module';
import { SessoesDispModule } from './sessoes-disp/sessoes-disp.module';

@Module({
  imports: [SalasModule, FilmesModule, SessoesModule, IngressosModule, SessoesDispModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
