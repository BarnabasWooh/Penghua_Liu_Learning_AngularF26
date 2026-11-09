import {computed, inject, Injectable, signal} from '@angular/core';

@Injectable({ providedIn: 'root'})
export class LoadingService {
  // Count active HTTP requests.
  private count = signal(0);

  // True when at least one request is active.
  isLoading = computed(() => this.count() > 0);

// Increase or decrease the request count
start(){
  this.count.update(n => n + 1);
}
stop(){
  this.count.update(n => Math.max(0, n - 1));
}
}
