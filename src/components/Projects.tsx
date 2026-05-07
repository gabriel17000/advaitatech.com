import { motion } from 'framer-motion';
import { Activity, Layers, ShieldCheck, TrendingUp } from 'lucide-react';

const projects = [
  { title: 'Plataforma empresarial escalável', label: 'Arquitetura sólida para crescimento contínuo.' },
  { title: 'Automação de processos internos', label: 'Fluxos eficientes que reduzem retrabalho.' },
  { title: 'Painel de dados e indicadores', label: 'Decisões governadas por informações precisas.' },
  { title: 'Integrações entre sistemas', label: 'Sincronização segura e transparente.' },
];

const metrics = [
  { title: 'Alta disponibilidade', value: '>= 99,9%' },
  { title: 'Redução de retrabalho', value: '35% menos tempo desperdiçado' },
  { title: 'Mais controle operacional', value: 'Dashboards em tempo real' },
  { title: 'Melhor experiência digital', value: 'Usuários mais satisfeitos' },
];

export default function Projects() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-card/75 p-8 shadow-glow">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-orange">Projetos conceituais</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Casos que representam possibilidades sólidas.</h2>
          <p className="mt-6 max-w-xl text-sm text-gray-300">
            Exemplos de iniciativas construídas para gerar escala, reduzir complexidade e entregar controle real aos negócios.
          </p>
          <div className="mt-10 grid gap-4">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ x: 6 }}
                className="rounded-3xl border border-white/10 bg-[#111115] p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-3xl bg-orange/10 text-orange">
                  <Activity size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm text-gray-300">{project.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {metrics.map((metric, index) => {
            const icons = [<Layers key="layers" />, <ShieldCheck key="shield" />, <TrendingUp key="trending" />, <Activity key="activity" />];
            return (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-[#111115] p-6"
              >
                <div className="mb-4 flex items-center gap-3 text-orange">{icons[index]}</div>
                <p className="text-lg font-semibold text-white">{metric.value}</p>
                <p className="mt-2 text-sm text-gray-300">{metric.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
