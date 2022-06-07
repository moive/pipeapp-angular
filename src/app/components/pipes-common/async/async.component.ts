import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss'],
})
export class AsyncComponent implements OnInit {
  imgUrl: Promise<string> = new Promise<string>((resolve, reject) => {
    resolve('https://angular.io/assets/images/logos/angular/logo-nav@2x.png');
    reject('Image not found');
  });
  constructor() {}

  ngOnInit(): void {}
}
