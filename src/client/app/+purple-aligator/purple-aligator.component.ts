import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'purple-aligator',
  templateUrl: 'purple-aligator.component.html',
  styleUrls: ['purple-aligator.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class PurpleAligatorComponent implements OnInit {

  constructor() {}
  
  ngOnInit() {
  }

}
