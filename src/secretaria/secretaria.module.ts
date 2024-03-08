import { Module } from '@nestjs/common';
import { SecretariaService } from './secretaria.service';
import { SecretariaResolver } from './secretaria.resolver';

@Module({
  providers: [SecretariaResolver, SecretariaService],
})
export class SecretariaModule {}
