<h1 align="center">
  <img width="40" alt="logo" src="public/favicon.png" />
  <br/>
  <p>Daniel Verissimo — Portfólio</p>
  <p>
    <img src="https://img.shields.io/github/last-commit/DanielVerissimo1/daniel-portifolio?style=for-the-badge&logo=git&logoColor=white&color=6366f1" alt="Last Commit">
    <img src="https://img.shields.io/github/languages/top/DanielVerissimo1/daniel-portifolio?style=for-the-badge&color=6366f1" alt="Top Language">
    <img src="https://img.shields.io/github/languages/count/DanielVerissimo1/daniel-portifolio?style=for-the-badge&color=6366f1" alt="Languages Count">
  </p>
</h1>

**Daniel Verissimo — Portfólio** é uma aplicação web pessoal desenvolvida com **Next.js 15** e **TypeScript**, com foco em apresentar projetos, habilidades e experiências de forma moderna, responsiva e animada.

---

## 📸 Visualização do Projeto

<p align="center">
  <img alt="preview" src="public/thambnail.png" style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-width: 80%;">
</p>

---

## 🚀 Funcionalidades

| Funcionalidade | Descrição |
|----------------|-----------|
| 🎨 **Hero Section** | Apresentação com animações AOS e links para redes sociais |
| 🧑‍💻 **Sobre mim** | Seção com informações pessoais e profissionais |
| 🗂️ **Portfólio** | Galeria de projetos com detalhes, tecnologias e links |
| 🏆 **Certificados** | Exibição de certificações obtidas |
| 📬 **Contato** | Formulário de contato com SweetAlert2 |
| 📄 **Download CV** | Download direto do currículo em PDF |
| 🔍 **SEO Otimizado** | Metadados configurados para melhor indexação |

---

## 🛠️ Tecnologias Utilizadas

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black" alt="GSAP">
  <img src="https://img.shields.io/badge/Framer_Motion-EF0082?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion">
  <img src="https://img.shields.io/badge/AOS-6366f1?style=for-the-badge&logoColor=white" alt="AOS">
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
</div>

---

## 📚 Conceitos Aplicados

- Next.js 15 com App Router
- TypeScript com tipagem estrita
- Animações com GSAP, Framer Motion e AOS
- Componentização e separação de responsabilidades
- Roteamento dinâmico com `[slug]` para detalhes de projetos
- Tailwind CSS com design responsivo
- Otimização de imagens com `next/image`
- SEO com metadados no `layout.tsx`

---

## ▶️ Como Rodar o Projeto

Após clonar o repositório, siga os passos abaixo:

```bash
# Instalar as dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev

# Gerar o build de produção
npm run build

# Iniciar em modo produção
npm start
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## 📁 Arquitetura do Projeto

```
daniel-portifolio/
│
├── public/
│   ├── certificates/          # Imagens dos certificados
│   ├── profile/               # Fotos de perfil
│   ├── projects/              # Thumbnails dos projetos
│   ├── tech-stack/            # Ícones das tecnologias
│   ├── favicon.png
│   ├── thambnail.png
│   └── Currículo - Daniel Verissimo.pdf
│
├── src/
│   ├── app/
│   │   ├── project/
│   │   │   └── [slug]/        # Página dinâmica de detalhes do projeto
│   │   ├── globals.css
│   │   ├── layout.tsx         # Layout raiz com metadados SEO
│   │   └── page.tsx           # Entry point da aplicação
│   │
│   ├── components/
│   │   ├── ProjectDetails/    # Componentes da página de detalhes
│   │   │   ├── AnimatedBackground.tsx
│   │   │   ├── FeatureItem.tsx
│   │   │   ├── ProjectActions.tsx
│   │   │   ├── ProjectFeatures.tsx
│   │   │   ├── ProjectHeader.tsx
│   │   │   ├── ProjectImage.tsx
│   │   │   ├── ProjectStats.tsx
│   │   │   ├── ProjectTechStack.tsx
│   │   │   └── TechBadge.tsx
│   │   ├── About.tsx          # Seção sobre mim
│   │   ├── AnimatedBackground.tsx
│   │   ├── CardProject.tsx    # Card de projeto
│   │   ├── Certificate.tsx    # Seção de certificados
│   │   ├── ClientWrapper.tsx
│   │   ├── Contact.tsx        # Seção de contato
│   │   ├── ContactForm.tsx    # Formulário de contato
│   │   ├── Footer.tsx
│   │   ├── NavBar.tsx
│   │   ├── Portofolio.tsx     # Seção de portfólio
│   │   ├── SocialLinks.tsx
│   │   ├── TechStackIcon.tsx
│   │   └── WelcomeScreen.tsx  # Hero section com animações AOS
│   │
│   ├── data/
│   │   ├── About.ts           # Dados da seção sobre mim
│   │   ├── Certificado.ts     # Dados dos certificados
│   │   ├── Projetos.ts        # Dados dos projetos
│   │   ├── SocialLinks.ts     # Links das redes sociais
│   │   └── Stack.ts           # Stack de tecnologias
│   │
│   └── lib/
│       ├── slug.ts            # Utilitário de geração de slug
│       └── utils.ts
│
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 👨‍💻 Autor

<p align="center">
  <img src="public/profile/img-Daniel.png" width="100" style="border-radius: 50%;" alt="Daniel Verissimo"/>
  <br/>
  <strong>Daniel Verissimo</strong>
  <br/>
  Desenvolvedor Front-End
</p>

<p align="center">
  <a href="https://linkedin.com/in/daniel-verissimo">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://github.com/DanielVerissimo1">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://daniel-verissimodev.vercel.app/">
    <img src="https://img.shields.io/badge/Portfólio-6366f1?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfólio">
  </a>
  <a href="mailto:danielsantoss1300@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail">
  </a>
</p>

---

<p align="center">Feito com 💜 por <strong>Daniel Verissimo</strong></p>
