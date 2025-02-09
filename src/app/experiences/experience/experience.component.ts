import { Component, Input } from '@angular/core';
import { Experience } from '../experiences';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    standalone: false
})
export class ExperienceComponent {
  @Input() e: Experience = { title: '', date: new Date(), description: '' };
}
