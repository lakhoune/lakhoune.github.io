import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiQrComponent } from './wifi-qr.component';

describe('WifiQrComponent', () => {
  let component: WifiQrComponent;
  let fixture: ComponentFixture<WifiQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WifiQrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WifiQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
