import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  openLink(url: string) {
    window.open(url, '_blank');
  }

  downloadCV() {
  const link = document.createElement('a');
  link.href = 'Curriculo_Joao_Pedro_Paulino.pdf';
  link.download = 'Curriculo_Joao_Pedro_Paulino.pdf';
  link.click();
}
}
