import { Component } from '@angular/core';
import { TranslationService } from '../../service/translation.service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  constructor(public translationService: TranslationService) {}

  openLink(url: string) {
  window.open(url, '_blank');
}
}
