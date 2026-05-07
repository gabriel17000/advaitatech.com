import { motion } from 'framer-motion';
import { ArrowRight, Cpu, GitBranch, Layers, Lock, Monitor, Zap } from 'lucide-react';
import { services } from '../data/services';

type ServicesProps = {
  onSelect: (service: (typeof services)[number]) => void;
};

const icons = {
  web: Monitor,
  custom: Layers,
  api: GitBranch,
  cloud: Cpu,
  security: Lock,
  automation: Zap,
};

export default function Services({ onSelect }: ServicesProps) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-card/75 p-8 shadow-glow">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-orange">Soluções</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Tecnologia aplicada a resultados reais.</h2>
        </div>
        <p className="max-w-xl text-sm text-gray-400 sm:text-right">Explore seis frentes estratégicas que combinam tecnologia, segurança e escalabilidade.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = icons[service.id as keyof typeof icons] || ArrowRight;
          return (
            <motion.button
              key={service.id}
              type="button"
              onClick={() => onSelect(service)}
              whileHover={{ y: -4 }}
              className="group flex h-full flex-col rounded-[2rem] border border-white/10 bg-[#111115] p-6 text-left transition hover:border-orange hover:bg-[#16161c]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-orange/10 text-orange">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-6 text-gray-400">{service.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange transition group-hover:text-orange-light">
                Ver detalhes <ArrowRight size={18} />
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
