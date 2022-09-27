import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'softblueproject';

  public scrollTo(elementId: string) {
    document.querySelector(`#${elementId}`)?.scrollIntoView();
  }
}
