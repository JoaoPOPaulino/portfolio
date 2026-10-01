import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { TranslationService } from './service/translation.service';
@Component({ selector: 'app-root', imports: [Navbar, RouterLink, RouterOutlet], templateUrl: './app.html', styleUrl: './app.css' })
export class App { constructor(public translationService: TranslationService) {} }
