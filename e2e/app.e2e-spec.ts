import { Angular2SpotiyySearchExamplePage } from './app.po';

describe('angular2-spotiyy-search-example App', () => {
  let page: Angular2SpotiyySearchExamplePage;

  beforeEach(() => {
    page = new Angular2SpotiyySearchExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
