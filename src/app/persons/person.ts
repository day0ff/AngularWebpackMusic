import {Passport} from '../passports/passport';

export class Person {
  personId: number;
  lastName: string;
  firstName: string;
  passport: Passport;

  constructor(lastName: string, firstName: string, passport: Passport) {
    this.personId = null;
    this.lastName = lastName;
    this.firstName = firstName;
    this.passport = passport;
  }
}
