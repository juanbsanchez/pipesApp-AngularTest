import { Component, } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent{

lowerName: string = 'john';
upperName: string = 'MICHAEL';
completeName: string = 'kEviN';

currentDate: Date = new Date();
}
