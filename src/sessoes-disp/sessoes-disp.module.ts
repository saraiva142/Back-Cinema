import { Module } from '@nestjs/common';
import { SessoesDispService } from './sessoes-disp.service';
import { SessoesDispController } from './sessoes-disp.controller';

@Module({
  controllers: [SessoesDispController],
  providers: [SessoesDispService],
})
export class SessoesDispModule {}
