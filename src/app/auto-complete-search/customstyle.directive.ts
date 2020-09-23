import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomstyle]'
})
export class CustomstyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.ChangeBgColor('red');
}
@HostListener('mouseover') onMouseOver() {
    this.ChangeBgColor('red');
}
ChangeBgColor(color: string) {
  this.renderer.setStyle(this.el.nativeElement, 'outline', '2px solid red');
}
}
