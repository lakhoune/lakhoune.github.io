import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
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

  constructor(private fb: UntypedFormBuilder) {}

  showInstallButton = false;

  async generateQR() {
    const pattern = `WIFI:T:${this.form.value.encryption};S:${this.form.value.ssid};P:${this.form.value.password};`;
    const code = await toDataURL(pattern);
    // download code as png/base64
    const link = document.createElement('a');
    link.href = code;
    link.download = 'wifi-qr.png';
    link.click();
  }

  ngOnInit() {
    window.addEventListener('beforeinstallprompt', (event: any) => {
      console.log('ee');
      // Prevent the default browser install prompt
      event.preventDefault();

      // Show the custom install button
      this.showInstallButton = true;

      // Store the event for later use
      const installPromptEvent = event;

      // Handle the user's interaction with your custom button
      this.installApp = () => {
        // Show the browser's install prompt
        installPromptEvent.prompt();

        // Wait for the user to respond to the prompt
        installPromptEvent.userChoice.then((choiceResult: any) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('App installed');
          } else {
            console.log('App not installed');
          }
        });

        // Hide the custom install button
        this.showInstallButton = false;
      };
    });
  }
  installApp: () => void = () => {};
}
