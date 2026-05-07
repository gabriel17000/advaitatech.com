import { motion } from 'framer-motion';
import { Cloud, Database, Layers, Shield, Server } from 'lucide-react';

const stacks = [
  { name: 'AWS', icon: Cloud },
  { name: 'Google Cloud', icon: Database },
  { name: 'Docker', icon: Server },
  { name: 'GitHub', icon: Layers },
  { name: 'Cloudflare', icon: Shield },
  { name: 'Azure', icon: Cloud },
  { name: 'Kubernetes', icon: Server },
  { name: 'Node.js', icon: Layers },
  { name: 'React', icon: Cloud },
];

export default function TechStack() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-card/75 p-8 shadow-glow">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-orange">Tecnologias</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Plataforma tecnológica preparada para o futuro.</h2>
        </div>
        <span className="rounded-full border border-orange/20 bg-orange/10 px-4 py-2 text-sm text-orange">Enterprise grade</span>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stacks.map((stack) => {
          const Icon = stack.icon;
          return (
            <motion.div
              key={stack.name}
              whileHover={{ y: -4 }}
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-black/70 p-5 transition"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange/10 text-orange">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-base font-semibold text-white">{stack.name}</p>
                <p className="text-sm text-gray-400">Infraestrutura moderna.</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
