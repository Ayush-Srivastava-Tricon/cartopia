import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyHighlight]'
})
export class MyHighlightDirective {

  constructor(private el : ElementRef) {

    this.el.nativeElement.style.backgroundColor = "green";
    this.el.nativeElement.style.color = "white";
    this.el.nativeElement.style.textAlign = "center";
    this.el.nativeElement.style.borderRadius = "10px"

   }

}
