import Image from "next/image";

interface ProjectImageProps {
  src: string;
  alt: string;
}

export const ProjectImage = ({ src, alt }: ProjectImageProps) => {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        className="w-full object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-colors duration-300 rounded-2xl" />
    </div>
  );
};
