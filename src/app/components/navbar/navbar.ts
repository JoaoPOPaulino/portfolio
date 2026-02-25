import { Component } from '@angular/core';
import { TranslationService } from '../../service/translation.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(public translationService: TranslationService) {}

  setLang(lang: 'pt' | 'en') {
    this.translationService.setLang(lang);
  }

  get currentLang() {
    return this.translationService.currentLang;
  }
}
