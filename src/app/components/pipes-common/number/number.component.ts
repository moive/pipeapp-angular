import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
})
export class NumberComponent implements OnInit {
  qualification: number = 78.154545;
  percentage: number = 0.36;
  balance: number = 12000;

  constructor() {}

  ngOnInit(): void {}
}
