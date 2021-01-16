import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  AUTH_TOKEN = "BQBQMPk2Rz4lsOu63xrFl1t3MCtfQqiG1OinXT8LOAQMcFpedpgKGzkF5-ULfl_I-zaJ6Bt1D-YqTxAfA-F_2ME7NXTICrErX14O-he_szsuWC_qKXfbJ_kWUi1vrP-yOdQSNs8ChVyCUyFsedwoV73ZCNEekjNrdol7-Tmy6_82L_6d9COuyCYbaC53ibondk9i_xnN_wc7xzeCP0sRDtm5J7Xo8h8HvPUhutME4L7T9DFMGJm9I8mUfoYjRYjSxdP-6i7hHiQEq5w"
  BASE_URL = "https://api.spotify.com/v1/"
  
  httpOptions: HttpHeaders;
  
  constructor(private httpClient: HttpClient) {
    this.httpOptions = new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Bearer ' + this.AUTH_TOKEN
    });
  }

  searchQuery(query: String) {
    return this.httpClient.get(this.BASE_URL + `search?q=${query}&type=artist&offset=0&limit=20`, { headers: this.httpOptions});
  }

  getAlbums(artistId: String) {
    return this.httpClient.get(this.BASE_URL + `artists/${artistId}/albums`, { headers: this.httpOptions });
  }

  getTracksOfAlbums(albumId: String) {
    return this.httpClient.get(this.BASE_URL + `albums/${albumId}/tracks`, { headers: this.httpOptions });
  }
}