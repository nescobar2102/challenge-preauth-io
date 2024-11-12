import { Test, TestingModule } from '@nestjs/testing';
import { GildedRoseController } from './gilded-rose.controller';

describe('GildedRoseController', () => {
  let controller: GildedRoseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GildedRoseController],
    }).compile();

    controller = module.get<GildedRoseController>(GildedRoseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
