import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Passport} from '../passports/passport';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PassportService {
  public passportUrl = 'http://localhost:8090/passport';

  public getPassport(id: number): Observable<Passport> {
    return this.http.get<Passport>(this.passportUrl + '/get/' + id);
  }

  public getPassports(): Observable<Passport[]> {
    return this.http.get<Passport[]>(this.passportUrl + '/get');
  }

  savePassport(passport: Passport): Observable<Passport> {
    return this.http.post<Passport>(this.passportUrl + '/save',
      JSON.stringify(passport),
      httpOptions);
  }

  deletePassport(passport: Passport): Observable<any> {
    return this.http.post<Passport>(this.passportUrl + '/delete',
      JSON.stringify(passport),
      httpOptions);
  }

  updatePassport(passport: Passport): Observable<string> {
    return this.http.get<string>(this.passportUrl + '/update/'
      + passport.passportNumber + '/' + passport.passportId);
  }

  constructor(private http: HttpClient) {
  }

}
