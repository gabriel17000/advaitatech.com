import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';

type ModalProps = {
  title: string;
  highlight: string;
  children: ReactNode;
  onClose: () => void;
};

export default function Modal({ title, highlight, children, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-full max-w-2xl rounded-3xl border border-white/10 bg-[#0f0f12] p-8 shadow-glow"
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-orange">Detalhes da solução</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-400">{highlight}</p>
            </div>
            <button type="button" onClick={onClose} className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:border-orange hover:text-white">
              <X size={20} />
            </button>
          </div>
          <div className="space-y-4">{children}</div>
          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/10 px-5 py-3 text-sm text-white transition hover:border-orange hover:text-orange"
            >
              Fechar
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
