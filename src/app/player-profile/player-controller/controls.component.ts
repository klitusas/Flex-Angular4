import { Component, OnInit, Input } from '@angular/core';
import { SoundManagerService } from "app/player-profile/services/sound-manager.service";
import { Events } from "app/player-profile/interfaces/events";
import { SearchItem } from "app/player-profile/interfaces/SearchItem";

@Component({
	selector: 'controls',
	template: `
		<a href='#' id="btnPrevious" title="" (click)='previous()'>
				<img src='http://files.lfranchi.com/prev.png'/>
		</a>
		<a href='#' id="btnPlayPause" (click)='togglePlayPause()'>
				<img src='http://www.freeiconspng.com/uploads/play-button-icon-png-15.png' *ngIf='!isPlaying'/>
				<img src='http://brotherspc.com/icones/pause.png' *ngIf='isPlaying'/>
		</a>
		<a href='#' id="btnNextSong" (click)='next()'>
				<img src='http://files.lfranchi.com/next.png'/>
		</a>
	`,
	styles: [
		`#btnPrevious{
				margin-right: 2px;
		}
		#btnPrevious img {
				width:30px;
				height:30px;
				margin-top:4px;
		}
		#btnPlayPause{
				box-sizing: border-box;
				margin-right: 2px;
		}
		#btnPlayPause img{
				width:40px;
				height:40px;
		}
		#btnNextSong{
				position: relative;
				box-sizing: border-box;
		}
		#btnNextSong img{
				margin-top: 4px;
				width: 30px;
				height: 30px;
		}
`
	]
})

export class ControlsComponent {
	// @Input("is-playing") isPlaying: boolean;
	@Input() song: SearchItem;
	isPlaying: boolean = false;

	constructor(private soundManager: SoundManagerService) {
		this.soundManager.on(Events.Play, (isPlaying) => {
			this.isPlaying = isPlaying
		})
	}

	togglePlayPause() {
		this.soundManager.togglePlayPause(this.song.previewUrl);
	}
	next(){
		this.soundManager.next();
	}
}
