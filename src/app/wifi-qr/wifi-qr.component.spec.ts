import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WifiQrComponent } from './wifi-qr.component';
import { UntypedFormBuilder } from '@angular/forms';
import { toDataURL } from 'qrcode';
import { MatOptionModule } from '@angular/material/core';

describe('WifiQrComponent', () => {
  let component: WifiQrComponent;
  let fixture: ComponentFixture<WifiQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WifiQrComponent],
      providers: [UntypedFormBuilder,MatOptionModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WifiQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with ssid, password and encryption fields', () => {
    expect(component.form.contains('ssid')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
    expect(component.form.contains('encryption')).toBeTruthy();
  });

  it('should have the ssid field required', () => {
    const ssid = component.form.get('ssid');
    ssid?.setValue('');
    expect(ssid?.valid).toBeFalsy();
  });

  it('should have the password field required', () => {
    const password = component.form.get('password');
    if (password !== null) {
      password.setValue('');
      expect(password.valid).toBeFalsy();
    }
  });

  it('should have the encryption field with a default value of "WPA"', () => {
    const encryption = component.form.get('encryption');
    expect(encryption?.value).toEqual('WPA');
  });

  it('should have supported encryptions', () => {
    expect(component.supportedEncryptions).toContain('WPA');
    expect(component.supportedEncryptions).toContain('WEP');
    expect(component.supportedEncryptions).toContain('WPA2-EAP');
  });

  describe('generateQR', () => {
    it('should generate a QR code', async () => {
      const pattern = `WIFI:T:${component.form.value.encryption};S:${component.form.value.ssid};P:${component.form.value.password};;`;
      const code = await toDataURL(pattern);
      expect(code).toBeTruthy();
    });
  });
});