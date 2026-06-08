import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EmptyProject, Project } from '../../models/project.model';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ProjectComponent implements OnInit {
  @Input() project: Project = new EmptyProject();
  constructor() {}

  ngOnInit(): void {}
}
