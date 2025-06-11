import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';


@Controller()
export class FilmesController {
  constructor(private readonly appService: FilmesService) {}

  @Get("/filmes")
  filmes() {
    return this.appService.getFilmes();
  }

  @Get('/filmes/:id')
  async pegarPeloId(@Param('id') id: string) {
    return await this.appService.getFilmePorId(Number(id));
  }

  @Post('/filmes')
  async criar(@Body() body: CreateFilmeDto) {
    console.log('Body recebido:', body); // debugar a kralha
    const { titulo, genero, descricao, classificacao, duracao, estreia } = body;

    return await this.appService.criarFilme({
      titulo,
      genero,
      descricao,
      classificacao,
      duracao: Number(duracao),
      estreia: new Date(estreia), // converte direto
    });
  }

  @Put('/filmes/:id')
  async atualizar(@Param('id') id: string, @Body() body: any) {
    const { titulo, genero, descricao, classificacao, duracao, estreia } = body;

    const dataEstreia = validarData(estreia);

    return await this.appService.atualizarFilme(Number(id), {
      titulo,
      genero,
      descricao,
      classificacao,
      duracao: Number(duracao),
      estreia: dataEstreia,
    });
  }

  @Delete('/filmes/:id')
  async remover(@Param('id') id: string) {
    return await this.appService.removerFilme(Number(id));
  }

}

function validarData(data: string | Date | undefined): Date {
  if (!data) {
    throw new Error('Campo data de estreia é obrigatório');
  }

  // Se já for Date, retorna direto
  if (data instanceof Date) {
    return data;
  }

  // Se vier como string ISO (YYYY-MM-DD ou YYYY-MM-DDTHH:mm:ss)
  if (/^\d{4}-\d{2}-\d{2}/.test(data)) {
    const dataConvertida = new Date(data);
    if (isNaN(dataConvertida.getTime())) {
      throw new Error('Data inválida');
    }
    return dataConvertida;
  }

  // Se vier como DD/MM/YYYY
  if (data.includes('/')) {
    const partes = data.split('/');
    if (partes.length !== 3) {
      throw new Error('Data inválida. Use formato DD/MM/AAAA ou YYYY-MM-DD');
    }
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1;
    const ano = parseInt(partes[2], 10);

    const dataConvertida = new Date(ano, mes, dia);
    if (isNaN(dataConvertida.getTime())) {
      throw new Error('Data invalida');
    }
    return dataConvertida;
  }

  throw new Error('Formato de data não reconhecido');
}