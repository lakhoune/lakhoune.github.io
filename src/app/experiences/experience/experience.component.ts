import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Experience } from '../experiences';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ExperienceComponent {
  @Input() e: Experience = { title: '', date: new Date(), description: '' };
}
