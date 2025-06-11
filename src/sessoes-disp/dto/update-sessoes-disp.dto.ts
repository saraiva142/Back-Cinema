import { PartialType } from '@nestjs/mapped-types';
import { CreateSessoesDispDto } from './create-sessoes-disp.dto';

export class UpdateSessoesDispDto extends PartialType(CreateSessoesDispDto) {}
