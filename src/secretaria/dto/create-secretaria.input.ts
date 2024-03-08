import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSecretariaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
