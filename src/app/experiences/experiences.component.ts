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
  experiences = experiences
    .sort((a, b) => b.year - a.year)

  constructor(private http: HttpClient) {
    experiences.forEach((year) => {
      if (year.experiences)
        year.experiences = year.experiences.sort(
          (a, b) => b.date?.getTime()! - a.date?.getTime()!
        );
    });
  }

  @ViewChild('cvButton') cvButton?: MatButton;
  @ViewChild('cvButtonDe') cvButtonDe?: MatButton;

  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const open = urlParams.get('openCV');
    const lang = urlParams.get('lang');
    if (open) {
      setTimeout(() => {
        if (lang === 'de') {
          this.cvButtonDe?._elementRef.nativeElement.click();
        } else {
          this.cvButton?._elementRef.nativeElement.click();
        }
        // remove ?cv=true from url
        window.history.replaceState({}, '', window.location.pathname);
      }, 20);
    }
  }

  openCV(fileName: string): void {
    this.http
      .get('/assets/' + fileName, { responseType: 'blob' })
      .subscribe((blob: Blob) => {
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
      });
  }
}
