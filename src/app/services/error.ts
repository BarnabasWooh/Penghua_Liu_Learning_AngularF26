import {Injectable, signal} from '@angular/core';


@Injectable({ providedIn: 'root' })
export class ErrorService {
  // Store the current error message and clear
  message = signal<string | null>(null);

  clear(){this.message.set(null);
  }
}
