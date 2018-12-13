import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <div appLoggable>
    <ul>
      <li *ngFor="let item of items"> <app-dump>{{item}}</app-dump></li>
      </ul>
    </div>
  `,
  styles: []
})
export class SmartComponent implements OnInit {

  @Input() items: string[];  
  constructor() { }

  ngOnInit() {
  }

}
