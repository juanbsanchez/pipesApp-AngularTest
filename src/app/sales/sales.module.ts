import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PrimeNgModule} from "../prime-ng/prime-ng.module";

//Components
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import {CustomUppercasePipe} from "./pipes/customUppercase.pipe";




@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent,
    CustomUppercasePipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent
  ]
})
export class SalesModule { }
