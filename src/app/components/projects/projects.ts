import { RouterLink } from '@angular/router';
import { Component, computed, signal } from '@angular/core';
import { TranslationService } from '../../service/translation.service';
type Category = 'aplicacoes' | 'landing-pages' | 'pessoal';
type Filter = 'todos' | Category;
type Project = { key: string; study?: string; category: Category; badge?: string; tags: string[]; code?: string; live?: string };
@Component({ imports: [RouterLink], selector: 'app-projects', templateUrl: './projects.html', styleUrl: './projects.css' })
export class Projects {
  constructor(public translationService: TranslationService) {}
  activeFilter = signal<Filter>('todos');
  showAll = signal(false);
  filters: { key: Filter; translation: string }[] = [
    { key: 'todos', translation: 'projects.all' }, { key: 'aplicacoes', translation: 'projects.apps' },
    { key: 'landing-pages', translation: 'projects.landing' }, { key: 'pessoal', translation: 'projects.personal' },
  ];
  projects: Project[] = [
    { key: 'saas', study: 'estetica-agenda', category: 'aplicacoes', badge: 'projects.saas_badge', tags: ['Next.js','React','TypeScript','Supabase','PostgreSQL'], code: 'https://github.com/JoaoPOPaulino/estetica-agenda', live: 'https://thamyres-ribeiro.vercel.app' },
    { key: 'estetica', category: 'landing-pages', badge: 'projects.estetica_badge', tags: ['React','Vite','TypeScript','Tailwind CSS','Cal.com'], code: 'https://github.com/JoaoPOPaulino/geovana-teles', live: 'https://geovanateles.com.br/' },
    { key: 'desapego', study: 'desapego', category: 'aplicacoes', badge: 'projects.desapego_badge', tags: ['Flutter','Dart','Firebase','Gemini API'], code: 'https://github.com/JoaoPOPaulino/desapego_app' },
    { key: 'eletricista', category: 'landing-pages', badge: 'projects.eletricista_badge', tags: ['React','Vite','TypeScript','Tailwind CSS'], code: 'https://github.com/JoaoPOPaulino/af-eletricista', live: 'https://www.afeletricista.com.br' },
    { key: 'pudim', category: 'landing-pages', badge: 'projects.pudim_badge', tags: ['Astro','JavaScript','CSS','Vercel'], code: 'https://github.com/JoaoPOPaulino/meu-pudizim', live: 'https://meu-pudizim.vercel.app' },
    { key: 'rifa', category: 'aplicacoes', badge: 'projects.rifa_badge', tags: ['React','TypeScript','Firebase','Cloud Functions'], code: 'https://github.com/JoaoPOPaulino/minha-rifa', live: 'https://minha-rifa-3773a.web.app' },
    { key: 'django', category: 'aplicacoes', tags: ['Python','Django','PostgreSQL'], code: 'https://github.com/JoaoPOPaulino/apasi' },
    { key: 'portfolio', category: 'pessoal', tags: ['Angular','TypeScript','GitHub Pages'], code: 'https://github.com/JoaoPOPaulino/portfolio' },
    { key: 'wedding', category: 'pessoal', badge: 'projects.wedding_badge', tags: ['React','TypeScript','Firebase','Zustand','Recharts'] },
  ];
  filteredProjects = computed(() => this.projects.filter(project => this.activeFilter() === 'todos' || project.category === this.activeFilter()));
  visibleProjects = computed(() => this.showAll() ? this.filteredProjects() : this.filteredProjects().slice(0,4));
  setFilter(filter: Filter) { this.activeFilter.set(filter); this.showAll.set(false); }
}
