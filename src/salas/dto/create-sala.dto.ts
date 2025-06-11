import { IsInt, IsString } from 'class-validator';

export class CreateSalaDto {
  @IsString()
  nomeSala: string;

  @IsInt()
  capacidade: number;

  @IsString()
  tipo: string;
}