// services/translation.service.ts
import { Injectable, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

type Lang = 'pt' | 'en';

const translations: Record<Lang, Record<string, string>> = {
  pt: {
    'nav.about': 'Sobre',
    "nav.skills": "Tecnologias",
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',

    "hero.greeting": "Desenvolvimento web · Portfólio",
    "hero.subtitle": "Desenvolvedor fullstack em formação",
    "hero.description": "Transformo necessidades do dia a dia em aplicações web. Sou estudante de Sistemas de Informação e estagiário em TI, com projetos que conectam interface, dados e pessoas.",
    "hero.cv": "Baixar currículo",

    'about.tag': 'Sobre',
    'about.title': 'Sobre mim',
    'about.text':
      'Atualmente atuando como estagiário na área de TI, com vivência em suporte técnico, infraestrutura e desenvolvimento web. Tenho buscado ampliar meus conhecimentos por meio de projetos práticos e estudo constante, sempre aberto a aprender novas tecnologias e boas práticas de desenvolvimento.',

    'skills.tag': 'Tecnologias',
    "skills.title": "Tecnologias na prática",
    "skills.description": "Ferramentas que utilizo e estudo. Os projetos acima mostram como aplico esses conhecimentos.",
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
      'Landing page para clínica de estética facial em Palmas, TO. Design elegante e mobile-first com paleta bordô e dourado, integração com WhatsApp, agendamento via Cal.com e deploy no Firebase Hosting. Desenvolvida com React + Vite.',
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
    'projects.wedding_title': 'Site do Casamento — João Pedro & Geovana',
    'projects.wedding_desc':
      'Plataforma completa para o nosso casamento: RSVP com código único, dashboard administrativo, gestão de convidados, finanças em tempo real, lista de presentes e design romântico.',
    'projects.wedding_badge': 'Projeto Pessoal',
    //------------------------------------------------------------------------------------------------------------------------------------------------
    'projects.desapego_badge': 'Projeto Acadêmico',
    'projects.desapego_title': 'Desapego — Aplicativo Mobile',
    'projects.desapego_desc':
      'Aplicativo mobile desenvolvido como projeto da disciplina de Mobile II. A plataforma permite cadastrar, divulgar e encontrar itens usados para venda ou doação, com autenticação de usuários, publicação de anúncios com imagem, categorias, estado de conservação e sugestão de descrição, preço e categoria com IA.',
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
    "contact.success": "Mensagem enviada! Obrigado pelo contato.",
    "contact.error": "Não foi possível enviar. Sua mensagem foi mantida; tente novamente mais tarde.",
    "common.new_tab": " (abre em nova aba)",
    "nav.label": "Navegação principal",
    "nav.home": "João Pedro — início",
    "nav.language": "Idioma",
    "nav.menu": "Menu",
    "nav.close": "Fechar",
    "nav.skip": "Pular para o conteúdo",
    "hero.projects": "Conheça meus projetos",
    "hero.photo": "João Pedro trabalhando em um notebook",
    "hero.caption": "Aprendendo, construindo e evoluindo.",
    "projects.intro": "Uma seleção de aplicações e sites que desenvolvi para aprender e resolver problemas reais.",
    "projects.all": "Todos",
    "projects.apps": "Aplicações",
    "projects.landing": "Landing pages",
    "projects.personal": "Pessoais",
    "projects.more": "Outros projetos",
    "projects.filter": "Filtrar projetos",
    "projects.show_all": "Ver todos os projetos",
    "projects.show_less": "Mostrar menos",
    "projects.no_link": "Demonstração pública não disponível.",
    "projects.featured": "Projeto em destaque",
    "projects.budget_title": "Gerador de Orçamentos",
    "projects.budget_intro": "Uma necessidade da oficina do meu pai virou uma ferramenta gratuita, acessível pelo navegador e sem cadastro.",
    "projects.problem": "O ponto de partida",
    "projects.solution": "O que construí",
    "projects.budget_problem": "Meu pai precisava de ajuda para preparar orçamentos. Encontrar uma opção online simples, boa e gratuita nem sempre era fácil.",
    "projects.budget_solution": "Cadastro de peças e mão de obra, descontos, impressão em PDF, histórico local e backup exportável. Interface responsiva e formulário de contato integrado ao EmailJS.",
    "projects.budget_limit": "Os dados ficam no navegador, sem sincronização entre dispositivos. Uma versão Android está em estudo.",
    "projects.try_app": "Testar aplicação",
    "projects.budget_image": "Prévia real do gerador com um orçamento de demonstração de manutenção automotiva",
    "projects.budget_caption": "Captura da aplicação · Dados fictícios de demonstração",
    "about.focus_title": "Da necessidade à solução",
    "about.focus_text": "Gosto de entender o problema antes de escolher a tecnologia. Meus projetos incluem aplicações web, sites para pequenos negócios e experiências com desenvolvimento mobile.",
    "about.learning_title": "Aprendizado contínuo",
    "about.learning_text": "Tenho experiência de estágio em suporte técnico e infraestrutura e venho aprofundando meus conhecimentos em desenvolvimento frontend e backend.",
    "contact.note": "Seu nome, e-mail e mensagem serão usados para responder ao contato. Não envie senhas ou dados sensíveis.",
    "contact.linkedin": "Experiência e trajetória",
    "contact.github": "Código e projetos",
    "contact.instagram": "Acompanhe meu trabalho",
    "footer.text": "Desenvolvido por João Pedro com Angular.",
    "footer.top": "Voltar ao início",
  },
  en: {
    'nav.about': 'About',
    "nav.skills": "Technologies",
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    "hero.greeting": "Web development · Portfolio",
    "hero.subtitle": "Fullstack developer in training",
    "hero.description": "I turn everyday needs into web applications. I am an Information Systems student and IT intern, building projects that connect interfaces, data and people.",
    "hero.cv": "Download CV",

    'about.tag': 'About',
    'about.title': 'About me',
    'about.text':
      'Currently working as an IT intern, with experience in technical support, infrastructure, and web development. I have been expanding my knowledge through practical projects and constant study, always open to learning new technologies and best development practices.',

    'skills.tag': 'Technologies',
    "skills.title": "Technologies in practice",
    "skills.description": "Tools I use and study. The projects above show how I apply this knowledge.",
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
      'Landing page for a facial aesthetics clinic in Palmas/TO, Brazil. Elegant mobile-first design with a burgundy and gold palette, WhatsApp integration, scheduling via Cal.com, and deployed on Firebase Hosting. Built with React and Vite.',
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
    'projects.wedding_title': 'Wedding Website — João Pedro & Geovana',
    'projects.wedding_desc':
      'Complete platform for our wedding: RSVP system with unique codes, real-time admin dashboard, guest management, financial tracking, interactive gift list, and elegant design.',
    'projects.wedding_badge': 'Personal Project',
    //------------------------------------------------------------------------------------------------------------------------------------------------
    'projects.desapego_badge': 'Academic Project',
    'projects.desapego_title': 'Desapego — Mobile App',
    'projects.desapego_desc':
      'Mobile application developed as a project for the Mobile II course. The platform allows users to register, publish, and find used items for sale or donation, with user authentication, image-based listings, categories, item condition, and AI-powered suggestions for description, price, and category.',
    //------------------------------------------------------------------------------------------------------------------------------------------------

    'contact.tag': 'Contact',
    'contact.title': "Let's talk",
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
    "contact.success": "Message sent! Thank you for getting in touch.",
    "contact.error": "Could not send your message. Your text was kept; please try again later.",
    "common.new_tab": " (opens in a new tab)",
    "nav.label": "Main navigation",
    "nav.home": "João Pedro — home",
    "nav.language": "Language",
    "nav.menu": "Menu",
    "nav.close": "Close",
    "nav.skip": "Skip to content",
    "hero.projects": "Explore my projects",
    "hero.photo": "João Pedro working on a laptop",
    "hero.caption": "Learning, building and growing.",
    "projects.intro": "A selection of applications and websites I have built to learn and solve real problems.",
    "projects.all": "All",
    "projects.apps": "Applications",
    "projects.landing": "Landing pages",
    "projects.personal": "Personal",
    "projects.more": "More projects",
    "projects.filter": "Filter projects",
    "projects.show_all": "View all projects",
    "projects.show_less": "Show fewer",
    "projects.no_link": "Public demo not available.",
    "projects.featured": "Featured project",
    "projects.budget_title": "Quote Builder",
    "projects.budget_intro": "A need at my father’s auto repair shop became a free browser-based tool, with no sign-up required.",
    "projects.problem": "The starting point",
    "projects.solution": "What I built",
    "projects.budget_problem": "My father needed help preparing quotes. Finding a good, simple and free online tool was not always easy.",
    "projects.budget_solution": "Parts and labor, discounts, print-to-PDF, local history and exportable backups. Responsive interface and a contact form integrated with EmailJS.",
    "projects.budget_limit": "Data stays in the browser, without cross-device synchronization. An Android version is under consideration.",
    "projects.try_app": "Try the application",
    "projects.budget_image": "Actual quote builder preview showing a sample automotive maintenance quote",
    "projects.budget_caption": "Application screenshot · Fictional demonstration data",
    "about.focus_title": "From a need to a solution",
    "about.focus_text": "I like to understand the problem before choosing the technology. My projects include web applications, websites for small businesses and mobile development experiments.",
    "about.learning_title": "Continuous learning",
    "about.learning_text": "My internship experience includes technical support and infrastructure, while I continue to develop my frontend and backend skills.",
    "contact.note": "Your name, email and message will be used to respond to your inquiry. Do not send passwords or sensitive information.",
    "contact.linkedin": "Experience and background",
    "contact.github": "Code and projects",
    "contact.instagram": "Follow my work",
    "footer.text": "Built by João Pedro with Angular.",
    "footer.top": "Back to top",
  },
};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private lang = signal<Lang>('pt');
  private document = inject(DOCUMENT);

  get currentLang(): Lang {
    return this.lang();
  }

  setLang(lang: Lang) {
    this.lang.set(lang);
    this.document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    this.document.title = lang === 'pt' ? 'João Pedro Paulino | Desenvolvimento Web' : 'João Pedro Paulino | Web Development';
    const description = this.document.querySelector('meta[name="description"]');
    description?.setAttribute('content', this.t('hero.description'));
  }

  t(key: string): string {
    return translations[this.lang()][key] ?? key;
  }
}
