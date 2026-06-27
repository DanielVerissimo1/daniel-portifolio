export interface Project {
  id: number;
  Img: string;
  Title: string;
  Description: string;
  Link: string;
  stacks: string[];
  Github?: string;
  TechStack: string[];
  Features: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    Img: "/projects/topic.png",
    Title: "Topic - Plataforma de inovação aberta",
    Description: "Desenvolvi a interface completa de uma plataforma de inovaçao aberta TOPIC para a Ninna Hub,uma solução de inovação aberta voltada para corporações, em colaboração com Amontada Valley.",
    Link: "https://plataforma-inovacao-aberta.vercel.app/",
    stacks: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    Github: "https://github.com/DanielVerissimo1/plataforma-inovacao-squad03-front-end",
    TechStack: ["React", "TypeScript", "Tailwind CSS", "Next.js", "PostgreSQL", "Node.js", "NestJS"],
    Features: [
      "Desenvolvimento da interface completa da plataforma de inovação aberta TOPIC para a Ninna Hub em Parceria com a Pague Menos, em colaboração com a Amontada Valley.",
      "Implementação de funcionalidades essenciais para gestão de desafios, captação de ideias e match entre startups e corporações, criando uma experiência intuitiva, responsiva.",
      "Desenvolvimento de dashboards adaptados à segregação de usuários, com visualizações e permissões ajustadas a diferentes perfis de acesso.",
      "Implementação de exportação de arquivos e geração de relatórios, apoiando a análise de resultados e a tomada de decisão.",
     
    ]
  },
  {
    id: 2,
    Img: "/projects/amotur.jpeg",
    Title: "Mapa interativo - AmoTur",
    Description: "Desenvolvido em colaboração com a Squad do Amontada Valley, este projeto foi criado para atender a uma demanda real da Associação de Turismo Amotur.",
    Link: "https://litormap.vercel.app/",
    stacks: ["React", "TypeScript", "Next.js", "React Leaflet"],
    Github: "Private",
    TechStack: ["React", "TypeScript", "Tailwind CSS", "Next.js", "PostgreSQL", "Node.js", "NestJS"],
    Features: [
      "Desenvolvimento de mapa interativo utilizando Leaflet, voltado à resolução de um problema real das regiões Praianas. A falta de Informações sobre os pontos turísticos e a dificuldade na promoção do turismo e dos comércios locais da região",
      "Coordenação da Squad CodeStack, definindo prioridades e orientando o desenvolvimento para garantir a entrega.",
      "Atuação direta com a Associação de Turismo de Amontada (AMOTUR) na coleta e alinhamento de requisitos técnicos às necessidades da comunidade local.",
      "Desenvolvimento de interfaces web funcionais e intuitivas, aplicando boas práticas de desenvolvimento e versionamento colaborativo com Git/GitHub, otimizando a experiência de moradores e visitantes."
    ]
  },
  {
    id: 3,
    Img: "/projects/cafearoma.jpeg",
    Title: "Site - Café Aroma",
    Description: "Site completo desenvolvido para o Café Aroma, com foco em navegação intuitiva, pedidos online, reserva de mesas e loja virtual.",
    Link: "https://danielsantoss1200.wixsite.com/my-site-1",
    stacks: ["Wix", "HTML", "CSS", "JavaScript"],
    Github: "Private",
    TechStack: ["Wix", "HTML", "CSS", "JavaScript","mySQL"],
    Features: [
      "Desenvolvi um site completo para a cafeteria Café Aroma utilizando tecnologias No-Code CMS, com foco em navegação intuitiva, pedidos online, reserva de mesas e loja virtual, aumentando o engajamento do cliente.",
      "Fui responsável pelo design UX/UI, criando uma experiência acolhedora e funcional que traduziu a identidade da marca, resultando em um aumento de 30% nas interações online.",
      "Implementei soluções que destacam o cuidado artesanal da cafeteria, por meio de uma comunicação sensorial e visual harmoniosa, melhorando a percepção da marca.",
    ]
  },
  {
    id: 4,
    Img: "/projects/portfolio.png",
    Title: "Portfólio Pessoal",
    Description: "Portfólio Pessoal desenvolvido para apresentar meus projetos, habilidades e experiências de forma clara e organizada. A aplicação conta com um design responsivo e moderno, permitindo que qualquer pessoa conheça meu trabalho de maneira intuitiva.",
    Link: "https://daniel-verissimodev.vercel.app/",
    stacks: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    Github: "https://github.com/DanielVerissimo1/daniel-portifolio",
    TechStack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    Features: [
      "Utilização de GSAP para criar animações suaves e performáticas, proporcionando uma experiência visual dinâmica durante a navegação.",
      "Seção de projetos, apresentando detalhes de cada projeto, tecnologias utilizadas e links para repositórios e demonstrações, facilitando a compreensão do meu trabalho.",
      "seção de Contato com Formulários e Links para Redes Sociais.",
      "SEO Otimizado"
    ]
  },
  {
    id: 5,
    Img: "/projects/github.png",
    Title: "GitHub Explorer",
    Description: "GitHub Explorer é uma aplicação que permite pesquisar repositórios e perfis do GitHub de forma rápida e intuitiva. Com ele, é possível visualizar informações detalhadas dos projetos, conferir o perfil dos desenvolvedores e explorar conteúdos diretamente pela interface da aplicação.",
    Link: "https://explorerepositorios.vercel.app/",
    stacks: ["React", "TypeScript", "Tailwind CSS", "Vercel", "API GitHub"],
    Github: "https://github.com/DanielVerissimo1/explorerepositorios",
    TechStack: ["React", "TypeScript", "Tailwind CSS", "Vercel", "API GitHub"],
    Features: [
       "Implementação de um sistema de busca de repositórios e usuários utilizando a API pública do GitHub, permitindo consultar informações em tempo real diretamente da plataforma.",
      "Exibição detalhada de dados dos repositórios, incluindo número de estrelas, forks, linguagem principal utilizada e descrição do projeto, facilitando a análise rápida das informações.",
      "Visualização de perfis de desenvolvedores com dados relevantes como avatar, biografia, número de seguidores e repositórios públicos, proporcionando uma navegação completa pelo ecossistema do GitHub.",
      "Construção de uma interface moderna e responsiva utilizando React e Tailwind CSS, garantindo uma experiência fluida em diferentes dispositivos."
    ]
  },
  {
    id: 6,
    Img: "/projects/todo.png",
    Title: "To-Do List",
    Description: "To-Do List é uma aplicação simples e eficiente para organizar tarefas diárias. Desenvolvida com foco em praticidade, ela armazena os dados diretamente no navegador utilizando localStorage, garantindo que as tarefas sejam salvas mesmo após fechar a página.",
    Link: "https://to-do-list-kappa-jet.vercel.app/",
    stacks: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    Github: "https://github.com/DanielVerissimo1/ToDoList",
    TechStack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    Features: [
      "Implementação de um sistema de gerenciamento de tarefas que permite criar, concluir e remover atividades de forma simples e intuitiva.",

      "Persistência de dados no navegador utilizando a API de armazenamento local (localStorage), garantindo que as tarefas permaneçam salvas mesmo após o fechamento da página.",

      "Atualização dinâmica da interface com manipulação de estados utilizando React, proporcionando uma experiência fluida e responsiva para o usuário.",
    ]
  },
];