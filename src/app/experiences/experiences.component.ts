import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { experiences } from './experiences';
import { HttpClient } from '@angular/common/http';
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {
  experiences = experiences.sort((a, b) => b.year - a.year);
  constructor(private http: HttpClient) {}

  @ViewChild('cvButton') cvButton?: MatButton;

  ngOnInit(): void {
    // check if current route has ?openCV=true
    const urlParams = new URLSearchParams(window.location.search);
    const open = urlParams.get('openCV');
    if (open) {
      setTimeout(() => {
        this.cvButton?._elementRef.nativeElement.click();
        // remove ?cv=true from url
        window.history.replaceState({}, '', window.location.pathname);
      }, 20);
    }
  }

  openCV(): void {
    this.http
      .get('/assets/cv.pdf', { responseType: 'blob' })
      .subscribe((blob: Blob) => {
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
      });
  }
}
