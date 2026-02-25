import { Component } from '@angular/core';
import { TranslationService } from '../../service/translation.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
constructor(public translationService: TranslationService) {}

  openLink(url: string) {
  window.open(url, '_blank');
}
}
