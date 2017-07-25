export interface IPlayer {
	initialize: (song: any, calback: (e: Error) => void) => void;
	play: () => void;
	pause: () => void;
	seek: (time: number) => void;
	currentTime: () => number;
	totalTime: () => number;
	setVolume: (value: number) => void;
	getVolume: () => number;
	on: (event: number, handler: (data: any) => void) => void;
}