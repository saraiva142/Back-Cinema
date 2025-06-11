import { IsString, IsDateString, IsNumberString } from 'class-validator';

export class CreateFilmeDto {
  @IsString()
  titulo: string;

  @IsString()
  genero: string;

  @IsString()
  descricao: string;

  @IsString()
  classificacao: string;

  @IsNumberString({}, { message: 'A duração deve ser um número em formato de string' })
  duracao: string;

  @IsDateString({}, { message: 'A data de estreia deve estar no formato YYYY-MM-DD ou ISO completo' })
  estreia: string;
}
