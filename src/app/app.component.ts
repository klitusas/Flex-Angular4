import { Component, ViewChild, ComponentFactoryResolver, Type, Injectable, AfterViewInit, Input, OnInit, ChangeDetectorRef, VERSION, Output, EventEmitter } from '@angular/core';
import { PagesDirective } from "app/pages.directive";
import { PageItem } from "app/page-item";
import { Page } from "app/page";
import { trigger, transition, style, animate, group } from "@angular/animations";
import { PageService } from "app/page.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('itemAnim', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(350)
      ]),
      transition(':leave', [
        group([
          animate('0.2s ease', style({
            transform: 'translate(150px,25px)'
          })),
          animate('0.5s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class AppComponent implements AfterViewInit, OnInit {
  slideInState: string;
  loading: boolean;
  pages: PageItem[];
  interval: any;
  currentAddIndex: number = -1;
  @ViewChild(PagesDirective) pageHost: PagesDirective;

  constructor(private adService: PageService, private _componentFactoryResolver: ComponentFactoryResolver, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.pages = this.adService.getPages();
    console.log(this.pages)
  }
  ngAfterViewInit() {
    this.loadComponent();
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000)
    this.slideInState = 'next';
    this.currentAddIndex = (this.currentAddIndex + 1) % this.pages.length;
    let pageItem = this.pages[this.currentAddIndex];
    let componentFactory = this._componentFactoryResolver.resolveComponentFactory(pageItem.component);
    console.log(componentFactory)
    let viewContainerRef = this.pageHost.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    console.log(componentRef);
    (<Page>componentRef.instance).data = pageItem.data;
    (<Page>componentRef.instance).status = this.slideInState;
    this.cdr.detectChanges();
  }
  loadComponentBack() {
    if (this.currentAddIndex != 0) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000)
      this.slideInState = 'prev';
      this.currentAddIndex = (this.currentAddIndex - 1) % this.pages.length;
      let pageItem = this.pages[this.currentAddIndex];
      let componentFactory = this._componentFactoryResolver.resolveComponentFactory(pageItem.component);
      let viewContainerRef = this.pageHost.viewContainerRef;
      viewContainerRef.clear();
      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<Page>componentRef.instance).data = pageItem.data;
      (<Page>componentRef.instance).status = this.slideInState;
      this.cdr.detectChanges();

    } else {
      this.currentAddIndex = this.pages.length;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000)
      this.slideInState = 'prev';
      this.currentAddIndex = (this.currentAddIndex - 1) % this.pages.length;
      let pageItem = this.pages[this.currentAddIndex];
      let componentFactory = this._componentFactoryResolver.resolveComponentFactory(pageItem.component);
      let viewContainerRef = this.pageHost.viewContainerRef;
      viewContainerRef.clear();
      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<Page>componentRef.instance).data = pageItem.data;
      (<Page>componentRef.instance).status = this.slideInState;
      this.cdr.detectChanges();
    }
  }
}


