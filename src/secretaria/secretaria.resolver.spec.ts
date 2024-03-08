import { Test, TestingModule } from '@nestjs/testing';
import { SecretariaResolver } from './secretaria.resolver';
import { SecretariaService } from './secretaria.service';

describe('SecretariaResolver', () => {
  let resolver: SecretariaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecretariaResolver, SecretariaService],
    }).compile();

    resolver = module.get<SecretariaResolver>(SecretariaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
