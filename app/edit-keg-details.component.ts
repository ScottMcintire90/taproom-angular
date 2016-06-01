import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <div class="keg-form">
      <label class="col-sm-8" for="kegName">Name</label><input [(ngModel)]="keg.name" class="col-sm-8 input-lg keg-form">
      <label class="col-sm-8" for="kegBrand">Brand</label><input [(ngModel)]="keg.brand"
      class="col-sm-8 input-lg keg-form">
      <label class="col-sm-8" for="kegPrice">Price</label><input [(ngModel)]="keg.price"
      class="col-sm-8 input-lg keg-form">
      <label class="col-sm-8" for="kegAlcoholContent">Alcohol Content</label><input [(ngModel)]="keg.alcoholContent" class="col-sm-8 input-lg keg-form">
      <label class="col-sm-8" for="kegPint">Pints Remaining</label><input [(ngModel)]="keg.pintsLeft" class="col-sm-8 input-lg keg-form">
    </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
