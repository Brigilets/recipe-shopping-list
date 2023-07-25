import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('document:click', ['$event']) toggleOpen(e: Event) {
    this.isOpen = this.elRef.nativeElement.contains(e.target)
      ? !this.isOpen
      : false;
  }

  constructor(private elRef: ElementRef) {}
}
