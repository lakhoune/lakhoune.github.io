import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  profilePictureLink = 'https://avatars.githubusercontent.com/u/38857665?v=4';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
