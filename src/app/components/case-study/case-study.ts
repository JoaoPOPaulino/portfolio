import { Component, computed, inject, effect, afterNextRender, ElementRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslationService } from '../../service/translation.service';
import { caseStudies } from './case-study.data';
@Component({selector:'app-case-study',imports:[RouterLink],templateUrl:'./case-study.html',styleUrl:'./case-study.css'})
export class CaseStudy {
  readonly translationService = inject(TranslationService);
  private route = inject(ActivatedRoute);
  private title = inject(Title);
  private host = inject(ElementRef);
  readonly id = this.route.snapshot.data['id'] as keyof typeof caseStudies;
  readonly study = caseStudies[this.id];
  readonly content = computed(() => this.study[this.translationService.currentLang]);
  readonly live = 'live' in this.study ? this.study.live : null;
  readonly labels = computed(() => this.translationService.currentLang === 'pt' ? {
    back:'Voltar aos projetos',tag:'Estudo de caso',role:'Minha participação',solo:'Desenvolvimento individual',context:'O ponto de partida',features:'A solução na prática',screens:'Um olhar sobre a interface',decision:'Uma decisão técnica',status:'Estado atual',next:'Possíveis próximos passos',code:'Ver código',live:'Acessar aplicação',contact:'Vamos conversar sobre um projeto?'
  } : {
    back:'Back to projects',tag:'Case study',role:'My contribution',solo:'Solo development',context:'The starting point',features:'The solution in practice',screens:'A look at the interface',decision:'A technical decision',status:'Current status',next:'Potential next steps',code:'View source',live:'Open application',contact:'Let’s talk about a project'
  });
  constructor() {afterNextRender(() => this.host.nativeElement.querySelector('h1')?.focus({preventScroll:true}));effect(() => {this.title.setTitle(this.study.name+' | '+this.labels().tag+' — João Pedro Paulino');});}
}
