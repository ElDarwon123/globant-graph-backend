import { Injectable } from '@nestjs/common';
import { CreateSecretariaInput } from './dto/create-secretaria.input';
import { UpdateSecretariaInput } from './dto/update-secretaria.input';

@Injectable()
export class SecretariaService {
  create(createSecretariaInput: CreateSecretariaInput) {
    return 'This action adds a new secretaria';
  }

  findAll() {
    return `This action returns all secretaria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} secretaria`;
  }

  update(id: number, updateSecretariaInput: UpdateSecretariaInput) {
    return `This action updates a #${id} secretaria`;
  }

  remove(id: number) {
    return `This action removes a #${id} secretaria`;
  }
}
