import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: 'style/search.page.html',
  styleUrls: ['style/search.page.scss']
})
export class SearchPage {
  artistsResult: Array<Artist> = []

  constructor(public navCtrl: NavController, private api: ApiService, private router: Router, private route: ActivatedRoute) {}

  searchArtist({ value }) {
    this.api.searchQuery(value).subscribe(data => {
      const { artists: { items } } = data as ArtistResponse;
      this.artistsResult = items
      console.log(items)
    });
  }

  goToAlbum(artistId) {
    this.navCtrl.navigateForward(`artist/${artistId}`)
  }
}

interface Artist {
  name: String,
  popularity: Number,
  id: String
  genre: Array<String>,
  images: Array<{
    height: Number,
    url: String
  }>
};

interface ArtistResponse {
  artists: {
    items: Array<Artist>
  };
};
