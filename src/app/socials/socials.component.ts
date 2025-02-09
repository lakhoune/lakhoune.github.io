import { Component, OnInit } from '@angular/core';
import { socials } from './socials';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-socials',
    templateUrl: './socials.component.html',
    styleUrls: ['./socials.component.scss'],
    standalone: false
})
export class SocialsComponent implements OnInit {
  socials = socials;
  constructor(private http: HttpClient) {}
  getType(logo: string | { src: string }) {
    if (typeof logo === 'string') {
      return 'string';
    }
    return 'object';
  }
  getSource(logo: string | { src: string }) {
    return typeof logo === 'string' ? '' : logo.src;
  }
  ngOnInit(): void {}

  openCV(fileName: string): void {
    this.http
      .get('/assets/' + fileName, { responseType: 'blob' })
      .subscribe((blob: Blob) => {
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
      });
  }
}
