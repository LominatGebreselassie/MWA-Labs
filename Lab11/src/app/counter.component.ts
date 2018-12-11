import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div >
      <button (click)="decrease()">-</button>
      <strong>{{counterValue}}</strong>
      <button (click)="increase()">+</button>
    </div>
  `,
  styles: ['div{border:1px solid orange; width: 150px; height:50px; text-align: center;}']
})
export class CounterComponent implements OnInit{

@Input('counter') counterValue : number;

@Output() counterChange:EventEmitter<number>

  constructor() { 
    this.counterChange = new EventEmitter();
    this.counterValue=0
  }

  ngOnInit() {  

  }
increase(){
  this.counterValue++;
  this.counterChange.emit(this.counterValue)
}
decrease(){
  this.counterValue--;
  this.counterChange.emit(this.counterValue)
}
}
