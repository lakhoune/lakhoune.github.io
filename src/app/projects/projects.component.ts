import { Component, OnInit } from '@angular/core';
import { projects } from './projects';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    standalone: false
})
export class ProjectsComponent implements OnInit {
  projects = projects;
  constructor() {}

  ngOnInit(): void {}
}
