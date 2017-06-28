import { Component, OnInit, Input } from '@angular/core';
import { Page } from "app/page";
import { trigger, transition, style, animate, group } from "@angular/animations";
import { slideIn, focusPanel } from '../animation';

@Component({
  template: `
<md-sidenav-container [@slideIn] = 'status'>
  <!--class="app-sidenav"-->
  <md-sidenav #sidenav mode="side">
    <md-list>
      <md-list-item layout="row"><button md-button class="full-button">Item 1</button></md-list-item>
      <md-list-item layout="row"><button md-button class="full-button">Item 2</button></md-list-item>
      <md-list-item layout="row"><button md-button class="full-button">Item 3</button></md-list-item>
    </md-list>
  </md-sidenav>
  <!--fxLayout="row wrap"-->
  <div class="example-sidenav-content" >
  <md-toolbar color="primary" fxLayout="row" >
    <div fxFlex="15%" ><button class="app-icon-button" (click)="sidenav.toggle()" ><i class="material-icons app-toolbar-menu">menu</i>
      </button></div>
    <div fxFlex="80%" ><span>Pets - responsive/flex-layout</span></div>
  </md-toolbar>
        </div>
    <div fxLayoutWrap>
      <div *ngFor="let data of data.data; let i = index" fxFlex="1 2 calc(21em + 10px)" fxLayoutAlign="start center">
        <md-card class="example-card" [@focusPanel]='data.state'>
          <md-card-header>
            <div md-card-avatar class="example-header-image"></div>
            <md-card-title>{{data.name}}</md-card-title>
            <md-card-subtitle>{{data.breed}}</md-card-subtitle>
          </md-card-header>
          <img md-card-image src="{{data.image}}" (click)="toggleMove(data)" />
          <md-card-content>
            <p>
              The {{data.name}} {{data.description}}
            </p>
            <md-card-actions>
              <div fxLayout="row">
                <div fxFlex="50%">
                  <a md-mini-fab routerLink=".">
                    <md-icon>plus_one</md-icon>
                  </a>
                </div>
                <div fxFlex="50%" fxLayoutAlign="end center">
                  <a md-mini-fab routerLink=".">
                    <md-icon>comment</md-icon>
                  </a>
                  <a md-mini-fab routerLink=".">
                    <md-icon>share</md-icon>
                  </a>
                </div>
              </div>
            </md-card-actions>
          </md-card-content>
        </md-card>
      </div>

  </div>
   <!--<div class="containerX">
      <div fxLayout="row wrap" class="colored box nopad" >
        <div fxFlex="none">     [flex="none"]       </div>
        <div fxFlex>            [flex]              </div>
        <div fxFlex="nogrow">   [flex="nogrow"]     </div>
        <div fxFlex="grow">     [flex="grow"]       </div>
        
        <div fxFlex="33.33%">   [flex="33.33%"]     </div>
        <div fxFlex="33.33%">   [flex="33.33%"]     </div>
        <div fxFlex="33.33%">   [flex="33.33%"]     </div>
        
      </div>          
    </div>-->
</md-sidenav-container>
  `,

  animations: [
    slideIn,
    focusPanel
  ]
})
export class DogsComponent implements Page {
  state: string = 'inactive';
  data: any;
  status: string;

  toggleMove(data) {
    console.log(this.status)
    data.state = (data.state === 'inactive' ? 'active' : 'inactive');
  }

}
