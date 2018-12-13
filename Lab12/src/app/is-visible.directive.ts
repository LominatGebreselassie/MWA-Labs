import { Directive, Input, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {

  @Input('isVisible') isVisible: boolean

  @HostBinding('style.visibility') visibility;
  constructor(private element: ElementRef) { 

  }

  ngOnInit(){
    this.element.nativeElement.style.visibility= !this.isVisible ? 'visible':'hidden';

  }
}
