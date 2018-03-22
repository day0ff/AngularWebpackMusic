import {Component, OnInit} from '@angular/core';
import {Album} from './album';
import {AlbumService} from '../service/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];

  getAlbums(): void {
    this.albumService.getAlbums()
      .subscribe(albums => {
        this.albums = albums.sort((a1, a2) => a1.albumId - a2.albumId);
      });
  }

  constructor(private albumService: AlbumService) {
  }

  ngOnInit() {
    this.getAlbums();
  }
}
