import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { SearchService } from "app/player-profile/services/search.service";
import { Observable } from "rxjs/Observable";
import { SearchItem } from "app/player-profile/interfaces/SearchItem";
import {EventEmitter} from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'search-box',
  template: `
<form class="form-inline">
  <div class="form-group">
    <input type="search"
           class="form-control"
           placeholder="Enter search string"
           [formControl]="searchField">
  </div>
</form>

<div class="text-center">
  <p class="lead" *ngIf="loading">Loading...</p>
</div>

 `
})
export class SearchBoxComponent {
  private loading: boolean = false;
  private results: Observable<SearchItem[]>;
  private searchField: FormControl;


  @Output() someResults = new EventEmitter()

  constructor(private itunes: SearchService) {
  }

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do(_ => this.loading = true)
      .switchMap(term => this.itunes.search(term))
      .do(_ => this.loading = false)
      this.results.subscribe((data) => 
      this.someResults.emit(data));
  }


}