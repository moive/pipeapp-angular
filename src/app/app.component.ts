import { Component } from '@angular/core';
import { DarkModeService } from './shared/services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private darkModeService: DarkModeService) {}

  get dark(): boolean {
    return this.darkModeService.dark;
  }
}
