import { Directive, input, output } from '@angular/core';

@Directive({
  selector: '[appConfirm]',

  // Listen for clicks on the host element.
  host:{'(click)': 'askConfirmation()',},
})
export class Confirm {
  // Receive the confimation question from the HTML attribute.
  question = input ("Are you sure?", { alias: 'appConfirm'});

  //Emit an event when the user confirms
  confirmed = output<void>();
  // Ask the user before emitting the confirm event
  askConfirmation(){
    if (confirm(this.question())){
      this.confirmed.emit();
    }
  }
}
