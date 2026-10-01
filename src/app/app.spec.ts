import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';
import { TranslationService } from './service/translation.service';

describe('Portfolio navigation', () => {
  it('opens both studies, translates their content and returns to projects', async () => {
    TestBed.configureTestingModule({providers:[provideRouter(routes)]});
    const harness = await RouterTestingHarness.create('/');
    expect(harness.routeNativeElement?.querySelector('a[href="https://orcamento-ac.vercel.app/"]')).toBeTruthy();
    expect(harness.routeNativeElement?.querySelector('a[href="/projetos/estetica-agenda"]')).toBeTruthy();
    await harness.navigateByUrl('/projetos/estetica-agenda');
    expect(harness.routeNativeElement?.textContent).toContain('minha namorada');
    TestBed.inject(TranslationService).setLang('en');
    harness.detectChanges();
    expect(harness.routeNativeElement?.textContent).toContain('my girlfriend');
    await harness.navigateByUrl('/projetos/desapego');
    expect(harness.routeNativeElement?.textContent).toContain('Mobile Development II');
    TestBed.inject(TranslationService).setLang('pt');
    harness.detectChanges();
    expect(harness.routeNativeElement?.textContent).toContain('Desenvolvimento Mobile II');
    await harness.navigateByUrl('/');
    expect(harness.routeNativeElement?.querySelector('#projects')).toBeTruthy();
  });
});
