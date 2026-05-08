import { motion } from 'framer-motion';
import { ArrowRight, Menu } from 'lucide-react';

type HeaderProps = {
  onNavigate: (section: 'solutions' | 'contact') => void;
};

const navItems = [
  { label: 'Início', target: '#inicio' },
  { label: 'Soluções', target: '#solutions' },
  { label: 'Sobre', target: '#about' },
  { label: 'Projetos', target: '#projects' },
  { label: 'Contato', target: '#contact' },
];

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-white">
          <img
            src="/assets/at-logo.png"
            alt="Advaita Tech"
            className="h-10 w-auto object-contain"
          />
          Advaita Tech
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.target} className="text-sm text-gray-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="hidden items-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-light lg:inline-flex"
          >
            Falar com especialista
            <ArrowRight size={16} />
          </button>
          <button type="button" className="inline-flex items-center justify-center rounded-full border border-white/10 p-3 text-white lg:hidden">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
