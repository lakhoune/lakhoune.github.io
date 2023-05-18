import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'website';
  links: { url: string; icon: string; name: string }[] = [
    {
      url: '/wifi-qr',
      icon: 'qr_code_2',
      name: 'Wifi QR Generator',
    },
  ];
  environment = environment;

  constructor(private _snackBar: MatSnackBar) {}
  onShare() {
    const baseUrl = window.location.href;
    void navigator.clipboard.writeText(baseUrl);
    this._snackBar.open('Link copied to clipboard', 'Got it', {
      duration: 2000,
    });
  }
}
