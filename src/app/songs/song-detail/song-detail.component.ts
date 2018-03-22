import {Component, OnInit, Input} from '@angular/core';
import {Song} from '../song';
import {SongService} from '../../service/song.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {PersonService} from '../../service/person.service';
import {Person} from '../../persons/person';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  @Input() song: Song;
  persons: Person[];

  getSong(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'new') {
      this.songService.getSong(+id)
        .subscribe(song => this.song = song);
    } else {
      this.song = new Song('New Song');
      this.getPersons();
    }
  }

  saveSong(): void {
    this.songService.saveSong(this.song)
      .subscribe(song => {
        this.song = song;
        this.location.replaceState('/songs/details/' + song.songId);
      });
  }

  deleteSong(): void {
    this.songService.deleteSong(this.song).subscribe(
      response => {
        this.router.navigateByUrl('/songs');
      });
  }

  updateSong(): void {
    this.songService.updateSong(this.song).subscribe();
  }

  goBack(): void {
    this.location.back();
  }

  getPersons(): void {
    this.personService.getPersons()
      .subscribe(persons => {
        this.persons = persons.sort((p1, p2) => p2.personId - p1.personId);
      });
  }

  constructor(private route: ActivatedRoute,
              private personService: PersonService,
              private songService: SongService,
              private location: Location,
              private router: Router) {
  }

  ngOnInit() {
    this.getSong();
  }

}
