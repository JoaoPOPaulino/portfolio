export const caseStudies = {
  "estetica-agenda": {
    "name": "Estética Agenda",
    "code": "https://github.com/JoaoPOPaulino/estetica-agenda",
    "live": "https://thamyres-ribeiro.vercel.app",
    "tags": [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL"
    ],
    "pt": {
      "type": "Aplicação web · Projeto individual",
      "headline": "Da rotina de uma clínica a um sistema de agendamento.",
      "intro": "Desenvolvi o Estética Agenda a partir de uma necessidade que observei no dia a dia da minha namorada. O projeto conecta a experiência de quem agenda um atendimento à organização de quem o realiza.",
      "context": "A motivação veio de uma situação próxima de mim, fora da sala de aula. Transformei essa necessidade em um projeto próprio de desenvolvimento web, com fluxos para clientes, profissionais e administração.",
      "role": "Fui o único desenvolvedor do projeto, responsável pela implementação da interface e pela integração com os serviços utilizados pela aplicação.",
      "features": [
        {
          "title": "Agendamento por etapas",
          "text": "O fluxo permite selecionar profissional, serviço, data e horário. A disponibilidade considera a duração do serviço e os horários já ocupados."
        },
        {
          "title": "Rotinas por perfil",
          "text": "Clientes acompanham seus agendamentos; profissionais têm uma área para gerenciar a agenda, os serviços e a situação dos atendimentos."
        },
        {
          "title": "Interface e dados conectados",
          "text": "A aplicação usa Next.js e React na interface, com Supabase para autenticação e acesso aos dados."
        }
      ],
      "decision": "Um ponto técnico do projeto é o cálculo de disponibilidade: o código divide o dia em intervalos de 15 minutos e considera a duração do serviço para filtrar os horários. Isso mostra uma regra de negócio que vai além de exibir um calendário.",
      "status": "A aplicação tem uma demonstração pública. Este estudo apresenta funcionalidades identificadas no código; ainda não há métricas de uso ou de economia de tempo para apresentar.",
      "next": "Como evolução, vale medir o tempo necessário para agendar, observar dificuldades de uso e testar situações como cancelamentos e tentativas de reserva no mesmo horário.",
      "images": [
        {
          "src": "projects/cases/estetica-home.png",
          "alt": "Página pública da clínica Thamyres Ribeiro com acesso ao agendamento",
          "caption": "Entrada da aplicação: apresentação da clínica e acesso ao agendamento."
        },
        {
          "src": "projects/cases/estetica-login.png",
          "alt": "Tela pública de acesso à conta do Estética Agenda",
          "caption": "Acesso à conta: uma das entradas para os fluxos do sistema."
        }
      ],
      "imageNote": "Capturas das telas públicas. Áreas com dados de clientes não estão expostas."
    },
    "en": {
      "type": "Web application · Solo project",
      "headline": "From a clinic’s daily routine to a scheduling system.",
      "intro": "I built Estética Agenda after noticing a need in my girlfriend’s daily routine. The project connects the experience of booking an appointment with the work of managing it.",
      "context": "The motivation came from a situation close to me, outside the classroom. I turned that need into a personal web development project with flows for clients, professionals and administrators.",
      "role": "I was the sole developer, implementing the interface and integrating the services used by the application.",
      "features": [
        {
          "title": "Step-by-step booking",
          "text": "Users select a professional, service, date and time. Availability takes service duration and occupied time slots into account."
        },
        {
          "title": "Role-specific workflows",
          "text": "Clients can view their bookings; professionals have an area for managing appointments, services and appointment status."
        },
        {
          "title": "Connecting interface and data",
          "text": "The application uses Next.js and React for the interface, with Supabase for authentication and data access."
        }
      ],
      "decision": "One technical aspect is availability calculation: the code divides the day into 15-minute slots and uses service duration to filter available times. This is a business rule that goes beyond displaying a calendar.",
      "status": "The application has a public demo. This study describes features found in the code; usage and time-saving metrics are not available yet.",
      "next": "Future evaluation could measure booking time, observe usability issues and test cancellations and simultaneous booking attempts.",
      "images": [
        {
          "src": "projects/cases/estetica-home.png",
          "alt": "Public Thamyres Ribeiro clinic page with a booking entry point",
          "caption": "Application entry: introducing the clinic and the booking flow."
        },
        {
          "src": "projects/cases/estetica-login.png",
          "alt": "Public Estética Agenda account login screen",
          "caption": "Account access: an entry point to the system’s workflows."
        }
      ],
      "imageNote": "Screenshots show the public Portuguese interface. Client data is not exposed."
    }
  },
  "desapego": {
    "name": "Desapego",
    "code": "https://github.com/JoaoPOPaulino/desapego_app",
    "tags": [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Cloud Firestore",
      "Gemini API"
    ],
    "pt": {
      "type": "Aplicativo mobile · Projeto acadêmico individual",
      "headline": "Um projeto de sala de aula para dar novos destinos a itens usados.",
      "intro": "Criei o Desapego sozinho para a disciplina de Desenvolvimento Mobile II. A proposta é permitir que pessoas publiquem e encontrem itens usados para venda ou doação.",
      "context": "O projeto nasceu como uma oportunidade de aplicar desenvolvimento mobile em um fluxo completo: acessar uma conta, explorar anúncios e cadastrar um item com suas informações.",
      "role": "Fui o único desenvolvedor do aplicativo, trabalhando nas telas em Flutter e nas integrações necessárias para contas e anúncios.",
      "features": [
        {
          "title": "Exploração de anúncios",
          "text": "Os itens podem ser encontrados por busca e categoria. Cada anúncio reúne descrição, preço ou indicação de doação, estado de conservação e informações de contato."
        },
        {
          "title": "Cadastro de itens",
          "text": "O formulário reúne imagem, categoria, descrição, valor e contato. O aplicativo também tem uma área para os anúncios do usuário."
        },
        {
          "title": "Integrações",
          "text": "O código usa Firebase Authentication e Cloud Firestore. Há uma integração com Gemini para sugerir categoria, descrição e preço, que depende de configuração para funcionar."
        }
      ],
      "decision": "O código separa telas, controlador, serviços e modelos. A busca combina o texto digitado com a categoria selecionada; o tratamento de imagens inclui limites de tamanho e compressão no fluxo mobile.",
      "status": "Projeto acadêmico com código disponível. As imagens mostram telas reais renderizadas localmente com dados de demonstração, sem publicar anúncios. A integração com IA não foi acionada nesta prévia.",
      "next": "Antes de disponibilizar o app ao público, os próximos passos incluem validar permissões dos dados, proteger a integração com IA em um serviço no servidor e testar os fluxos em dispositivos Android.",
      "images": [
        {
          "src": "projects/cases/desapego-login.png",
          "alt": "Tela de login do aplicativo Desapego",
          "caption": "Entrada do aplicativo: acesso à conta e opção de cadastro."
        },
        {
          "src": "projects/cases/desapego-detail.png",
          "alt": "Detalhes de um notebook fictício anunciado no Desapego",
          "caption": "Detalhes do item: imagem, valor e descrição com dados de demonstração."
        }
      ],
      "imageNote": "Telas do código Flutter em prévia local. Os dados do anúncio são fictícios."
    },
    "en": {
      "type": "Mobile application · Solo academic project",
      "headline": "A classroom project to give used items a new home.",
      "intro": "I built Desapego on my own for the Mobile Development II course. The idea is to let people list and discover used items for sale or donation.",
      "context": "The project was an opportunity to apply mobile development to a complete flow: accessing an account, exploring listings and adding an item with its details.",
      "role": "I was the sole app developer, building the Flutter screens and the integrations for accounts and listings.",
      "features": [
        {
          "title": "Exploring listings",
          "text": "Items can be found by search and category. Each listing includes a description, price or donation label, condition and contact details."
        },
        {
          "title": "Adding items",
          "text": "The form includes an image, category, description, price and contact details. The app also has an area for the user’s own listings."
        },
        {
          "title": "Integrations",
          "text": "The code uses Firebase Authentication and Cloud Firestore. A Gemini integration suggests a category, description and price; it requires configuration to work."
        }
      ],
      "decision": "The code separates screens, a controller, services and models. Search combines typed text with the selected category; image handling includes size limits and compression in the mobile flow.",
      "status": "An academic project with source code available. The images show actual screens rendered locally with sample data, without publishing listings. The AI integration was not used in this preview.",
      "next": "Before a public release, next steps include validating data permissions, protecting the AI integration through a server-side service and testing the flows on Android devices.",
      "images": [
        {
          "src": "projects/cases/desapego-login.png",
          "alt": "Desapego app login screen",
          "caption": "App entry: account access and a sign-up option."
        },
        {
          "src": "projects/cases/desapego-detail.png",
          "alt": "Details of a sample laptop listing in Desapego",
          "caption": "Item details: image, price and description using sample data."
        }
      ],
      "imageNote": "Flutter screens rendered locally in Portuguese. The listing uses fictional data."
    }
  }
} as const;
