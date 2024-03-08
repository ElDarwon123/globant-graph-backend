import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SecretariaService } from './secretaria.service';
import { Secretaria } from './entities/secretaria.entity';
import { CreateSecretariaInput } from './dto/create-secretaria.input';
import { UpdateSecretariaInput } from './dto/update-secretaria.input';

@Resolver(() => Secretaria)
export class SecretariaResolver {
  constructor(private readonly secretariaService: SecretariaService) {}

  @Mutation(() => Secretaria)
  createSecretaria(@Args('createSecretariaInput') createSecretariaInput: CreateSecretariaInput) {
    return this.secretariaService.create(createSecretariaInput);
  }

  @Query(() => [Secretaria], { name: 'secretaria' })
  findAll() {
    return this.secretariaService.findAll();
  }

  @Query(() => Secretaria, { name: 'secretaria' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.secretariaService.findOne(id);
  }

  @Mutation(() => Secretaria)
  updateSecretaria(@Args('updateSecretariaInput') updateSecretariaInput: UpdateSecretariaInput) {
    return this.secretariaService.update(updateSecretariaInput.id, updateSecretariaInput);
  }

  @Mutation(() => Secretaria)
  removeSecretaria(@Args('id', { type: () => Int }) id: number) {
    return this.secretariaService.remove(id);
  }
}
