import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent implements OnInit {
  uppercase: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toUppercase(){
    this.uppercase = !this.uppercase;
  }

}
