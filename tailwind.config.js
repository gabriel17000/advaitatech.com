export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#050505',
        dark: '#0b0b0d',
        card: '#131316',
        white: '#f5f5f5',
        gray: '#a3a3a3',
        orange: '#ff6a00',
        'orange-light': '#ff8a1f',
      },
      boxShadow: {
        glow: '0 0 60px rgba(255, 106, 0, 0.18)',
      },
      backgroundImage: {
        'radial-grid': 'radial-gradient(circle at top right, rgba(255,106,0,0.12), transparent 28%), radial-gradient(circle at bottom left, rgba(255,106,0,0.08), transparent 25%)',
      },
    },
  },
  plugins: [],
};
