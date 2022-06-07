import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-pipe',
  templateUrl: './template-pipe.component.html',
  styleUrls: ['./template-pipe.component.scss'],
})
export class TemplatePipeComponent implements OnInit {
  @Input() title = 'Title Template Pipe';

  constructor() {}

  ngOnInit(): void {}
}
