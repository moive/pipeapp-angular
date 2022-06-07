import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18n-select',
  templateUrl: './i18n-select.component.html',
  styleUrls: ['./i18n-select.component.scss'],
})
export class I18nSelectComponent implements OnInit {
  gender: string = 'm';

  message = {
    m: 'Welcome Mr.',
    f: 'Welcome Mrs.',
    other: 'Not found',
  };

  constructor() {}

  ngOnInit(): void {}
}
