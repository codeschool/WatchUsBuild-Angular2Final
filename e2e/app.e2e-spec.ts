import { WatchUsBuildAngular2FinalPage } from './app.po';

describe('watch-us-build-angular2-final App', function() {
  let page: WatchUsBuildAngular2FinalPage;

  beforeEach(() => {
    page = new WatchUsBuildAngular2FinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
