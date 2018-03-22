import {Injectable} from '@angular/core';
import {Song} from '../songs/song';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class SongService {
  private songUrl = 'http://localhost:8090/song';

  public getSong(id: number): Observable<Song> {
    return this.http.get<Song>(this.songUrl + '/get/' + id);
  }

  public getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.songUrl + '/get');
  }

  public getPersonSongs(id: number): Observable<Song[]> {
    return this.http.get<Song[]>(this.songUrl + '/find/' + id);
  }

  saveSong(song: Song): Observable<Song> {
    return this.http.post<Song>(this.songUrl + '/save',
      JSON.stringify(song),
      httpOptions);
  }

  deleteSong(song: Song): Observable<any> {
    return this.http.post<Song>(this.songUrl + '/delete',
      JSON.stringify(song),
      httpOptions);
  }

  updateSong(song: Song): Observable<string> {
    return this.http.get<string>(this.songUrl + '/update/'
      + song.songName + '/' + song.songId);
  }

  constructor(private http: HttpClient) {
  }


}
