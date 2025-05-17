import { Controller, Get, Param, Post } from '@nestjs/common';
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

  @Post('coffee-create')
  postCoffeeCreate(): Coffee {
    const newCoffee: Coffee = {
      nome: 'Espresso-2',
      tipo: 'forte',
      id: 5,
      descricao: 'Café forte e concentrado.',
      preco: 4.5,
      quantidade: 10,
      tags: ['clássico', 'rápido']
    };
    return this.appService.postCoffeeCreate(newCoffee);
  }
}
