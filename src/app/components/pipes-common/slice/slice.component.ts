import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slice',
  templateUrl: './slice.component.html',
  styleUrls: ['./slice.component.scss'],
})
export class SliceComponent implements OnInit {
  fruits: Array<string> = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Grapes',
    'Pineapple',
    'Strawberry',
  ];

  constructor() {}

  ngOnInit(): void {}
}
