import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-artist',
  templateUrl: 'style/artist.page.html',
  styleUrls: ['style/artist.page.scss']
})
export class ArtistPage {
  artistId: String
  artistName: String
  albums: Array<Album>

  constructor(public navCtrl: NavController, private api: ApiService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(){
    this.artistId = this.route.snapshot.params['id'];
    this.api.getAlbums(this.artistId).subscribe(data => {
      const { items } = data as AlbumResponse;
      this.albums = items;
      
      //Retrieve artist name
      this.artistName = items[0].artists[0].name
    })
  }

  goToTracks(albumId) {
    this.navCtrl.navigateForward(`album/${albumId}`)
  }
}

interface Album {
  name: String,
  id: String,
  artists: Array<{id: String, name: String}>
  total_tracks: Number,
  images: Array<{
    height: Number,
    url: String
  }>
};

interface AlbumResponse {
  items: Array<Album>
};

