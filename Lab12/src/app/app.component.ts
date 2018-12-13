import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<div>
  <strong>WELCOME TO {{title}}</strong>
  <app-smart [items]="items"></app-smart>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab12';
  items=["a","b","c","d"]
}
