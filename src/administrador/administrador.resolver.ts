import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdministradorService } from './administrador.service';
import { postEmployee, postSecretarie } from './entities/administrador.entity';
import { CreateEmployeeInput, CreateSecretaryInput } from './dto/create-administrador.input';
import { UpdateSecretaryInput } from './dto/update-administrador.input';


@Resolver(() => postSecretarie)
export class AdministradorResolver {
  constructor(private readonly administradorService: AdministradorService) {}

  @Mutation(() => postSecretarie)
  createAdministrador(@Args('createAdministradorInput') createAdministradorInput: CreateSecretaryInput) {
    return this.administradorService.create(createAdministradorInput);
  }

  @Query(() => [postSecretarie])
  findAllSecretaries() {
    return this.administradorService.findAllSecretaries();
  }
 
  @Query(() => postSecretarie, { name: 'administrador' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.administradorService.findOne(id);
  }

  @Mutation(() => postSecretarie)
  updateAdministrador(@Args('updateSecretaryInput') UpdateSecretaryInput: UpdateSecretaryInput) {
    return this.administradorService.update(UpdateSecretaryInput.nombre, UpdateSecretaryInput);
  }

  @Mutation(() => postSecretarie)
  removeAdministrador(@Args('id', { type: () => Int }) id: number) {
    return this.administradorService.remove(id);
  }
  // empleados


  @Mutation(() => postEmployee)
  createEmployee(@Args('createEmployeeIput') createEmployeeIput: CreateEmployeeInput) {
    return this.administradorService.create(createEmployeeIput);
  }

  @Query(() => [postEmployee])
  findAllEmployees() {
    return this.administradorService.findAllEmployee();
  }
 
  @Query(() => postEmployee, { name: 'administrador' })
  findOneEmployee(@Args('id', { type: () => Int }) id: number) {
    return this.administradorService.findOne(id);
  }

  @Mutation(() => postEmployee)
  updateEmployee(@Args('updateAdministradorInput') updateSecretaryInput: UpdateSecretaryInput) {
    return this.administradorService.updateEmployee(updateSecretaryInput.nombre, updateSecretaryInput);
  }

  @Mutation(() => postEmployee)
  removeEmployee(@Args('id', { type: () => Int }) id: number) {
    return this.administradorService.remove(id);
  }
}
