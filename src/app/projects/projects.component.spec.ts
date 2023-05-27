import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';

const mockProjects = [
  {
    title: 'Mock Project 1',
    subtitle: 'Mock Subtitle 1',
    previewImgSrc: 'mock-preview-img-1.jpg',
    page: {
      href: 'mock-page-link-1',
      description: 'Mock Page Description 1',
    },
    source: {
      logo: 'mock-source-logo-1.png',
      href: 'mock-source-link-1',
    },
  },
  {
    title: 'Mock Project 2',
    previewImgSrc: 'mock-preview-img-2.jpg',
    page: {
      href: 'mock-page-link-2',
    },
  },
];


describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let projectsDe: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsComponent,ProjectComponent],
      imports: [CommonModule], // Import the CommonModule here
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    component.projects = mockProjects;
    projectsDe = fixture.debugElement.query(By.css('.projects'));
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of projects', () => {
    expect(projectsDe).toBeTruthy();
    const projectDes = projectsDe.queryAll(By.css('.project'));
    expect(projectDes.length).toEqual(mockProjects.length);
  });
});