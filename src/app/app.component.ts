import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  name: string = 'john smith';
  value: number = 1000;
  obj = {
    name: 'Michael'
  }

  constructor(private primengConfig: PrimeNGConfig) {
  }

  ngOnInit(){
    this.primengConfig.ripple = true; //bubble effect on fieldset header
  }

  showName(){
    console.log(this.name);
    console.log(this.value);
    console.log(this.obj);
  }
}
