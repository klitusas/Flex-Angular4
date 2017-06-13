import { DynamicPage } from './app.po';

describe('dynamic App', () => {
  let page: DynamicPage;

  beforeEach(() => {
    page = new DynamicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
