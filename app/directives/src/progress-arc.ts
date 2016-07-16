import {Component,Input,OnInit,ElementRef} from '@angular/core';
import {NgIf} from '@angular/common';
import {BrowserDomAdapter} from '@angular/platform-browser/src/browser/browser_adapter';

@Component({
  selector:'progress-arc',
  template:`
   <svg width="75" height="75">
      <circle fill="white"
          cx="50"
          cy="50"
          r="30"
          stroke="red"
          stroke-width="5"
          stroke-dasharray="20"
          stroke-dashoffset="1"
          transform='rotate(-90, 37.5, 37.5)'
      />
   </svg>`,
  directives: [NgIf],
  providers: [BrowserDomAdapter]
})
export class ProgressArc implements OnInit {
  @Input('size') size:number;
  @Input('strokeWidth') strokeWidth:number;
  @Input('stroke') stroke:string;
  @Input('complete') complete:number;
  strokeWidthCapped:number=0;
  radius:number=0;
  circumference:number=0;
  offset:any;
  svg:any;
  private _el: HTMLElement;

  constructor(el: ElementRef, private dom: BrowserDomAdapter) {
    this._el = el.nativeElement;
  }


  ngOnInit() {
    this.offset = /firefox/i.test(navigator.userAgent) ? -89.9 : -90;
    this.strokeWidthCapped = Math.min(this.strokeWidth, this.size / 2 - 1);
    this.radius = Math.max((this.size - this.strokeWidthCapped) / 2 - 1, 0);
    this.circumference = 2 * Math.PI * this.radius;
    this.svg = this.dom.querySelector(this._el, 'svg');
    this.svg.attributes.width.value = this.size;
    this.svg.attributes.height.value = this.size;
    let child = this.svg.childNodes[1];
    child.attributes.cx.value = this.size/2;
    child.attributes.cy.value = this.size/2;
    child.attributes.r.value = this.radius;
    child.attributes['stroke-width'].value = this.strokeWidthCapped;
    child.attributes['stroke-dasharray'].value = this.circumference;
    child.attributes['stroke-dashoffset'].value = (1 - this.complete) * this.circumference;
    child.attributes.transform.value = 'rotate('+ this.offset + ',' + this.size/2 + ',' + this.size/2 +')';
  }
}

