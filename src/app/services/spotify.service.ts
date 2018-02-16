import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';


@Injectable()
export class SpotifyService {

  public artists;
  private token : string = "BQD_X9RA2zziqFeDxDxoC-OayQRR8AKuk8BvTXrzXwXBnXGwJ8XxRHC_QFci3ZerK0Tvw4sxeo4JrRjart0";
  
  url: string = 'https://api.spotify.com/v1/';

  constructor(public http: HttpClient) { }


  public getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.token
    })
    return headers
  }



  getArtists(search: string){
    let headers = this.getHeaders();

    return this.http.get(`${this.url}search?query=${search}&type=artist&limit=20`, { headers })
      .map((res:any) => {
        this.artists = res.artists.items;
        return this.artists
      })
  }


  getArtist(id: string){
    let headers = this.getHeaders();
    return this.http.get(`${this.url}artists/${id}`, {headers})
         
  }

  getTopTracks(id : string){
    let headers = this.getHeaders();
    return this.http
    .get(`${this.url}artists/${id}/top-tracks?country=ES`, {headers})
    .map((res:any)=> res.tracks)
  }


}
