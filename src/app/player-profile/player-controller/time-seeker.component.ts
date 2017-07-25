import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { SoundManagerService } from "app/player-profile/services/sound-manager.service";

@Component({
	selector: 'time-seeker',
	template: `
		<div id="timeSlider"  (click)='changePlaybackTime($event)'>
				<span id='sliderHandler' tabindex="0" [style.left.px]="calculatePositionByTime()" [style.top.px]="200"></span>
		</div>
	`,
	styles: [`
		#sliderHandler {
			position: absolute;
		}
		#timeSlider{
			position: relative;
		}
		#timeSlider{
			position: relative;
			height:8px;
			background-color:#cfcfcf;
			background-image:none;
			border:none;
			width: 307px;
			float: right;
			border-radius: 4px;
			cursor: pointer !important;
		}
		#sliderHandler{
			position: absolute;
			border-radius: 100px;
			background-image: none !important;
			background-color: #fff !important;
			border:1px solid #ff8b00 !important;
			top:-4px !important;
			width:15px !important;
			height:15px !important;
			box-sizing: border-box;
		}
	`]
})
export class TimeSeekerComponent implements OnInit {
	percent: number;
	@Input() time: number;
	@Input('total-time') duration: number;
	position: number;
	constructor(private el: ElementRef, private soundManager : SoundManagerService) { }

	ngOnInit() {
		this.el.nativeElement as HTMLElement;
		console.log(this.el.nativeElement.style.width)
		console.log(this.el.nativeElement.getBoundingClientRect())
		console.log(this.el.nativeElement);
		console.log(this.el.nativeElement.children[0].clientWidth)

	}
	calculatePositionByTime() {
		var percent = this.time * 100 / this.duration;
		var pos = percent * this.getTimeSliderWidth() / 100;
		return pos - 5;
	}
	private getTimeSliderWidth() {
		return parseInt(this.el.nativeElement.children[0].clientWidth);
	}

	changePlaybackTime(event) {
		var time = this.calculateTimePercentOnClick(event);
		 this.soundManager.seek(time);
	}

	private calculateTimePercentOnClick(event) {
		var parentX = this.getTimeSliderWidth();
		var percent = event.layerX * 100 / parentX;
		return percent;
	}

}
