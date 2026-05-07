import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

type FooterProps = {
  onNavigate: (section: 'solutions' | 'contact') => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-6 py-14 text-gray-300 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <img src="/assets/advaita-logo.png" alt="Advaita Tech" className="h-10 w-auto object-contain" />
            <div>
              <p className="text-lg font-semibold text-white">Advaita Tech</p>
              <p className="text-sm text-gray-400">Soluções de TI seguras, escaláveis e orientadas para valor.</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-6 text-gray-400">
            Marca oficial da Advaita Tech aplicada em toda a experiência digital, do header à hero e ao rodapé.
          </p>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <Mail size={16} /> contato@advaitatech.com
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <MapPin size={16} /> São Paulo, Brasil
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange">Navegação</p>
          <div className="grid gap-3 text-sm text-gray-300">
            <button type="button" onClick={() => onNavigate('solutions')} className="text-left transition hover:text-white">
              Soluções
            </button>
            <button type="button" onClick={() => onNavigate('contact')} className="text-left transition hover:text-white">
              Contato
            </button>
            <a href="#about" className="transition hover:text-white">
              Sobre
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projetos
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange">Serviços</p>
          <div className="grid gap-3 text-sm text-gray-300">
            <span>Desenvolvimento Web</span>
            <span>APIs e integrações</span>
            <span>Cloud e infraestrutura</span>
            <span>Segurança digital</span>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <a href="#" className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-orange hover:text-orange">
              <Github size={18} />
            </a>
            <a href="#" className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-orange hover:text-orange">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
