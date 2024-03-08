import { CreateSecretaryInput } from './create-administrador.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSecretaryInput extends PartialType(CreateSecretaryInput) {
  @Field(() => String)
  nombre: string;
  apellido?: string;
}
@InputType()
export class UpdateEmployeeInput extends PartialType(CreateSecretaryInput) {
  @Field(() => String)
  nombre: string;
  apellido?: string;
}
