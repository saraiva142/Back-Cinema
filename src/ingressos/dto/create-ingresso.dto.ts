import { IsIn, IsInt, IsNumberString, IsString } from "class-validator";

export class CreateIngressoDto {
    @IsString()
    cliente: string;

    @IsNumberString()
    cpf: string;

    @IsString()
    assento: string;

    @IsString()
    @IsIn(['Crédito', 'Débito', 'PIX', 'Dinheiro'])
    pagamento: string;

    @IsInt()
    sessaoId: number;
}
