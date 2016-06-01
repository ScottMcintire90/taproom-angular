import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div>
      <h3>{{ keg.name }}</h3>
      <ul class="kegList">
        <p><strong>Brand:</strong> {{ keg.brand }}</p>
        <p [class.expensive]="keg.price >= 600" [class.inexpensive]="keg.price >= 400 && keg.price < 600" [class.moderate]="keg.price < 400"><strong>Price:</strong> \${{ keg.price }}</p>
        <p [class.highAlc]="keg.alcoholContent >= 10" [class.mediumAlc]="keg.alcoholContent >= 7 && keg.alcoholContent < 10" [class.lowAlc]="keg.alcoholContent < 7"><strong>Alcohol Content:</strong> {{ keg.alcoholContent }}%</p>
        <p><strong>Pints Left:</strong> {{ keg.pintsLeft }}</p>
      </ul>
      <button (click)="subtractPint(keg)" class="btn btn-info subtractPint">Pint Served</button>
    </div>
  `
})
export class KegComponent {
  public keg: Keg;

  subtractPint(keg: Keg): void {
    keg.pintsLeft--;
  }
}
