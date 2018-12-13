import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dump',
  template: `
    <div appIsVisible [isVisible]="true">
     <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class DumpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
