import { Component } from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
  ]
})
export class NotCommonsComponent {

  // i18nSelect
  name: string = 'Isabel';
  gender: string = 'fem';

  invitationMap = {
    'man': 'invitarlo',
    'fem' : 'invitarla'
  }

  // i18nPlural
  clients: string[] = ['Maria', 'John', 'Michael', 'Robert'];

  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  changeClient(){
    this.name = 'John';
    this.gender = 'man';
  }

  removeClient(){
    this.clients.shift()
  }

  // KeyValue Pipe
  person = {
    name: 'Michael',
    age: 35,
    address: 'Ottawa, Canada'
  }

  // Json Pipe

  heroes = [
    {
      name: 'Superman',
      fly: true
    },
    {
      name: 'Robbin',
      fly: false
    },
    {
      name: 'Aquaman',
      fly: false
    }
  ]

  // Async Pipe

  myObservable = interval(1000); // 0,1,2,3....

  promiseValue = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('promise data loaded...')
    },3500);
  });

}
