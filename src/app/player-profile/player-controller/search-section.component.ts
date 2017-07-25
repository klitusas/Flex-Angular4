import { Component, OnInit } from '@angular/core';
import { SearchItem } from "app/player-profile/interfaces/SearchItem";

@Component({
	selector: 'search-section',
	template: `	
  <div class="search-tab">
		<search-box (someResults)="onReceiveSearchResult($event)"></search-box>
		<search-result [results]="_searchResult"></search-result>
  </div>`,
	styles: [`
		.search-tab {
			height: 400px;
			overflow-y: scroll;
			overflow-x: hidden;
			min-height: 400px;
      background: yellow;
		}
	`],
})
export class SearchSectionComponent implements OnInit {
	public _searchResult: any;
	constructor() { }

	ngOnInit() {
	}

	onReceiveSearchResult(data){
		console.log(data);
		this._searchResult = data;
	}


}
