export interface Project {
  id: number;
  Img: string;
  Title: string;
  Description: string;
  Link: string;
  stacks: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    Img: "/projects/topic.png",
    Title: "Topic - Plataforma de inovação aberta",
    Description: "Desenvolvi a interface completa de uma plataforma de inovaçao aberta TOPIC para a Ninna Hub,uma solução de inovação aberta voltada para corporações, em colaboração com Amontada Valley.",
    Link: "https://plataforma-inovacao-aberta.vercel.app/",
    stacks: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    id: 2,
    Img: "/projects/amotur.jpeg",
    Title: "Mapa interativo - AmoTur",
    Description: "Desenvolvido em colaboração com a Squad do Amontada Valley, este projeto foi criado para atender a uma demanda real da Associação de Turismo Amotur.",
    Link: "https://amotur-k1qt.vercel.app/",
    stacks: ["React", "TypeScript", "Next.js", "React Leaflet"]
  },
  {
    id: 3,
    Img: "/projects/cafearoma.jpeg",
    Title: "Site - Café Aroma",
    Description: "Site completo desenvolvido para o Café Aroma, com foco em navegação intuitiva, pedidos online, reserva de mesas e loja virtual.",
    Link: "https://danielsantoss1200.wixsite.com/my-site-1",
    stacks: ["Wix", "HTML", "CSS", "JavaScript"]
  },
  {
    id: 4,
    Img: "/projects/portfolio.png",
    Title: "Portfólio Pessoal",
    Description: "Portfólio Pessoal desenvolvido para apresentar meus projetos, habilidades e experiências de forma clara e organizada. A aplicação conta com um design responsivo e moderno, permitindo que qualquer pessoa conheça meu trabalho de maneira intuitiva.",
    Link: "https://daniel-verissimodev.vercel.app/",
    stacks: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"]
  },
  {
    id: 5,
    Img: "/projects/github.png",
    Title: "GitHub Explorer",
    Description: "GitHub Explorer é uma aplicação que permite pesquisar repositórios e perfis do GitHub de forma rápida e intuitiva. Com ele, é possível visualizar informações detalhadas dos projetos, conferir o perfil dos desenvolvedores e explorar conteúdos diretamente pela interface da aplicação.",
    Link: "https://explorerepositorios.vercel.app/",
    stacks: ["React", "TypeScript", "Tailwind CSS", "Vercel", "API GitHub"]
  },
  {
    id: 6,
    Img: "/projects/briso.png",
    Title: "Brisô Delivery",
    Description: "Brisô Delivery é uma plataforma que conecta moradores e turistas de Icaraí de Amontada a comércios e serviços locais. Criado para resolver a dificuldade de encontrar entregas e estabelecimentos, antes feitos apenas por indicações informais.",
    Link: "https://briso-delivery.vercel.app/",
    stacks: ["React", "TypeScript", "Tailwind CSS", "Vercel"]
  },
  {
    id: 7,
    Img: "/projects/todo.png",
    Title: "To-Do List",
    Description: "To-Do List é uma aplicação simples e eficiente para organizar tarefas diárias. Desenvolvida com foco em praticidade, ela armazena os dados diretamente no navegador utilizando localStorage, garantindo que as tarefas sejam salvas mesmo após fechar a página.",
    Link: "https://to-do-list-kappa-jet.vercel.app/",
    stacks: ["React", "TypeScript", "Tailwind CSS", "Vercel"]
  },
  {
    id: 8,
    Img: "/projects/rio.jpeg",
    Title: "Landing Page - Projeto Rio Aracatiaçu",
    Description: "Landing page desenvolvida para o projeto Rio Aracatiaçu: Passado e Futuro Sustentável, apresentada no Ceará Científico 2025. A proposta uniu design, educação ambiental e engajamento comunitário para promover a preservação do rio em Amontada-CE.",
    Link: "https://rio-aracatia-u.vercel.app/",
    stacks: ["React", "TypeScript", "Tailwind CSS", "Vercel"]
  }
];