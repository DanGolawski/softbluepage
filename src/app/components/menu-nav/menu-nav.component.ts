import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent {

  @Output() scroll: EventEmitter<string> = new EventEmitter();

  public scrollTo(elementName: string): void {
    this.scroll.emit(elementName);
  }

}
