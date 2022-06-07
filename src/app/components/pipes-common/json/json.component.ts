import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.scss'],
})
export class JsonComponent implements OnInit {
  person = {
    name: 'Moises',
    lastName: 'Velasquez',
    age: 40,
  };

  constructor() {}

  ngOnInit(): void {}
}
