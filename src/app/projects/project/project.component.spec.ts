import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { EmptyProject, Project } from 'src/app/models/project.model';
import { ProjectComponent } from './project.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

const mockProject: Project = {
  title: 'Test Project',
  subtitle: 'Test Subtitle',
  previewImgSrc: 'mock-preview-img-1.jpg',
  page: {
    href: 'test-page-link',
    description: 'Test Page Description',
  },
  source: {
    logo: 'test-source-logo.png',
    href: 'test-source-link',
  },
};

@Component({
    selector: 'app-test', template: '',
    standalone: false
})
class TestComponent {
  @Input() project: Project = new EmptyProject();
}



describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectComponent, TestComponent],
      imports: [MatCardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    component.project = mockProject;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the project title', () => {
    expect(component).toBeTruthy();
    const titleDe = fixture.debugElement.query(By.css('.project-title'));
    expect(titleDe).toBeTruthy();
    expect(titleDe.nativeElement.textContent.trim()).toEqual(mockProject.title);
  });

  it('should display the project preview image', () => {
    expect(component).toBeTruthy();
    const imgDe = fixture.debugElement.query(By.css('.card-img-top'));
    expect(imgDe).toBeTruthy();
    expect(imgDe.nativeElement.src).toContain(mockProject.previewImgSrc);
  });
});