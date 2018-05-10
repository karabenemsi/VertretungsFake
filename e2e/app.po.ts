import { browser, by, element } from 'protractor';

export class VertretungsFakePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('vf-root h1')).getText();
  }
}
