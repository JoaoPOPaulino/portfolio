import { Component, signal } from '@angular/core';
import { TranslationService } from '../../service/translation.service';
import { CommonModule } from '@angular/common';

type Filter = 'todos' | 'aplicacoes' | 'landing-pages' | 'pessoal';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  activeFilter = signal<Filter>('todos');

  filters: { key: Filter; labelPt: string; labelEn: string }[] = [
    { key: 'todos', labelPt: 'Todos', labelEn: 'All' },
    { key: 'aplicacoes', labelPt: 'Aplicações', labelEn: 'Apps' },
    { key: 'landing-pages', labelPt: 'Landing Pages', labelEn: 'Landing Pages' },
    { key: 'pessoal', labelPt: 'Pessoal', labelEn: 'Personal' },
  ];

  setFilter(filter: Filter) {
    this.activeFilter.set(filter);
  }

  isVisible(category: Filter): boolean {
    return this.activeFilter() === 'todos' || this.activeFilter() === category;
  }

  getFilterLabel(f: { labelPt: string; labelEn: string }): string {
    return this.translationService.currentLang === 'pt' ? f.labelPt : f.labelEn;
  }

  constructor(public translationService: TranslationService) {}

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
