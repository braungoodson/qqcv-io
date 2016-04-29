import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {QqcvIoApp} from '../app/qqcv-io.component';

beforeEachProviders(() => [QqcvIoApp]);

describe('App: QqcvIo', () => {
  it('should have the `defaultMeaning` as 42', inject([QqcvIoApp], (app: QqcvIoApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([QqcvIoApp], (app: QqcvIoApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

