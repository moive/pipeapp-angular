import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18n-plural',
  templateUrl: './i18n-plural.component.html',
  styleUrls: ['./i18n-plural.component.scss'],
})
export class I18nPluralComponent implements OnInit {
  notification: number = 0;

  messages = {
    '=0': 'You have not notification',
    '=1': 'You have # notification',
    other: 'You have # notifications',
  };

  constructor() {}

  ngOnInit(): void {}

  addNotification() {
    this.notification++;
  }
}
