import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  songs : any;
  picture : string;

  constructor(private activatedRoute: ActivatedRoute, public _spotify : SpotifyService) { }

  ngOnInit() {

    this.activatedRoute.params
        .map(params => params.id)
        .subscribe((id)=>{
          this.getArtist(id)
          this.getTracks(id)
        })
    


  }

  getArtist(id){
    this._spotify.getArtist(id)
      .subscribe((artist:any)=>{
        console.log(artist)
        this.artist = artist;

        this.picture = artist.images[0].url

      })
  }

  getTracks(id){
    this._spotify.getTopTracks(id)
    .subscribe((songs)=>{
      console.log(songs)
      this.songs = songs
    })
  }

}
