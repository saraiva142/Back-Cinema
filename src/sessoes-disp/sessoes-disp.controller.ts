import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SessoesDispService } from './sessoes-disp.service';
import { CreateSessoesDispDto } from './dto/create-sessoes-disp.dto';
import { UpdateSessoesDispDto } from './dto/update-sessoes-disp.dto';

@Controller('sessoes-disp')
export class SessoesDispController {
  constructor(private readonly sessoesDispService: SessoesDispService) {}

  @Post()
  create(@Body() createSessoesDispDto: CreateSessoesDispDto) {
    return this.sessoesDispService.create(createSessoesDispDto);
  }

  @Get()
  findAll() {
    return this.sessoesDispService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sessoesDispService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSessoesDispDto: UpdateSessoesDispDto) {
    return this.sessoesDispService.update(+id, updateSessoesDispDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sessoesDispService.remove(+id);
  }
}
