import { QqcvIoPage } from './app.po';

describe('qqcv-io App', function() {
  let page: QqcvIoPage;

  beforeEach(() => {
    page = new QqcvIoPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('qqcv-io Works!');
  });

  it('should display the purple aligator', () => {
    page.navigateToPurpleAligator();
    expect(page.getPurpleAligatorText()).toEqual('purple-aligator Works!');
  });
});
