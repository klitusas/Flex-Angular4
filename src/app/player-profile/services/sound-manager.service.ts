import { Injectable, OnInit } from '@angular/core';
import { Events } from "app/player-profile/interfaces/events";
import { IPlayer } from "app/player-profile/interfaces/IPlayer";
import { SoundManagerManagerService } from "app/player-profile/services/sound-manager-manager.service";
import { SearchItem } from "app/player-profile/interfaces/SearchItem";


declare const soundManager: any;


@Injectable()
export class SoundManagerService implements OnInit {
  ngOnInit(): void {
    soundManager.setup({
      url: '/assets/sm2/swf/',
      preferFlash: true,
      debugFlash: true,
      flashVersion: 9,
      useFlashBlock: true,
      ontimeout: function () {
        // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
        console.error('can\'t load sound manager');
      }
    });
  }

  private isMute = false;
  private subscribers: Object = {};
  private isPlaying = false;
  private soundObject;
  private soundPlayer
  private songs = [];
  private songIndex: number;

  constructor(private managerService: SoundManagerManagerService) { }



  on(event, handler: any) {
    if (!this.subscribers[event])
      this.subscribers[event] = [];
    this.subscribers[event].push(handler);
  }

  change(song: SearchItem) {
    this.publish(Events.ChangeSong, song);
  }
  getSongs(songs) {
    console.log(songs)
    this.songs = songs;
  }

  next() {
    console.log("start index", this.songIndex)
    //playing next song in the array
    if (this.songIndex < this.songs.length - 1) {
      var index = this.songIndex + 1;
      console.log("index after incrementing ", index)
      var songLink = this.songs[index].previewUrl;
      this.play(songLink, index)
    } else {
      index = 0;
      var songLink = this.songs[0].previewUrl;
      this.play(songLink, index)
    }

  }
  play(songLink: string, index) {
    console.log("song index ", index)
    this.songIndex = index;
    this.managerServiceService(this.managerService);
    this.isPlaying = true;
    this.publish(Events.Play, true);
    this.managerService.initialize(songLink);
    this.publish(Events.Time, this.managerService.currentTime())
  }

  pause() {
    this.isPlaying = false;
    this.publish(Events.Play, false);
    this.managerService.pause();
    this.publish(Events.Time, this.managerService.currentTime())
  }

  toggleMute() {
    if (this.isMute) {
      this.isMute = false;
      this.publish(Events.Volume, false);
      this.managerService.setVolume(100);
    } else {
      this.isMute = true;
      this.publish(Events.Volume, true);
      this.managerService.setVolume(0);
    }
  }

  duration() {
    this.publish(Events.Time, this.managerService.currentTime())
  }
  getTotalTime() {
    return this.managerService.totalTime();
  }
  seek(time: number) {
    this.managerService.seek(time);
  }

  togglePlayPause(song) {
    if (this.isPlaying) {
      this.managerService.pause();
      this.isPlaying = false;
      this.publish(Events.Play, false);
      this.publish(Events.Time, this.managerService.currentTime())
    } else {
      this.managerService.resume();
      this.isPlaying = true;
      this.publish(Events.Play, true)
      this.publish(Events.Time, this.managerService.currentTime())
    }
  }

  private publish(event, data: any) {
    if (this.subscribers[event]) {
      this.subscribers[event].forEach(function (handler) {
        handler(data)
      });
    }
  }

  managerServiceService(managerService) {

    managerService.on(Events.Time, (time) => {
      this.publish(Events.Time, time);
    });
  }

}
