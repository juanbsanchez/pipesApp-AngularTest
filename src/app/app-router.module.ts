import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {BasicsComponent} from "./sales/pages/basics/basics.component";
import {NumbersComponent} from "./sales/pages/numbers/numbers.component";
import {NotCommonsComponent} from "./sales/pages/not-commons/not-commons.component";
import {OrderComponent} from "./sales/pages/order/order.component";

const routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'not-commons',
    component: NotCommonsComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },

  /** otherwise **/
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
