import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-album',
  templateUrl: '/style/album.page.html',
  styleUrls: ['/style/album.page.scss']
})
export class AlbumPage {
  artistId: String
  albumId: String
  tracks: Array<Object>
  player: Howl

  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(){
    this.albumId = this.route.snapshot.params['id'];
    this.api.getTracksOfAlbums(this.albumId).subscribe(data => {
      const { items } = data as TrackResponse
      this.tracks = items
      console.log(items)
    })
  }

  getTimeOfTrack(duration: number) {
    var minutes = Math.floor(duration / 60000);
    var seconds = Math.floor((duration % 60000) / 1000);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  playPreview(previewUrl) {
    if(this.player) this.player.stop();
    this.player = new Howl({
      src: [previewUrl],
      format: ['mp3'],
      volume: 0.2,
    })

    this.player.play();
  }
}

interface Track {
  name: String,
  id: String,
  artists: Array<{id: String, name: String}>
  total_tracks: Number,
  images: Array<{
    height: Number,
    url: String
  }>
};

interface TrackResponse {
  items: Array<Track>
};
