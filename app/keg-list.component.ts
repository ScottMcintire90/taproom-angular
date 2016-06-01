import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from
 './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import {EmptyPipe} from './empty.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [EmptyPipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `
  <div class="col-sm-6">
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">Show All</option>
      <option value="almostEmpty">10 Pints or Less Left</option>
      <option value="empty">Empty</option>
    </select>
    <keg-display *ngFor="#currentKeg of kegList | emptyState:filterEmpty"
      (click)="kegClicked(currentKeg)"
      [class.selected]="currentKeg === selectedKeg"
      [keg]="currentKeg">
    </keg-display>
  </div>
  <new-keg class="col-sm-6" (onSubmitNewKeg)="createKeg($event)"></new-keg>
  <div class="row">
    <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
    </edit-keg-details>
  </div>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterEmpty: string ="all";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
    // $('.keg-form').addClass('.hide');
  }
  createKeg(keg: Keg): void {
    this.kegList.push(
      keg
    );
  }
  onChange(filterOption) {
    this.filterEmpty = filterOption;
  }
}
