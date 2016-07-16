ng2-progress-arc
=========

This module supports for Angular2 rc version.

The sources for this package are in (https://github.com/sharmilemurugaraj/ng2-progress-arc) repo. Please file issues and pull requests against that repo.

##Usage

Include the following lines in typescript file.
```typescript

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
```
You can change the size,strokewidth,stroke and complete as per your requirements.





