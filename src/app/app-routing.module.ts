import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SongsComponent} from './songs/songs.component';
import {HomeComponent} from './home/home.component';
import {SongDetailComponent} from './songs/song-detail/song-detail.component';
import {PassportsComponent} from './passports/passports.component';
import {PassportDetailComponent} from './passports/passport-detail/passport-detail.component';
import {PersonsComponent} from './persons/persons.component';
import {PersonDetailComponent} from './persons/person-detail/person-detail.component';
import {AlbumsComponent} from './albums/albums.component';
import {AlbumDetailComponent} from './albums/album-detail/album-detail.component';
import {RegistrationComponent} from './registration/registration.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'passports/detail/:id', component: PassportDetailComponent},
    {path: 'passports', component: PassportsComponent},
    {path: 'persons/detail/:id', component: PersonDetailComponent},
    {path: 'persons', component: PersonsComponent},
    {path: 'songs/detail/:id', component: SongDetailComponent},
    {path: 'songs', component: SongsComponent},
    {path: 'albums/detail/:id', component: AlbumDetailComponent},
    {path: 'albums', component: AlbumsComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
