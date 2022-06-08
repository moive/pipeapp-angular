import { Component, OnInit } from '@angular/core';
import { TemperatureValues } from 'src/app/shared/enums/temperature.enum';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
  selector: 'app-custom-container',
  templateUrl: './custom-container.component.html',
  styleUrls: ['./custom-container.component.scss'],
})
export class CustomContainerComponent implements OnInit {
  degrees: number = 31;
  type: TemperatureValues = TemperatureValues.F;
  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {}

  get dark(): boolean {
    return this.darkModeService.dark;
  }

  toggleDark() {
    this.darkModeService.toggleDark();
  }
}
