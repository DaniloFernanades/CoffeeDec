import { Controller, Get, Param, Post } from '@nestjs/common';
import { CoffesService, Coffee } from './coffes.service';

@Controller()
export class CoffeeController {
  constructor(private readonly coffesService: CoffesService) {}

  @Get()
  getHello(): string {
    return this.coffesService.getHello();
  }

  @Get('coffees')
  getCoffees(): Coffee[] {
    return this.coffesService.getCoffees();
  }

  @Get(':id/detalhes')
  getCoffeeDisc(@Param('id') id: string): Coffee {
    return this.coffesService.getCoffeeDisc(Number(id));
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
    return this.coffesService.postCoffeeCreate(newCoffee);
  }
}
