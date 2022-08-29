import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { toDataURL } from 'qrcode';
@Component({
  selector: 'app-wifi-qr',
  templateUrl: './wifi-qr.component.html',
  styleUrls: ['./wifi-qr.component.scss'],
})
export class WifiQrComponent implements OnInit {
  form = this.fb.group({
    ssid: ['', Validators.required],
    password: ['', Validators.required],
    encryption: ['WPA'],
  });

  supportedEncryptions = ['WPA', 'WEP', 'WPA2-EAP'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  async generateQR() {
    const pattern = `WIFI:T:${this.form.value.encryption};S:${this.form.value.ssid};P:${this.form.value.password};`;
    const code = await toDataURL(pattern);
    // download code as png/base64
    const link = document.createElement('a');
    link.href = code;
    link.download = 'wifi-qr.png';
    link.click();
  }
}
