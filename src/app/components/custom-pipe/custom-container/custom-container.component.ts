import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
  selector: 'app-custom-container',
  templateUrl: './custom-container.component.html',
  styleUrls: ['./custom-container.component.scss'],
})
export class CustomContainerComponent implements OnInit {
  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {}

  get dark(): boolean {
    return this.darkModeService.dark;
  }

  toggleDark() {
    this.darkModeService.toggleDark();
  }
}
