import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "emptyState",
  pure: false
})
export class EmptyPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredEmptyState = args[0];
    if (desiredEmptyState === "empty") {
      return input.filter(function(keg) {
        return keg.pintsLeft == 0;
      });
    } else if (desiredEmptyState == "almostEmpty") {
      return input.filter((keg) => {
        return keg.pintsLeft <= 10;
      });
    } else {
      return input;
    }
  }
}
