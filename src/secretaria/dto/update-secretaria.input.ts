import { CreateSecretariaInput } from './create-secretaria.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSecretariaInput extends PartialType(CreateSecretariaInput) {
  @Field(() => Int)
  id: number;
}
