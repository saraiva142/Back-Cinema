import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/filmes")
  filmes() {
    return this.appService.getFilmes();
  }

  @Get("/filmes/:id")
  pegarPeloId() {

  }

  @Post("/filmes")
  async criar(@Body('titulo') titulo: string) {
    return await this.appService.criarFilme(titulo);
  }

  @Put("/filmes/:id")
  atualizar() {

  }

  @Delete("/filmes/:id")
  remover () {

  }
}
