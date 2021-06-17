import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: [
  ]
})
export class NumbersComponent implements OnInit {

  netSales: number = 2567789.5567;
  percent: number = 0.48;

  constructor() { }

  ngOnInit(): void {

  }

}
