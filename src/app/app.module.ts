import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './projects/projects.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { ProjectComponent } from './projects/project/project.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SocialsComponent } from './socials/socials.component';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ExperienceComponent } from './experience/experience.component';
import { WifiQrComponent } from './wifi-qr/wifi-qr.component';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectComponent,
    AboutMeComponent,
    SocialsComponent,
    ExperienceComponent,
    WifiQrComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTooltipModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
