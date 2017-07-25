import { Component, OnInit } from '@angular/core';
import { Events } from "app/player-profile/interfaces/events";
import { SoundManagerService } from "app/player-profile/services/sound-manager.service";

@Component({
	selector: 'volume',
	template: `
		<a id="btnToggleVolume" href='#' (click)='toggleMute()'>
			<img src='https://maxcdn.icons8.com/Share/icon/Media_Controls//high_volume1600.png' *ngIf='!isMute'/>
			<img src='http://icons.iconarchive.com/icons/icons8/ios7/256/Media-Controls-Mute-icon.png' *ngIf='isMute'/>
		</a>
	`,
	styles: [`
		#btnToggleVolume {
				width:20px;
		}
		#btnToggleVolume img{
				width:20px;
				padding-top:15px;
		}
		#btnToggleVolume i{
				margin-top:13px;
				color:#c7b4ab;
		}
	`]
})
export class VolumeComponent {

	private isMute = false;

	constructor(private soundManager: SoundManagerService) {
		this.soundManager.on(Events.Volume, (isMute) => {
			this.isMute = isMute;
		});
	}

	toggleMute() {
		this.soundManager.toggleMute();
	}

}
