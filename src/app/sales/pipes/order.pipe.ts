import {Pipe, PipeTransform} from '@angular/core';
import {Heroe} from "../interfaces/sales.interface";

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(heroes: Heroe[], orderBy: string = 'name'): Heroe[] {

    switch (orderBy) {
      case 'name':
        return heroes.sort((a, b) => (a.name > b.name) ? 1 : -1);
      case 'fly':
        return heroes.sort((a, b) => (a.fly > b.fly) ? -1 : 1);

      case 'color':
        return heroes.sort((a, b) => (a.color > b.color) ? 1 : -1);

      default:
        return heroes;

    }

    /*const orderByName = heroes.sort( (a,b) => (a.name > b.name) ? 1 : -1);
    const orderByFly = heroes.sort( (a,b) => (a.fly > b.fly) ? 1 : -1);
    const orderByColor = heroes.sort( (a,b) => (a.color > b.color) ? 1 : -1);

    const orders: any = {
      'name' : orderByName,
      'fly' : orderByFly,
      'color' : orderByColor
    }

    const orderDefault = heroes;

    const orderHeroes = orders[orderBy] || orderDefault;

    console.log(orderHeroes);

    return orderHeroes;*/

  }

}
