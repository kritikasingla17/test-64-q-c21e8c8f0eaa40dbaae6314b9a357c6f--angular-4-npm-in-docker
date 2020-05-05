import { CjAppPage } from './app.po';

describe('cj-app App', () => {
  let page: CjAppPage;

  beforeEach(() => {
    page = new CjAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
