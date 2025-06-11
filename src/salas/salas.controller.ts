import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalasService } from './salas.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';

@Controller('salas')
export class SalasController {
  constructor(private readonly salasService: SalasService) {}

  @Post()
  create(@Body() createSalaDto: CreateSalaDto) {
    console.log("passou");
    return this.salasService.criarSala(createSalaDto);
  }

  @Get()
  findAll() {
    return this.salasService.getSalas();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salasService.getSalaPorId(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalaDto: UpdateSalaDto) {
    return this.salasService.atualizarSala(+id, updateSalaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salasService.removerSala(+id);
  }
}
