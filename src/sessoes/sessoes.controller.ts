import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SessoesService } from './sessoes.service';
import { CreateSessaoDto } from './dto/create-sessoe.dto';
import { UpdateSessoeDto } from './dto/update-sessoe.dto';


@Controller('sessoes')
export class SessoesController {
  constructor(private readonly sessoesService: SessoesService) {}

  @Post()
    create(@Body() createSessaoDto: CreateSessaoDto) {
      console.log("passou");
      return this.sessoesService.criarSessao(createSessaoDto);
    }
  
    @Get()
    findAll() {
      return this.sessoesService.getSessoes();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.sessoesService.getSessaoPorId(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateSessoeDto: UpdateSessoeDto) {
      return this.sessoesService.atualizarSessao(+id, updateSessoeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.sessoesService.removerSessao(+id);
    }

}
