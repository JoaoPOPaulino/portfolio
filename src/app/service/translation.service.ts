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
    'skills.description':
      'Tecnologias e conceitos que venho estudando e aplicando em projetos práticos.',
    'skills.languages': 'Linguagens',
    'skills.frameworks': 'Frameworks',
    'skills.databases': 'Banco de Dados',
    'skills.cloud': 'Cloud & BaaS',
    'skills.concepts': 'Conceitos & Práticas',

    'projects.tag': 'Portfólio',
    'projects.title': 'Projetos',
    //------------------------------------------------------------------------------------------------------------------------------------------------
    'projects.saas_badge': 'Em produção',
    'projects.saas_title': 'Estética Agenda — Sistema Web',
    'projects.saas_desc':
      'Sistema de agendamento online desenvolvido para clínica de estética. Possui autenticação com controle de acesso por roles (cliente, profissional, admin), Row Level Security no banco de dados, painel da profissional com agenda em tempo real, cadastro de serviços, clientes walk-in e gestão de status de atendimentos. Interface mobile-first com design system próprio.',
    //------------------------------------------------------------------------------------------------------------------------------------------------
    'projects.estetica_badge': 'Em produção',
    'projects.estetica_title': 'Clínica Estética — Landing Page',
    'projects.estetica_desc':
      'Landing page para clínica de estética facial em Palmas, TO. Design elegante e mobile-first com paleta bordeaux e dourado, integração com WhatsApp, agendamento via Cal.com e deploy no Firebase Hosting. Desenvolvida com React + Vite.',
    //------------------------------------------------------------------------------------------------------------------------------------------------
    'projects.pudim_badge': 'Em produção',
    'projects.pudim_title': 'Meu Pudizim — Landing Page',
    'projects.pudim_desc':
      'Landing page para confeitaria artesanal de pudins em Canoas, RS. Design aconchegante com integração direta ao WhatsApp para pedidos, cardápio e seções de história da marca. Desenvolvida com Astro e deploy no Vercel.',
    //------------------------------------------------------------------------------------------------------------------------------------------------
    'projects.eletricista_badge': 'Em produção',
    'projects.eletricista_title': 'A.F Eletricista — Landing Page',
    'projects.eletricista_desc':
      'Landing page para eletricista autônomo em Palmas, TO. Design escuro e profissional com formulário de orçamento integrado ao WhatsApp, listagem de serviços e contato direto. Desenvolvida com React, Vite e Tailwind CSS.',
    //------------------------------------------------------------------------------------------------------------------------------------------------
    'projects.django_title': 'Site Institucional — Django',
    'projects.django_desc': 'Desenvolvimento de site institucional com painel administrativo.',
    //------------------------------------------------------------------------------------------------------------------------------------------------
    'projects.portfolio_title': 'Portfólio Angular',
    'projects.portfolio_desc': 'Aplicação desenvolvida com Angular e deploy no GitHub Pages.',
    'projects.view_code': 'Ver Código',
    'projects.view_site': 'Ver Site',
    //------------------------------------------------------------------------------------------------------------------------------------------------
    'projects.rifa_badge': 'Em produção',
    'projects.rifa_title': 'Rifa Digital — Plataforma com Painel Admin',
    'projects.rifa_desc':
      'Aplicação web para gestão de rifas com seleção visual de números, reserva via WhatsApp e painel administrativo em tempo real. Possui autenticação com Firebase, controle de status dos números, edição de compradores, filtros, paginação e integração com Firestore.',
    //------------------------------------------------------------------------------------------------------------------------------------------------

    'contact.tag': 'Contato',
    'contact.title': 'Vamos conversar?',
    'contact.text':
      'Estou aberto a novas oportunidades, projetos e colaborações. Preencha o formulário ou entre em contato pelos links abaixo.',
    'contact.label_name': 'Nome',
    'contact.label_email': 'E-mail',
    'contact.label_message': 'Mensagem',
    'contact.placeholder_name': 'Seu nome',
    'contact.placeholder_email': 'seu@email.com',
    'contact.placeholder_message': 'Escreva sua mensagem...',
    'contact.btn_send': 'Enviar mensagem',
    'contact.btn_sending': 'Enviando...',
    'contact.success': 'Mensagem enviada com sucesso! Responderei em breve.',
    'contact.error': 'Ocorreu um erro. Tente novamente ou envie por e-mail.',
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
    'skills.description':
      'Technologies and concepts I have been studying and applying in practical projects.',
    'skills.languages': 'Languages',
    'skills.frameworks': 'Frameworks',
    'skills.databases': 'Databases',
    'skills.cloud': 'Cloud & BaaS',
    'skills.concepts': 'Concepts & Practices',

    'projects.tag': 'Portfolio',
    'projects.title': 'Projects',
    'projects.saas_badge': 'Live',
    'projects.saas_title': 'Estetica Agenda — Web System',
    'projects.saas_desc':
      'Online scheduling system built for an aesthetic clinic. Features role-based authentication (client, professional, admin), Row Level Security at the database level, a professional dashboard with real-time schedule management, service registration, walk-in client handling, and appointment status tracking. Mobile-first interface with a custom design system.',
    //------------------------------------------------------------------------------------------------------------------------------------------------
    'projects.estetica_badge': 'Live',
    'projects.estetica_title': 'Aesthetic Clinic — Landing Page',
    'projects.estetica_desc':
      'Landing page for a facial aesthetics clinic in Palmas/TO, Brazil. Elegant mobile-first design with a bordeaux and gold palette, WhatsApp integration, scheduling via Cal.com, and deployed on Firebase Hosting. Built with React and Vite.',
    //------------------------------------------------------------------------------------------------------------------------------------------------
    'projects.pudim_badge': 'Live',
    'projects.pudim_title': 'Meu Pudizim — Landing Page',
    'projects.pudim_desc':
      'Landing page for a homemade pudding bakery in Canoas/RS, Brazil. Warm and cozy design with direct WhatsApp order integration, menu section, and brand story. Built with Astro and deployed on Vercel.',
    //------------------------------------------------------------------------------------------------------------------------------------------------
    'projects.eletricista_badge': 'Live',
    'projects.eletricista_title': 'A.F Eletricista — Landing Page',
    'projects.eletricista_desc':
    'Landing page for a freelance electrician in Palmas, Brazil. Dark and professional design with a WhatsApp-integrated quote form, service listing, and direct contact. Built with React, Vite, and Tailwind CSS.',
    //------------------------------------------------------------------------------------------------------------------------------------------------
    'projects.django_title': 'Institutional Website — Django',
    'projects.django_desc': 'Institutional website development with an admin panel.',
    //------------------------------------------------------------------------------------------------------------------------------------------------
    'projects.portfolio_title': 'Angular Portfolio',
    'projects.portfolio_desc': 'Application built with Angular and deployed on GitHub Pages.',
    'projects.view_code': 'View Code',
    'projects.view_site': 'View Site',
    //------------------------------------------------------------------------------------------------------------------------------------------------
    'projects.rifa_badge': 'Live',
    'projects.rifa_title': 'Digital Raffle — Platform with Admin Panel',
    'projects.rifa_desc':
      'Web application for raffle management with visual number selection, WhatsApp reservation flow, and a real-time admin dashboard. Features Firebase authentication, number status control, buyer editing, filters, pagination, and Firestore integration.',
    //------------------------------------------------------------------------------------------------------------------------------------------------
    
    'contact.tag': 'Contact',
    'contact.title': "Let's talk?",
    'contact.text':
      "I'm open to new opportunities, projects, and collaborations. Fill out the form or reach out through the links below.",
    'contact.label_name': 'Name',
    'contact.label_email': 'Email',
    'contact.label_message': 'Message',
    'contact.placeholder_name': 'Your name',
    'contact.placeholder_email': 'your@email.com',
    'contact.placeholder_message': 'Write your message...',
    'contact.btn_send': 'Send message',
    'contact.btn_sending': 'Sending...',
    'contact.success': 'Message sent successfully! I will reply soon.',
    'contact.error': 'Something went wrong. Try again or send via email.',
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
