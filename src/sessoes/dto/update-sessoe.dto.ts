import { PartialType } from '@nestjs/mapped-types';
import { CreateSessaoDto } from './create-sessoe.dto';

export class UpdateSessoeDto extends PartialType(CreateSessaoDto) {}
