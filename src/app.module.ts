import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdministradorModule } from './administrador/administrador.module';
import { SecretariaModule } from './secretaria/secretaria.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { GraphQLModule } from '@nestjs/graphql';  
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,  
    autoSchemaFile: true,
  }), AdministradorModule, SecretariaModule, EmpleadoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
