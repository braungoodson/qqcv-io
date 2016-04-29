export class QqcvIoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('qqcv-io-app p')).getText();
  }

  navigateToPurpleAligator() {
    return browser.get('/purple-aligator')
  }

  getPurpleAligatorText() {
    return element(by.css('.purple-aligator')).getText();
  }
}
