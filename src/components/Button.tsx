import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

type ButtonProps = Omit<React.ComponentPropsWithoutRef<typeof motion.button>, 'children'> & {
  variant?: 'primary' | 'ghost';
  icon?: ReactNode;
  children?: ReactNode;
};

const variantClasses = {
  primary: 'bg-orange text-black hover:bg-orange-light',
  ghost: 'border border-white/10 text-white hover:border-orange hover:text-orange',
};

export default function Button({ variant = 'primary', icon, children, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${variantClasses[variant]}`}
      {...props}
    >
      {icon}
      {children}
    </motion.button>
  );
}
