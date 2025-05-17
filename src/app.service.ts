import { Injectable, NotFoundException } from '@nestjs/common'

export interface Coffee {
  nome: string
  tipo: string
  id: number
  descricao: string
  preco: number
  tags: string[]
  quantidade: number
}

const coffees: Coffee[] = [
  {
    nome: 'Espresso',
    tipo: 'forte',
    id: 1,
    descricao: 'Café forte e concentrado.',
    preco: 4.5,
    quantidade: 10,
    tags: ['clássico', 'rápido']
  },
  {
    nome: 'Mocha',
    tipo: 'doce',
    quantidade: 5,
    preco: 7.0,
    descricao: 'Café forte e concentrado.',
    id: 4,
    tags: ['chocolate', 'doce']
  }
];


@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }
  getCoffees(): Coffee[] {
    return coffees;
  }
  getCoffeeDisc(id: number): Coffee {
    const coffee = coffees.find((c) => c.id === id);
    if (!coffee) {
      throw new NotFoundException(`Café com ID ${id} não encontrado`);
    }
    return coffee;
  }
}
