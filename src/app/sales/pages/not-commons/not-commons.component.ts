import { Component } from '@angular/core';

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

}
