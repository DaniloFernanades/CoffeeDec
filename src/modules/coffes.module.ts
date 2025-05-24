import { Module } from '@nestjs/common';
import { CoffeeController } from './coffes.controller';
import { CoffesService } from './coffes.service';

@Module({
  imports: [],
  controllers: [CoffeeController],
  providers: [CoffesService],
})
export class CoffesModule {}
