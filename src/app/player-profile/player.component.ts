import { Component, OnInit, Input, Injectable } from '@angular/core';
import { slideIn } from '../animation';
import { Observable } from "rxjs/Observable";
import { FormControl } from "@angular/forms";
import 'rxjs/add/operator/distinctUntilChanged';
import { Jsonp } from "@angular/http";
import { SearchService } from "app/player-profile/services/search.service";
import { SearchItem } from "app/player-profile/interfaces/SearchItem";



@Component({
  template: `
  <div class="container">
  <player></player>
  <div>
 `
})
export class PlayerComponent {
  private loading: boolean = false;
  private results: Observable<SearchItem[]>;
  private searchField: FormControl;

  constructor(private itunes: SearchService) { }
  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do(_ => this.loading = true)
      .switchMap(term => this.itunes.search(term))
      .do(_ => this.loading = false)
  }
}

