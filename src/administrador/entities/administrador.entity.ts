import { ObjectType, Field} from '@nestjs/graphql';

@ObjectType()
export class postSecretarie {
  @Field((dato) => String)
  nombre: string
  @Field((dato) => String)
  apellido: string
  @Field((dato) => String)
  identificacion: string
}
export class postEmployee{
  nombre: string
  apellido: string
  identificacion: string
}
