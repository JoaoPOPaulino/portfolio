import { Component } from '@angular/core';
import { TranslationService } from '../../service/translation.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(public translationService: TranslationService) {}
}
