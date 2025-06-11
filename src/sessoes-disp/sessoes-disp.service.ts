import { Injectable } from '@nestjs/common';
import { CreateSessoesDispDto } from './dto/create-sessoes-disp.dto';
import { UpdateSessoesDispDto } from './dto/update-sessoes-disp.dto';

@Injectable()
export class SessoesDispService {
  create(createSessoesDispDto: CreateSessoesDispDto) {
    return 'This action adds a new sessoesDisp';
  }

  findAll() {
    return `This action returns all sessoesDisp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sessoesDisp`;
  }

  update(id: number, updateSessoesDispDto: UpdateSessoesDispDto) {
    return `This action updates a #${id} sessoesDisp`;
  }

  remove(id: number) {
    return `This action removes a #${id} sessoesDisp`;
  }
}
