import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SoundManagerService } from "app/player-profile/services/sound-manager.service";

@Component({
  selector: 'search-result',
  template: `
  <div>
  <ul class="list-group">
  <li class="list-group-item"
      *ngFor="let track of results; let i = index">
    <img src="{{track.artworkUrl100}}">
    <a target="_blank"
       href="{{track.previewUrl}}">{{ track.track }}
    </a>
    <button (click)="play(track.previewUrl, i); change(track)">Play</button>
  </li>
</ul>
</div>`
})
export class SearchResultComponent implements OnInit {

  @Input() results: any;

  constructor(private soundManager: SoundManagerService) { }

  ngOnInit() {
  }

  play(song, index) {
    this.soundManager.getSongs(this.results)
    this.soundManager.play(song, index)
  }
  change(track) {
    this.soundManager.change(track)
  }
}
