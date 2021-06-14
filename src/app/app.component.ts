import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name: string = 'john smith';
  value: number = 1000;
  obj = {
    name: 'Michael'
  }

  showName(){
    console.log(this.name);
    console.log(this.value);
    console.log(this.obj);
  }
}
