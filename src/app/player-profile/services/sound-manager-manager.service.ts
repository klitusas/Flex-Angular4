import { Injectable } from '@angular/core';
import { IPlayer } from "app/player-profile/interfaces/IPlayer";
import { Events } from "app/player-profile/interfaces/events";

declare const soundManager: any;

@Injectable()


export class SoundManagerManagerService implements IPlayer {
  lastSong: any;
  soundManager: any;
  subscribers: Object = {};
  private soundObject: any;
  private isMute = false;

  constructor() { }//this.initialize()}


  initialize(song: any) {

    if (this.soundObject) {
      this.soundObject.destruct();
    }

    this.soundObject = soundManager.createSound({
      id: 'soundid',
      url: song,
      onconnect: function (bConnect) {
        // this.connected can also be used
        soundManager._writeDebug(this.id + ' connected: ' + (bConnect ? 'true' : 'false'));
      },
      duration: 300000, // example for a 5 minutes song
      onload: function () {
        console.log('DURATION: ', this.duration);
      },
      onfinish: () => this.publish(Events.Finish, null),
      whileplaying: () => {
        var time = this.currentTime();
        this.publish(Events.Time, time);
      },
      volume: 100
    });
    this.play();
  }

  resume() {
    this.soundObject.resume();
  }
  play() {
    this.soundObject.play();
  };
  pause() {
    this.soundObject.pause();
  }
  seek(percent: number) {
    if (this.soundObject) {
      var time = this.soundObject.duration * percent / 100;
      this.soundObject.setPosition(time);
    }
  }
  currentTime() {
    if (!this.soundObject) return;
    return this.soundObject.position;
  };

  totalTime(): number {
    if (!this.soundObject) return;
    return this.soundObject.duration;
  }

  setVolume(value: number) {
    this.soundObject.setVolume(value)
  };


  getVolume: () => number;

  on(event, handler: () => void) {
    if (!this.subscribers[event]) this.subscribers[event] = [];
    this.subscribers[event].push(handler);
  }

  publish(event, data: any) {
    if (this.subscribers[event]) {
      this.subscribers[event].forEach(handler => {
        handler(data);
      });
    }
  }

}
