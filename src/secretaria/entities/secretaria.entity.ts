import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Secretaria {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
