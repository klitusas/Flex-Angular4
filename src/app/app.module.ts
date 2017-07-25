import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PagesDirective } from './pages.directive';
import { DogsComponent } from './dogs-profile/dogs.component';
import { PlayerComponent } from './player-profile/player.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { PageService } from "./page.service";

import { PlayerControllerComponent } from './player-profile/player-controller/player-controller.component';
import { VolumeComponent } from './player-profile/player-controller/volume.component';
import { SoundManagerService } from "app/player-profile/services/sound-manager.service";
import { ControlsComponent } from './player-profile/player-controller/controls.component';
import * as soundManager from 'soundmanager2';
import { SoundManagerManagerService } from "app/player-profile/services/sound-manager-manager.service";
import { SearchSectionComponent } from './player-profile/player-controller/search-section.component';
import { SearchBoxComponent } from './player-profile/player-controller/search-box.component';
import { SearchResultComponent } from "app/player-profile/player-controller/search-result.component";
import { SearchService } from "app/player-profile/services/search.service";
import { MusicImageComponent } from "app/player-profile/player-controller/music-image.component";
import { TimeSeekerComponent } from './player-profile/player-controller/time-seeker.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesDirective,
    DogsComponent,
    PlayerComponent,
    PlayerControllerComponent,
    VolumeComponent,
    ControlsComponent,
    SearchSectionComponent,
    SearchBoxComponent,
    SearchResultComponent,
    MusicImageComponent,
    TimeSeekerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    JsonpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

  ],
  providers: [SearchService, PageService, SoundManagerService, SoundManagerManagerService],
  entryComponents: [DogsComponent, PlayerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
