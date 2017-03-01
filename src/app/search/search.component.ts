import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SpotifyService } from './../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  @ViewChild('search') inputsearch;

  searchField: FormControl;
  results: any = [];

  constructor(private _spotifyService: SpotifyService) {
  }

  ngOnInit() {
    this.searchField = new FormControl();

    this.searchField.valueChanges
      .debounceTime(400)
      .filter(text => text.length > 2)
      .distinctUntilChanged()
      .flatMap(term => {
        return this._spotifyService.search(term);
      })
      .subscribe(
        searchResults => {
          this.results = searchResults;
          // console.log('searchResult', searchResults);
        }
      );
  }

  actionWindowOpen(url) {
    if (!url){
      return;
    }

    window.open(url, '_blank');
  }


}
