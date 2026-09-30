import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';
import { TranslationService } from './service/translation.service';
@Component({ selector: 'app-root', imports: [Navbar, Hero, About, Projects, Skills, Contact], templateUrl: './app.html', styleUrl: './app.css' })
export class App { constructor(public translationService: TranslationService) {} }
