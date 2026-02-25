// services/translation.service.ts
import { Injectable, signal } from '@angular/core';

type Lang = 'pt' | 'en';

const translations: Record<Lang, Record<string, string>> = {
  pt: {
    'nav.about': 'Sobre',
    'nav.skills': 'Skills',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',

    'hero.greeting': 'Olá, eu sou',
    'hero.subtitle': 'Desenvolvedor Fullstack em formação',
    'hero.description':
      'Estudante de Sistema de Informação, desenvolvendo projetos práticos e ampliando conhecimento em desenvolvimento backend e frontend. Busco evoluir continuamente por meio de estudo e experiência.',
    'hero.cv': 'Download CV',

    'about.tag': 'Sobre',
    'about.title': 'Sobre mim',
    'about.text':
      'Atualmente atuando como estagiário na área de TI, com vivência em suporte técnico, infraestrutura e desenvolvimento web. Tenho buscado ampliar meus conhecimentos por meio de projetos práticos e estudo constante, sempre aberto a aprender novas tecnologias e boas práticas de desenvolvimento.',

    'skills.tag': 'Tecnologias',
    'skills.title': 'Skills & Conhecimentos',
    'skills.description': 'Tecnologias e conceitos que venho estudando e aplicando em projetos práticos.',
    'skills.languages': 'Linguagens',
    'skills.frameworks': 'Frameworks',
    'skills.databases': 'Banco de Dados',
    'skills.cloud': 'Cloud & BaaS',
    'skills.concepts': 'Conceitos & Práticas',

    'projects.tag': 'Portfólio',
    'projects.title': 'Projetos',
    'projects.saas_badge': 'Em desenvolvimento',
    'projects.saas_title': 'Estética Agenda — SaaS',
    'projects.saas_desc':
      'Plataforma SaaS de agendamento online para clínicas e salões de estética. Possui autenticação com controle de acesso por roles (cliente, profissional, admin), Row Level Security no banco de dados, painel da profissional com agenda em tempo real, cadastro de serviços, clientes walk-in e gestão de status de atendimentos. Interface mobile-first com design system próprio.',
    'projects.django_title': 'Site Institucional — Django',
    'projects.django_desc': 'Desenvolvimento de site institucional com painel administrativo.',
    'projects.portfolio_title': 'Portfólio Angular',
    'projects.portfolio_desc': 'Aplicação desenvolvida com Angular e deploy no GitHub Pages.',
    'projects.view_code': 'Ver Código',

    'contact.tag': 'Contato',
    'contact.title': 'Vamos conversar?',
    'contact.text': 'Estou aberto a novas oportunidades, projetos e colaborações. Entre em contato!',
  },
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    'hero.greeting': "Hi, I'm",
    'hero.subtitle': 'Fullstack Developer in training',
    'hero.description':
      'Information Systems student, building practical projects and expanding knowledge in backend and frontend development. I seek continuous growth through study and hands-on experience.',
    'hero.cv': 'Download CV',

    'about.tag': 'About',
    'about.title': 'About me',
    'about.text':
      'Currently working as an IT intern, with experience in technical support, infrastructure, and web development. I have been expanding my knowledge through practical projects and constant study, always open to learning new technologies and best development practices.',

    'skills.tag': 'Technologies',
    'skills.title': 'Skills & Knowledge',
    'skills.description': 'Technologies and concepts I have been studying and applying in practical projects.',
    'skills.languages': 'Languages',
    'skills.frameworks': 'Frameworks',
    'skills.databases': 'Databases',
    'skills.cloud': 'Cloud & BaaS',
    'skills.concepts': 'Concepts & Practices',

    'projects.tag': 'Portfolio',
    'projects.title': 'Projects',
    'projects.saas_badge': 'In development',
    'projects.saas_title': 'Estetica Agenda — SaaS',
    'projects.saas_desc':
      'Online scheduling SaaS platform for aesthetic clinics and beauty salons. Features role-based authentication (client, professional, admin), Row Level Security at the database level, a professional dashboard with real-time schedule management, service registration, walk-in client handling, and appointment status tracking. Mobile-first interface with a custom design system.',
    'projects.django_title': 'Institutional Website — Django',
    'projects.django_desc': 'Institutional website development with an admin panel.',
    'projects.portfolio_title': 'Angular Portfolio',
    'projects.portfolio_desc': 'Application built with Angular and deployed on GitHub Pages.',
    'projects.view_code': 'View Code',

    'contact.tag': 'Contact',
    'contact.title': "Let's talk?",
    'contact.text': "I'm open to new opportunities, projects, and collaborations. Get in touch!",
  },
};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private lang = signal<Lang>('pt');

  get currentLang(): Lang {
    return this.lang();
  }

  setLang(lang: Lang) {
    this.lang.set(lang);
  }

  t(key: string): string {
    return translations[this.lang()][key] ?? key;
  }
}