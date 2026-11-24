import { Directive, input, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    // Listen for mouse events on the host element.
    '(mouseenter)': 'active.set(true)',
    '(mouseleave)': 'active.set(false)',

    // Change the host element's background color.
    '[style.backgroundColor]': "active() ? (color()) || '#DCEBFF' : ''",
  },
})
export class Highlight {
  // Receive a color value from the HTML attribute.
  color = input('', {alias: 'appHighlight'});

  // Track the current hover state.
  protected active = signal(false);
}
