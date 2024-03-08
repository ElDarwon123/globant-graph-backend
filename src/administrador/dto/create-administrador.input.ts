import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSecretaryInput {
  @Field()
  nombre: string;

  @Field()
  apellido: string;

  @Field()
  identificacion: string;
}

@InputType()
export class CreateEmployeeInput {
  @Field()
  nombre: string;

  @Field()
  apellido: string;

  @Field()
  identificacion: string;
} 