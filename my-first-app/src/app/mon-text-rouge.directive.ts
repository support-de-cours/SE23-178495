import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMonTextRouge]'
})
export class MonTextRougeDirective {

  constructor(
    private elementRef: ElementRef
  ) {
    // let element = document.querySelector('[appMonTextRouge]');
    this.elementRef.nativeElement.style.color = 'red';
  }

}
