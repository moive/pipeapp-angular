import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit {
  dateNow = new Date(); // or Date.now();
  constructor() {}

  ngOnInit(): void {}
}
