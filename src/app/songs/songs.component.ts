import {Component, OnInit} from '@angular/core';
import {Song} from './song';
import {SongService} from '../service/song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  songs: Song[];


  getSongs(): void {
    this.songService.getSongs()
      .subscribe(songs => this.songs = songs.sort((s1, s2) => s1.songId - s2.songId));
  }

  constructor(private songService: SongService) {
  }


  ngOnInit() {
    this.getSongs();
  }

}
