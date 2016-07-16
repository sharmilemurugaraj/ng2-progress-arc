System.register(['@angular/core', '@angular/common', '@angular/platform-browser/src/browser/browser_adapter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, browser_adapter_1;
    var ProgressArc;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (browser_adapter_1_1) {
                browser_adapter_1 = browser_adapter_1_1;
            }],
        execute: function() {
            ProgressArc = (function () {
                function ProgressArc(el, dom) {
                    this.dom = dom;
                    this.strokeWidthCapped = 0;
                    this.radius = 0;
                    this.circumference = 0;
                    this._el = el.nativeElement;
                }
                ProgressArc.prototype.ngOnInit = function () {
                    this.offset = /firefox/i.test(navigator.userAgent) ? -89.9 : -90;
                    this.strokeWidthCapped = Math.min(this.strokeWidth, this.size / 2 - 1);
                    this.radius = Math.max((this.size - this.strokeWidthCapped) / 2 - 1, 0);
                    this.circumference = 2 * Math.PI * this.radius;
                    this.svg = this.dom.querySelector(this._el, 'svg');
                    this.svg.attributes.width.value = this.size;
                    this.svg.attributes.height.value = this.size;
                    var child = this.svg.childNodes[1];
                    child.attributes.cx.value = this.size / 2;
                    child.attributes.cy.value = this.size / 2;
                    child.attributes.r.value = this.radius;
                    child.attributes['stroke-width'].value = this.strokeWidthCapped;
                    child.attributes['stroke-dasharray'].value = this.circumference;
                    child.attributes['stroke-dashoffset'].value = (1 - this.complete) * this.circumference;
                    child.attributes.transform.value = 'rotate(' + this.offset + ',' + this.size / 2 + ',' + this.size / 2 + ')';
                };
                __decorate([
                    core_1.Input('size'), 
                    __metadata('design:type', Number)
                ], ProgressArc.prototype, "size", void 0);
                __decorate([
                    core_1.Input('strokeWidth'), 
                    __metadata('design:type', Number)
                ], ProgressArc.prototype, "strokeWidth", void 0);
                __decorate([
                    core_1.Input('stroke'), 
                    __metadata('design:type', String)
                ], ProgressArc.prototype, "stroke", void 0);
                __decorate([
                    core_1.Input('complete'), 
                    __metadata('design:type', Number)
                ], ProgressArc.prototype, "complete", void 0);
                ProgressArc = __decorate([
                    core_1.Component({
                        selector: 'progress-arc',
                        template: "\n   <svg width=\"75\" height=\"75\">\n      <circle fill=\"white\"\n          cx=\"50\"\n          cy=\"50\"\n          r=\"30\"\n          stroke=\"red\"\n          stroke-width=\"5\"\n          stroke-dasharray=\"20\"\n          stroke-dashoffset=\"1\"\n          transform='rotate(-90, 37.5, 37.5)'\n      />\n   </svg>",
                        directives: [common_1.NgIf],
                        providers: [browser_adapter_1.BrowserDomAdapter]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, browser_adapter_1.BrowserDomAdapter])
                ], ProgressArc);
                return ProgressArc;
            }());
            exports_1("ProgressArc", ProgressArc);
        }
    }
});
//# sourceMappingURL=progress-arc.js.map