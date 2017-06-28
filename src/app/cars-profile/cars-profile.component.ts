import { Component, OnInit, Input } from '@angular/core';
import { slideIn } from '../animation';

@Component({
  template: `

<md-grid-list cols="4" rowHeight="100px" [@slideIn] >
  <md-grid-tile
      *ngFor="let tile of tiles"
      [colspan]="tile.cols"
      [rowspan]="tile.rows"
      [style.background]="tile.color" [innerHTML]="tile.text" >
      
  </md-grid-tile>
</md-grid-list>
{{data}}
  `,
     animations: [
      slideIn
    ]
})
export class CarsProfileComponent {
  @Input()data: any
  tiles: Array<any>

  ngAfterViewInit() {
    let data = this.data;
      this.tiles = [
    {
      text: `<div class="car-profile" >
      <h1>Featured Hero Profile</h1>
      <span>{{tile | json}}</span>
      <h4>{{data.name}}</h4>
      
      <p>{{data.bio}}</p>
      <p>{{data.surname}}</p>
      <img *ngIf="data.image != null" [src]="data.image">

      <strong>Hire this hero today!</strong>
    </div>`, cols: 3, rows: 1, color: 'lightblue', data: this.data
    },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen',  },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
    console.log(this.tiles)
  console.log(this.tiles[0].data)
  }


}

