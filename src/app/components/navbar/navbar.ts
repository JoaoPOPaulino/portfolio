import { Component, signal } from '@angular/core';
import { TranslationService } from '../../service/translation.service';
@Component({ selector: 'app-navbar', templateUrl: './navbar.html', styleUrl: './navbar.css' })
export class Navbar {
  menuOpen = signal(false);
  constructor(public translationService: TranslationService) {}
  setLang(lang: 'pt' | 'en') { this.translationService.setLang(lang); }
  closeMenu() { this.menuOpen.set(false); }
  get currentLang() { return this.translationService.currentLang; }
}
