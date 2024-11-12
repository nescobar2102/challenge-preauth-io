import { Test, TestingModule } from '@nestjs/testing';
import { Game01Controller } from './game-01.controller';

describe('Game01Controller', () => {
  let controller: Game01Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Game01Controller],
    }).compile();

    controller = module.get<Game01Controller>(Game01Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
