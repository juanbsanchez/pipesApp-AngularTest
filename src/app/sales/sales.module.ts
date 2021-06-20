import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PrimeNgModule} from "../prime-ng/prime-ng.module";

//Components
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import {CustomUppercasePipe} from "./pipes/customUppercase.pipe";
import {FlyPipe} from "./pipes/fly.pipe";
import { OrderPipe } from './pipes/order.pipe';




@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent,
    CustomUppercasePipe,
    FlyPipe,
    OrderPipe
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
