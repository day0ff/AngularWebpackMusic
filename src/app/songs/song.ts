import {Person} from '../persons/person';
import {Passport} from '../passports/passport';

export class Song {
  songId: number;
  songName: string;
  person: Person;

  constructor(name: string) {
    this.songId = null;
    this.songName = name;
    // this.person = new Person('Petrov', 'Petr', new Passport('number'));
    this.person = null;
  }
}
