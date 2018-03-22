import {Component, OnInit} from '@angular/core';
import {Song} from '../songs/song';
import {SongService} from '../service/song.service';
import {Passport} from '../passports/passport';
import {PassportService} from '../service/passport.service';
import {Person} from '../persons/person';
import {PersonService} from '../service/person.service';
import {AlbumService} from '../service/album.service';
import {Album} from '../albums/album';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  songs: Song[] = [];
  passports: Passport[] = [];
  persons: Person[] = [];
  albums: Album[] = [];

  getSongs(): void {
    this.songService.getSongs().subscribe(songs => this.songs = songs.slice(1, 5));
  }

  getPassports(): void {
    this.passportService.getPassports().subscribe(passports => this.passports = passports.slice(5, 9));
  }

  getPersons(): void {
    this.personService.getPersons().subscribe(persons => this.persons = persons.slice(6, 10));
  }

  getAlbums(): void {
    this.albumService.getAlbums().subscribe(albums => this.albums = albums.slice(3, 7));
  }

  constructor(private songService: SongService,
              private passportService: PassportService,
              private personService: PersonService,
              private albumService: AlbumService) {
  }

  ngOnInit() {
    this.getSongs();
    // this.getPassports();
    this.getPersons();
    this.getAlbums();
  }

}
