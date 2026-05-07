import { motion } from 'framer-motion';
import Button from './Button';
import { Code, Sparkles, ShieldCheck } from 'lucide-react';

type HeroProps = {
  onNavigate: (section: 'solutions' | 'contact') => void;
};

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="inicio" className="relative overflow-hidden bg-black pb-20 pt-28 sm:pb-32">
      <div className="absolute inset-0 bg-radial-grid opacity-60" />
      <div className="absolute left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-orange/10 blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:justify-between sm:px-8">
        <div className="max-w-2xl space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
            <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">
              Design digital premium para soluções de TI que geram impacto.
            </h1>
            <p className="mt-6 max-w-xl text-base text-gray-300 sm:text-lg">
              A presença visual da Advaita Tech é construída em torno do logo oficial, com clareza, sofisticação e força corporativa.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button type="button" onClick={() => onNavigate('solutions')}>
                Nossas soluções
              </Button>
              <Button variant="ghost" type="button" onClick={() => onNavigate('contact')}>
                Agendar reunião
              </Button>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-card/80 p-6 text-sm text-gray-300 shadow-glow">
              <p className="font-semibold text-white">Marca oficial</p>
              <p className="mt-3">A identidade visual é guiada pela logo oficial enviada, sem recriações ou alterações.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-card/80 p-6 text-sm text-gray-300 shadow-glow">
              <p className="font-semibold text-white">Presença</p>
              <p className="mt-3">Visual premium com foco em tecnologia, confiança e execução em alto nível.</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-2xl flex items-center justify-center"
        >
          <div className="relative">
            {/* Blur atmosférico atrás da logo */}
            <div className="absolute inset-0 scale-125 rounded-full bg-orange/10 blur-3xl" />
            <div className="absolute inset-0 scale-110 rounded-full bg-white/5 blur-2xl" />

            {/* Elementos sutis de composição tecnológica */}
            <div className="absolute -top-6 -right-6 h-10 w-10 rounded-full border border-orange/20 bg-orange/10 blur-sm" />
            <div className="absolute -bottom-8 -left-8 h-8 w-8 rounded-full border border-white/10 bg-white/5 blur-sm" />
            <div className="absolute top-1/2 -right-12 w-20 h-px bg-gradient-to-r from-transparent to-orange/30" />
            <div className="absolute top-1/4 -left-12 w-16 h-px bg-gradient-to-r from-orange/20 to-transparent" />

            {/* Logo principal com presença dominante */}
            <img
              src="/assets/advaita-logo-transparent.png"
              alt="Advaita Tech"
              className="relative mx-auto h-64 w-auto object-contain sm:h-72 lg:h-80"
              style={{
                mixBlendMode: 'screen',
                filter: 'drop-shadow(0 0 40px rgba(255, 106, 0, 0.5)) drop-shadow(0 0 80px rgba(255, 255, 255, 0.3))'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
