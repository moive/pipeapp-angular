import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
  text: string = 'TiTle oF the pAgE';
  constructor() {}

  ngOnInit(): void {}
}
