import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { TranslationService } from './service/translation.service';

describe('Portfolio', () => {
  it('presents the quote project with real links and changes language', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('a[href="https://orcamento-ac.vercel.app/"]')).toBeTruthy();
    expect(element.innerHTML).not.toContain('SEU-USUARIO');
    TestBed.inject(TranslationService).setLang('en');
    await fixture.whenStable();
    expect(document.documentElement.lang).toBe('en');
    expect(element.querySelector('h1')?.textContent).toContain('João Pedro');
    TestBed.inject(TranslationService).setLang('pt');
  });
});
