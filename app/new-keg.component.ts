import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div>
    <div class="keg-form">
      <h3>Add a Keg</h3>
        <label class="col-sm-6" for="newName">Name</label><input class="col-sm-6 input-lg keg-form" #newName>
        <label class="col-sm-6" for="newBrand">Brand</label><input class="col-sm-6 input-lg keg-form" #newBrand>
        <label class="col-sm-6" for="newPrice">Price</label><input type="number" class="col-sm-6 input-lg keg-form" #newPrice>
        <label class="col-sm-6" for="newAlcoholContent">Alcohol Content</label><input class="col-sm-6 input-lg keg-form" #newAlcoholContent>
        <label class="col-sm-6" for="newPintsLeft">Pints Left</label><input value="124" class="col-sm-6 input-lg keg-form" #newPintsLeft>
        <button (click)="addKeg(newName, newBrand, newPrice, newAlcoholContent, newPintsLeft)" class="col-sm-6 btn-success btn-lg add-button addKeg">Add</button>
    </div>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newName: HTMLInputElement, newBrand: HTMLInputElement, newPrice: HTMLInputElement, newAlcoholContent: HTMLInputElement, newPintsLeft: HTMLInputElement) {

    var keg = new Keg(newName.value, newBrand.value, Number(newPrice.value), Number(newAlcoholContent.value), Number(newPintsLeft.value));
    this.onSubmitNewKeg.emit(keg);
    console.log(keg);
  }
}
