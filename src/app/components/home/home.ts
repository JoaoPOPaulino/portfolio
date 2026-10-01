import { Title } from '@angular/platform-browser';
import { TranslationService } from '../../service/translation.service';
import { Component, inject, effect } from '@angular/core';
import { Hero } from '../hero/hero';
import { Projects } from '../projects/projects';
import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { Contact } from '../contact/contact';
@Component({selector:'app-home',imports:[Hero,Projects,About,Skills,Contact],template:'<app-hero/><app-projects/><app-about/><app-skills/><app-contact/>'})
export class Home {
 private title = inject(Title);
 private translation = inject(TranslationService);
 constructor(){effect(()=>this.title.setTitle(this.translation.currentLang === 'pt' ? 'João Pedro Paulino | Desenvolvimento Web' : 'João Pedro Paulino | Web Development'));}
}
