import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Album} from '../albums/album';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Song} from '../songs/song';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AlbumService {
  public albumUrl = 'http://localhost:8090/album';

  public getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(this.albumUrl + '/get/' + id);
  }

  public getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumUrl + '/get');
  }

  public getAlbumSongs(id: number): Observable<Song[]> {
    return this.http.get<Song[]>(this.albumUrl + '/find/' + id);
  }

  saveAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.albumUrl + '/save',
      JSON.stringify(album),
      httpOptions);
  }

  deleteAlbum(album: Album): Observable<any> {
    return this.http.post<Album>(this.albumUrl + '/delete',
      JSON.stringify(album),
      httpOptions);
  }

  updateAlbum(album: Album): Observable<string> {
    return this.http.get<string>(this.albumUrl + '/update/'
      + album.albumPrice + '/' + album.albumName);
  }

  constructor(private http: HttpClient) {
  }

}
