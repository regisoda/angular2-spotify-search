import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SpotifyService {

  constructor(private _http: Http) { }

  search(q) {
    var url = `https://api.spotify.com/v1/search?type=artist&q=${q}`;
    return this._http.get(url)
                  .map(r => {
                    var artists = r.json().artists.items;
                    return artists;
                  })
                  .catch(e => Observable.throw(e));
  }

}
