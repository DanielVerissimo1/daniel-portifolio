import { Star } from "lucide-react";
import { FeatureItem } from "./FeatureItem";

interface ProjectFeaturesProps {
  features: string[];
}

export const ProjectFeatures = ({ features }: ProjectFeaturesProps) => {
  return (
    <div className="bg-white/[0.04] backdrop-blur-xl rounded-2xl p-8 border border-white/15 space-y-6 hover:border-white/30 transition-colors duration-300 group">
      <h3 className="text-xl font-semibold text-white/90 flex items-center gap-3">
        <Star className="w-5 h-5 text-yellow-400 group-hover:rotate-[20deg] transition-transform duration-300" />
        Recursos Principais
      </h3>
      {features.length > 0 ? (
        <ul className="list-none space-y-2">
          {features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 opacity-50">Nenhum recurso adicionado.</p>
      )}
    </div>
  );
};
