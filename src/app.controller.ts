import { Controller, Get, Param } from '@nestjs/common';
import { AppService, Coffee } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('coffees')
  getCoffees(): Coffee[] {
    return this.appService.getCoffees();
  }
  @Get(':id/detalhes')
  getCoffeeDisc(@Param('id') id: string): Coffee {
    return this.appService.getCoffeeDisc(Number(id));
  }
}
