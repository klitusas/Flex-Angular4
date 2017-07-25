import { Component, OnInit, Input } from '@angular/core';
import { SoundManagerService } from "app/player-profile/services/sound-manager.service";
import { Events } from "app/player-profile/interfaces/events";
// import {Component, OnInit} from 'angular2/core';
// import {NgIf} from 'angular2/common';
// import {SoundManager} from '../services/SoundManager.ts';

// import {Song} from '../interfaces/Song.ts';
// import {Events} from '../interfaces/Events.ts';

// import {ControlsCmp} from "./Controls.ts";
// import {VolumeCmp} from './Volume.ts';
// import {SongImageCmp} from './SongImage.ts';

// import {TimeSeekerCmp} from './timeSeeker/TimeSeeker.ts';
// import {TimeInfoCmp} from './TimeInfo.ts';

@Component({
	selector: 'player',
	template: `
	<section class="player">
		<div class="row">
			<div class="col-xs-4 player-image">
				 <music-image [song]="song"></music-image> 
			</div>
			<div class="col-xs-8 player-info">
				<h2 class='song-title' *ngIf='song'>{{ song.name }}</h2>
				<h3 class="song-artist" *ngIf='song'>{{ song.artist }}</h3>
				<div class='controllerGroup'>
					<div class='pull-left'>
						<controls [song]="song" ></controls>
					</div>
					<div class='pull-right'>
						<volume></volume>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12">
				<div class="row">
					<div class="col-xs-12">
						<!-- <time-info [song]="song" [time]="currentTime" [total-time]="totalTime"></time-info> -->
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12">
						<time-seeker [time]="currentTime" [total-time]="totalTime"></time-seeker> 
					</div>
				</div>
			</div>
		</div>
	</section>
	<search-section></search-section>
	`,
	styles: [`
	.player{
		padding-top:7px;
		padding-left:7px;
		padding-bottom: 18px;
		padding-right: 7px;
		background-color: red;
	}
	.song-title {
		font-size: 14px;
		margin-top:4px;
		padding-bottom: 0;
		color:#000;
		margin-bottom: 7px;
    background-color: yellow;
	}
	.song-artist{
		font-size: 13px;
		margin-top: 6px;
		color:#939393;
    background-color: green;
	}
	.player-info {
		padding-left:0;
    background-color: blue;
	}
	.controllerGroup{
		display: block;
		margin-top: 15px;
    background-color: pink;
	}
	.controllerGroup a {
		text-decoration: none;
		outline: none;
    background-color: aqua;
	}
	.controllerGroup a:focus {
		text-decoration: none;
		outline: none;
    background-color: grey;
	}
	`],
	// directives:[NgIf, ControlsCmp, VolumeCmp, SongImageCmp, TimeSeekerCmp, TimeInfoCmp]
})
export class PlayerControllerComponent implements OnInit {
	private currentTime: number;
	private totalTime: number;
	public song: any;
	// private isPlaying: boolean;
	// private currentTime: number;
	// private totalTime: number;
	private soundManager: SoundManagerService;

	constructor(soundManager: SoundManagerService) {
		this.song = null;
		this.soundManager = soundManager;
		this.soundManager.on(Events.ChangeSong, (song) => {
			this.song = song;
		});
	}

	ngOnInit() {
		// this.soundManager.on(Events.Pause, () => {
		// 	this.isPlaying = false;
		// });

		// this.soundManager.on(Events.Play, () => {
		// 	this.isPlaying = true;
		// });

		// this.soundManager.on(Events.PlayResume, () => {
		// 	this.isPlaying = true;
		// });

		this.soundManager.on(Events.Time, (time) => {
			this.currentTime = time;
			this.totalTime = this.soundManager.getTotalTime();
		});
	}

}