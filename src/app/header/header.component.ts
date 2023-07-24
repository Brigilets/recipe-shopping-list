import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() destinationSelected = new EventEmitter<string>();
  collapsed = true;

  constructor() {}

  ngOnInit(): void {}
  onSelect(destination: string) {
    this.destinationSelected.emit(destination);
  }
}
