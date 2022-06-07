import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-value',
  templateUrl: './key-value.component.html',
  styleUrls: ['./key-value.component.scss'],
})
export class KeyValueComponent implements OnInit {
  person = {
    name: 'Moises',
    lastName: 'Velasquez',
    age: 40,
    position: 'Developer',
  };
  constructor() {}

  ngOnInit(): void {}
}
