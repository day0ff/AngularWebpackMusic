import {Song} from '../songs/song';

export class Album {
  albumId: number;
  albumName: string;
  albumPrice: number;
  songs: Song[];

  constructor(albumName: string, albumPrice: number) {
    this.albumId = null;
    this.albumName = albumName;
    this.albumPrice = albumPrice;
    this.songs = [];
  }
}
