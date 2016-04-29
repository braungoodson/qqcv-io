export class QqcvIoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('qqcv-io-app p')).getText();
  }
}
