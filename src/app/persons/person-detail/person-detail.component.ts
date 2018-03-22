import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

import {Person} from '../person';
import {PersonService} from '../../service/person.service';
import {Passport} from '../../passports/passport';
import {PassportService} from '../../service/passport.service';
import {Song} from '../../songs/song';
import {SongService} from '../../service/song.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})

export class PersonDetailComponent implements OnInit {
  @Input() person: Person;
  @Input() songs: Song[];

  getPerson(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'new') {
      this.personService.getPerson(+id)
        .subscribe(
          person => {
            this.person = person;
            this.getPersonSongs(this.person.personId);
          });
    } else {
      this.person = new Person('Ivanov', 'Ivan', new Passport('Number'));
    }
  }

  getPersonSongs(id: number): void {
    // const id = this.route.snapshot.paramMap.get('id');
    this.songService.getPersonSongs(id)
      .subscribe(songs => {
        this.songs = songs.sort((s1, s2) => s1.songId - s2.songId);
      });
  }

  savePerson(): void {
    this.passportService.savePassport(this.person.passport)
      .subscribe(passport => {
        this.person.passport = passport;
        this.personService.savePerson(this.person)
          .subscribe(person => {
            this.person = person;
            this.location.replaceState('/persons/details/' + person.personId);
          });
      });
  }

  deletePerson(): void {
    this.personService.deletePerson(this.person).subscribe(
      response => {
        this.router.navigateByUrl('/persons');
      });
  }

  updatePerson(): void {
    this.personService.updatePerson(this.person).subscribe();
  }

  goBack(): void {
    this.location.back();
  }

  constructor(private route: ActivatedRoute,
              private passportService: PassportService,
              private personService: PersonService,
              private songService: SongService,
              private location: Location,
              private router: Router) {
  }

  ngOnInit() {
    this.getPerson();
  }
}
