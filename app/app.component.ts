
import {Component} from '@angular/core';
import {ProgressArc} from './directives/progress-arc';

@Component({
    selector : 'my-app',
    directives: [ProgressArc],
    template:  `
        <div class="row">
          <div class="col-xs-6">
            <progress-arc [size]=100 [strokeWidth]=5 [stroke]="red" [complete]=0.8></progress-arc>
          </div>
        </div>  `
})
export class AppComponent {

}
