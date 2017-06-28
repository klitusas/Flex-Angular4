import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[page-host]'
})
export class PagesDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
    console.log(viewContainerRef);
  }

}
