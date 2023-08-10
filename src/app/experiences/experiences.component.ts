import { Component, OnInit } from '@angular/core';
import { experiences } from './experiences';
@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {
  experiences = experiences.sort((a, b) => b.year - a.year);
  constructor() {}

  ngOnInit(): void {}
}
