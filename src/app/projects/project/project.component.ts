import { Component, Input, OnInit } from '@angular/core';
import { EmptyProject, Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() project: Project = new EmptyProject();
  constructor() {}

  ngOnInit(): void {}
}
