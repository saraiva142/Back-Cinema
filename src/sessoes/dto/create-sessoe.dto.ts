import { IsDateString, IsIn, IsInt, IsNumberString, IsString } from "class-validator";

export class CreateSessaoDto {
  @IsDateString()
  dataHora: string;

  @IsNumberString()
  valor: string;

  @IsString()
  @IsIn(['Dublado', 'Legendado'])
  idioma: string;

  @IsString()
  @IsIn(['2D', '3D'])
  formato: string;

  @IsInt()
  filmeId: number;

  @IsInt()
  salaId: number;
}