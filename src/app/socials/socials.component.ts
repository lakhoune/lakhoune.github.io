import { Component, OnInit } from '@angular/core';
import { socials } from './socials';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent implements OnInit {
  socials = socials;
  constructor() {}
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
}
