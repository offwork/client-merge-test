import { ClientMergeTestPage } from './app.po';

describe('client-merge-test App', () => {
  let page: ClientMergeTestPage;

  beforeEach(() => {
    page = new ClientMergeTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
