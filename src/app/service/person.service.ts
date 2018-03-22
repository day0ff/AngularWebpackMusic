import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Person} from '../persons/person';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PersonService {
  public personUrl = 'http://localhost:8090/person';

  public getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(this.personUrl + '/get/' + id);
  }

  public getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personUrl + '/get');
  }

  savePerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.personUrl + '/save',
      JSON.stringify(person),
      httpOptions);
  }

  deletePerson(person: Person): Observable<any> {
    return this.http.post<Person>(this.personUrl + '/delete',
      JSON.stringify(person),
      httpOptions);
  }

  updatePerson(person: Person): Observable<string> {
    return this.http.get<string>(this.personUrl + '/update/'
      + person.firstName + '/' + person.lastName + '/' + person.personId);
  }

  constructor(private http: HttpClient, ) {
  }

}
