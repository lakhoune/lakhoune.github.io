import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'website';
  links: { url: string; icon: string; name: string }[] = [];
  environment = environment;
  onShare() {
    const baseUrl = window.location.href;
    void navigator.clipboard.writeText(baseUrl);
    alert('Link copied to clipboard');
  }
}
