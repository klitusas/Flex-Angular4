import { Injectable } from "@angular/core";
import { Jsonp } from "@angular/http";
import { SearchItem } from "app/player-profile/interfaces/SearchItem";


@Injectable()
export class SearchService {
  apiRoot: string = 'https://itunes.apple.com/search';

  constructor(private jsonp: Jsonp) {
  }
  search(term: string) {
    console.log("came here")
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
    return this.jsonp.request(apiURL)
      .map(res => { res.json().results
        return res.json().results.map(item => {
          return new SearchItem(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl100,
            item.artistId,
            item.previewUrl
          );
        });
      });
  }
}