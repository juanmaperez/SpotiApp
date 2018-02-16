// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtistComponent } from './components/artist/artist.component';

// Pipes
import { NofotoPipe } from './pipes/nofoto.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

// Routes
import { app_Routing } from './app.route';

// Services
import { SpotifyService } from './services/spotify.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    ArtistComponent,
    NofotoPipe,
    SafeUrlPipe,
  ],
  imports: [
    BrowserModule,
    app_Routing,
    HttpClientModule,
    FormsModule,
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
