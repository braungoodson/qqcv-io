import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {QqcvIoApp} from './app/qqcv-io.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(QqcvIoApp);
