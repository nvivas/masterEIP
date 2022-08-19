import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appEstiloPropio]',
})
export class EstiloPropioDirective {
  constructor() {}

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  @HostBinding('style.fontSize') fontSize = '16px';

  @HostListener('mouseenter') mouseHover(eventData: Event) {
    this.backgroundColor = 'blue';
    this.fontSize = '30px';
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.backgroundColor = 'transparent';
    this.fontSize = '16px';
  }
}
