import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {PurpleAligatorComponent} from './+purple-aligator';

@Component({
  moduleId: __moduleName,
  selector: 'qqcv-io-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'qqcv-io.component.html',
  styleUrls: ['qqcv-io.component.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  {path: '/purple-aligator', name: 'PurpleAligator', component: PurpleAligatorComponent}
])
export class QqcvIoApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
