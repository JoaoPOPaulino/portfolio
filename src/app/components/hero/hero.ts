// hero.component.ts
import { Component } from '@angular/core';
import { TranslationService } from '../../service/translation.service';


@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  constructor(public translationService: TranslationService) {}

  openLink(url: string) {
    window.open(url, '_blank');
  }

  downloadCV() {
    const isEn = this.translationService.currentLang === 'en';
    const file = isEn
      ? 'CV_Joao_Pedro_EN.pdf'
      : 'Curriculo_Joao_Pedro_Paulino.pdf';

    const link = document.createElement('a');
    link.href = file;
    link.download = file;
    link.click();
  }
}