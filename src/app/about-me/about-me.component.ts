import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
    standalone: false
})
export class AboutMeComponent implements OnInit {
  profilePictureLink = 'https://avatars.githubusercontent.com/u/38857665?v=4';

  constructor() {}

  ngOnInit(): void {}
}
