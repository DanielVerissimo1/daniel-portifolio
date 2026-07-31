import Image from "next/image";
import { Globe, Layout, Code, Package, Database, Server, LucideIcon } from "lucide-react";

const TECH_ICONS: Record<string, LucideIcon> = {
  React: Globe,
  "React Native": Globe,
  "Next.js": Globe,
  "Tailwind CSS": Layout,
  Tailwind: Layout,
  Express: Server,
  "Node.js": Server,
  Python: Code,
  Javascript: Code,
  TypeScript: Code,
  HTML: Code,
  CSS: Code,
  Wix: Layout,
  Vercel: Server,
  "API GitHub": Database,
  "React Query": Database,
  "React Leaflet": Globe,
  default: Package,
};

const TECH_LOGOS: Record<string, string> = {
  React: "/tech-stack/reactjs.svg",
  "React Native": "/tech-stack/react-native.svg",
  "Next.js": "/tech-stack/next.svg",
  "Tailwind CSS": "/tech-stack/tailwind.svg",
  Tailwind: "/tech-stack/tailwind.svg",
  TypeScript: "/tech-stack/typescript.svg",
  Vercel: "/tech-stack/vercel.svg",
};

export const TechBadge = ({ tech }: { tech: string }) => {
  const Icon = TECH_ICONS[tech] || TECH_ICONS["default"];
  const logo = TECH_LOGOS[tech];

  return (
    <div className="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-[#cbacf9]/10 rounded-xl border border-[#cbacf9]/15 hover:border-[#cbacf9]/35 transition-all duration-300 cursor-default">
      <div className="absolute inset-0 bg-[#cbacf9]/0 group-hover:bg-[#cbacf9]/5 transition-all duration-500" />
      <div className="relative flex items-center gap-1.5 md:gap-2">
        {logo ? (
          <Image
            src={logo}
            alt={`${tech} logo`}
            width={18}
            height={18}
            className="h-4 w-4 object-contain md:h-[18px] md:w-[18px]"
          />
        ) : (
          <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#cbacf9] transition-colors" />
        )}
        <span className="text-xs md:text-sm font-medium text-[#cbacf9] transition-colors">
          {tech}
        </span>
      </div>
    </div>
  );
};
