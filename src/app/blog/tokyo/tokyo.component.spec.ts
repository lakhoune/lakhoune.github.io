import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokyoComponent } from './tokyo.component';

describe('TokyoComponent', () => {
  let component: TokyoComponent;
  let fixture: ComponentFixture<TokyoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokyoComponent]
    });
    fixture = TestBed.createComponent(TokyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
