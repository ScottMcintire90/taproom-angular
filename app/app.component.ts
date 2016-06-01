import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';


@Component({
  selector: 'tap-room',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1><center>Tap Room</center></h1>
      <div class="row">
        <h2>Available Kegs</h2>
        <keg-list
          [kegList]="kegs"
          (onKegSelect)="kegWasSelected($event)">
        </keg-list>
      </div>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Name 1", "Brand 1", 375, 10, 124),
      new Keg("Name 2", "Brand 2", 500, 7.2, 123),
      new Keg("Name 3", "Brand 3", 700, 5.5, 122)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
  }
}
