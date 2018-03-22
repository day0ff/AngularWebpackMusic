import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

import {FormsModule} from '@angular/forms';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {SongsComponent} from './songs/songs.component';
import {SongDetailComponent} from './songs/song-detail/song-detail.component';
import {SongService} from './service/song.service';

import {HomeComponent} from './home/home.component';

import {PassportsComponent} from './passports/passports.component';
import {PassportService} from './service/passport.service';
import {PassportDetailComponent} from './passports/passport-detail/passport-detail.component';
import {DeleteModalComponent} from './modal/delete-modal/delete-modal.component';
import {UpdateModalComponent} from './modal/update-modal/update-modal.component';
import {SaveModalComponent} from './modal/save-modal/save-modal.component';
import {PersonsComponent} from './persons/persons.component';
import {PersonService} from './service/person.service';
import { PersonDetailComponent } from './persons/person-detail/person-detail.component';
import { AlbumsComponent } from './albums/albums.component';
import { LoginModalComponent } from './modal/login-modal/login-modal.component';
import { RegistrationModalComponent } from './modal/registration-modal/registration-modal.component';
import {AlbumService} from './service/album.service';
import { AlbumDetailComponent } from './albums/album-detail/album-detail.component';
import { RegistrationComponent } from './registration/registration.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    SongDetailComponent,
    HomeComponent,
    PassportsComponent,
    PassportDetailComponent,
    DeleteModalComponent,
    UpdateModalComponent,
    SaveModalComponent,
    PersonsComponent,
    PersonDetailComponent,
    AlbumsComponent,
    LoginModalComponent,
    RegistrationModalComponent,
    AlbumDetailComponent,
    RegistrationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [SongService, PassportService, PersonService, AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
