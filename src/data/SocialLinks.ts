import {
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';

export interface SocialLink {
  name: string;
  displayName: string;
  subText: string;
  icon: React.ElementType;
  url: string;
  color: string;
  gradient: string;
  isPrimary?: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    displayName: "LinkedIn",
    subText: "Vamos conectar",
    icon: Linkedin,
    url: "https://linkedin.com/in/daniel-verissimo",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true,
  },
  {
    name: "WhatsApp",
    displayName: "WhatsApp",
    subText: "Mande uma mensagem",
    icon: FaWhatsapp,
    url: "https://wa.me/5588988083571",
    color: "#25D366",
    gradient: "from-[#25D366] to-[#128C7E]",
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@daniel.verissimo1",
    icon: Instagram,
    url: "https://www.instagram.com/daniel.verissimo1/",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  },
  {
    name: "GitHub",
    displayName: "GitHub",
    subText: "DanielVerissimo1",
    icon: Github,
    url: "https://github.com/DanielVerissimo1",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
];
