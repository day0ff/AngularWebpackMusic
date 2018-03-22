import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

import {Album} from '../album';
import {AlbumService} from '../../service/album.service';
import {Passport} from '../../passports/passport';
import {PassportService} from '../../service/passport.service';
import {Song} from '../../songs/song';
import {SongService} from '../../service/song.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})

export class AlbumDetailComponent implements OnInit {
  @Input() album: Album;
  @Input() songs: Song[];

  getAlbum(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'new') {
      this.albumService.getAlbum(+id)
        .subscribe(
          album => {
            this.album = album;
            this.getAlbumSongs(this.album.albumId);
          });
    } else {
      this.album = new Album('New Album', 0);
    }
  }

    getAlbumSongs(id: number): void {
      // const id = this.route.snapshot.paramMap.get('id');
      this.albumService.getAlbumSongs(id)
        .subscribe(songs => {
          this.songs = songs.sort((s1, s2) => s1.songId - s2.songId);
        });
    }

  saveAlbum(): void {
    this.albumService.saveAlbum(this.album)
      .subscribe(album => {
        this.album = album;
        this.location.replaceState('/albums/details/' + album.albumId);
      });
  }

  deleteAlbum(): void {
    this.albumService.deleteAlbum(this.album).subscribe(
      response => {
        this.router.navigateByUrl('/albums');
      });
  }

  updateAlbum(): void {
    this.albumService.updateAlbum(this.album).subscribe();
  }

  goBack(): void {
    this.location.back();
  }

  constructor(private route: ActivatedRoute,
              private passportService: PassportService,
              private albumService: AlbumService,
              private songService: SongService,
              private location: Location,
              private router: Router) {
  }

  ngOnInit() {
    this.getAlbum();
  }
}
