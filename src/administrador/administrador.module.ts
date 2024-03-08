import { Module } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { AdministradorResolver } from './administrador.resolver';

@Module({
  providers: [AdministradorResolver, AdministradorService],
})
export class AdministradorModule {}
