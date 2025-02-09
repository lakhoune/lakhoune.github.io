import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'website';
  links: { url: string; icon?: string; name: string }[] = [
    {
      url: '/wifi-qr',
      icon: 'qr_code_2',
      name: 'Wifi QR Generator',
    },
    {
      url: '/blog/tokyo',
      name: 'Tokyo Blog',
    },
  ];
  environment = environment;

  constructor(private _snackBar: MatSnackBar) {}
  onShare() {
    const baseUrl = window.location.href;
    // make sure the document is focused
    // before we try to copy the URL
    document.body.focus();

      navigator.clipboard.writeText(baseUrl).then(() => {
        this._snackBar.open('Link copied to clipboard', 'Got it', {
          duration: 2000,
        });
      }
      ).catch((error) => {
        console.error('Error copying text: ', error);
      });
  }
}
