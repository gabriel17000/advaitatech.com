import { motion } from 'framer-motion';
import { BarChart3, ShieldCheck, Sparkles, TrendingUp, Zap } from 'lucide-react';

const items = [
  'Arquitetura moderna',
  'Segurança desde o início',
  'Soluções escaláveis',
  'Clareza na entrega',
  'Performance',
  'Tecnologia alinhada ao negócio',
];

export default function About() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-sm uppercase tracking-[0.35em] text-orange">Por que a Advaita Tech</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Conectamos tecnologia, estratégia e execução para entregar valor real.</h2>
        <p className="mt-6 max-w-xl text-base leading-8 text-gray-300">
          A Advaita Tech cria soluções digitais com foco em performance, segurança e escalabilidade, conectando tecnologia, estratégia e execução para entregar valor real aos negócios.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-[#111115] p-4 text-sm text-gray-300">
              <span className="block font-semibold text-white">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card/80 p-8 shadow-glow">
          <div className="absolute right-6 top-6 rounded-full border border-orange/20 bg-orange/10 p-3 text-orange">
            <Sparkles size={20} />
          </div>
          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-white/10 bg-[#101014] p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-400">Painel de controle</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">Visão operacional em um só lugar</h3>
                </div>
                <BarChart3 size={32} className="text-orange" />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-black/60 p-4 text-sm text-gray-300">Uso de dados em tempo real.</div>
                <div className="rounded-3xl bg-black/60 p-4 text-sm text-gray-300">Métricas e segurança alinhadas.</div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-[#101014] p-6">
                <div className="flex items-center gap-3 text-orange">
                  <ShieldCheck size={20} />
                  <p className="font-semibold text-white">Proteção nativa</p>
                </div>
                <p className="mt-4 text-sm text-gray-300">Estratégias de segurança desde o design até a operação.</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-[#101014] p-6">
                <div className="flex items-center gap-3 text-orange">
                  <TrendingUp size={20} />
                  <p className="font-semibold text-white">Performance consistente</p>
                </div>
                <p className="mt-4 text-sm text-gray-300">Arquiteturas otimizadas para crescimento e estabilidade.</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-sm text-gray-300">
            <Zap size={18} className="text-orange" /> Estratégia orientada por resultados
          </div>
        </div>
      </motion.div>
    </div>
  );
}
