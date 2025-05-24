import { Module } from '@nestjs/common';
import { AppController } from './modules/coffes.controller';
import { AppService } from './modules/coffes.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
