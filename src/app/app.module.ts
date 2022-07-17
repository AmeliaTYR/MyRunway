import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebcamInitError, WebcamModule } from 'ngx-webcam';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WardrobecamComponent } from './wardrobecam/wardrobecam.component';
import { MatchComponent } from './match/match.component';

import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { DataStorageService } from './data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    WardrobecamComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    FormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
  ],
  providers: [DataStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
