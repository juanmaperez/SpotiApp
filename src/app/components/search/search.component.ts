import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search: string = '';

  constructor(public _spotify : SpotifyService) { }

  ngOnInit() {
  
  }

  searchArtists(){
    if(this.search.length > 1){
    this._spotify.getArtists(this.search)
      .subscribe((data)=>{
        
      })
    }
  }


}
