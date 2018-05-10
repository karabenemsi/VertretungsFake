import { VertretungsFakePage } from './app.po';

describe('vertretungs-fake App', () => {
  let page: VertretungsFakePage;

  beforeEach(() => {
    page = new VertretungsFakePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to vf!');
  });
});
