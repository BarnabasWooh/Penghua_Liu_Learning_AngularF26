import { Service } from '@angular/core';
import {Injectable, signal} from '@angular/core';

@Service()
export class EditGuard {
  guardEnabled = signal(true);

  toggleGuard() {
    this.guardEnabled.update(enabled => !enabled);
  }
}
