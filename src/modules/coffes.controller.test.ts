import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeController } from './coffes.controller';
import { CoffesService } from './coffes.service';

describe('AppController', () => {
  let appController: CoffeeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CoffeeController],
      providers: [CoffesService],
    }).compile();

    appController = app.get<CoffeeController>(CoffeeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
