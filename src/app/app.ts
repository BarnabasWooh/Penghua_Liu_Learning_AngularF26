import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditGuard } from './services/edit-guard';
import {LoadingService} from './services/loading';
import {ErrorService} from './services/error';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title=  'Penghua';
  protected readonly  weather = 'Sunny';
  protected guardService = inject(EditGuard);
  protected loadingService = inject(LoadingService);
  protected errorService   = inject(ErrorService);
}


