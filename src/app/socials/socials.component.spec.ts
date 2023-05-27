import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialsComponent } from './socials.component';
import { socials } from './socials';

describe('SocialsComponent', () => {
  let component: SocialsComponent;
  let fixture: ComponentFixture<SocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have socials defined', () => {
    expect(component.socials).toBeDefined();
  });

  it('should have socials with length greater than 0', () => {
    expect(component.socials.length).toBeGreaterThan(0);
  });

  describe('getType', () => {
    it('should return "string" if logo is a string', () => {
      const logo = 'facebook';
      expect(component.getType(logo)).toEqual('string');
    });

    it('should return "object" if logo is an object', () => {
      const logo = { src: 'assets/images/facebook.svg' };
      expect(component.getType(logo)).toEqual('object');
    });
  });

  describe('getSource', () => {
    it('should return an empty string if logo is a string', () => {
      const logo = 'facebook';
      expect(component.getSource(logo)).toEqual('');
    });

    it('should return the src property if logo is an object', () => {
      const logo = { src: 'assets/images/facebook.svg' };
      expect(component.getSource(logo)).toEqual('assets/images/facebook.svg');
    });
  });
});