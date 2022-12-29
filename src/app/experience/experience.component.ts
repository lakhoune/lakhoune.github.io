import { Component, OnInit } from '@angular/core';
import { experiences } from './experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experiences = experiences.sort((a, b) => b.year - a.year);
  constructor() {}

  ngOnInit(): void {}
}
