import { Component } from '@angular/core';
import { TranslationService } from '../../service/translation.service';
@Component({ selector: 'app-hero', templateUrl: './hero.html', styleUrl: './hero.css' })
export class Hero { constructor(public translationService: TranslationService) {} }
