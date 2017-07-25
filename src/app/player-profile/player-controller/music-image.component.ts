import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'music-image',
  template: `
		<img class='artist-image'
					[width]="81"
					[height]="81"
					[src]='getImageUrl()'/>
	`,
  styles: [`
	.artist-image{
    border-radius: 50%;
    border: 1px solid #dedede;
    height: 80px;
    width: 85px;
    box-sizing:border-box;
	}
	`],
})
export class MusicImageComponent implements OnInit {

  @Input() song: any;

  private DefaultImageUrl = "https://geetmp3.com/assets/images/audio-placeholder.png";

  getImageUrl() {
    if (this.song && this.song.artworkUrl100) {
      return this.song.artworkUrl100;
    }
    return this.DefaultImageUrl;
  }

  ngOnInit() {
  }

}
