import { useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { services, type ServiceCard } from './data/services';

function App() {
  const solutionsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);

  const handleScroll = (section: 'solutions' | 'contact') => {
    const element = section === 'solutions' ? solutionsRef.current : contactRef.current;
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleCloseModal = () => setSelectedService(null);

  const serviceDetails = useMemo(
    () => selectedService,
    [selectedService],
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onNavigate={handleScroll} />

      <main className="relative overflow-hidden">
        <Hero onNavigate={handleScroll} />
        <section className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8">
          <TechStack />
        </section>
        <section id="solutions" ref={solutionsRef} className="mx-auto max-w-7xl px-6 pb-16 sm:px-8">
          <Services onSelect={setSelectedService} />
        </section>
        <section id="about" className="mx-auto max-w-7xl px-6 pb-16 sm:px-8">
          <About />
        </section>
        <section id="projects" className="mx-auto max-w-7xl px-6 pb-16 sm:px-8">
          <Projects />
        </section>
        <section id="contact" ref={contactRef} className="mx-auto max-w-7xl px-6 pb-16 sm:px-8">
          <Contact />
        </section>
        <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8">
          <div className="rounded-3xl border border-white/10 bg-card/70 p-10 shadow-glow backdrop-blur-xl">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-orange">Experiência digital premium</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Vamos construir soluções digitais com performance, segurança e propósito.
                </h2>
              </div>
              <button
                type="button"
                onClick={() => handleScroll('contact')}
                className="inline-flex items-center justify-center rounded-full bg-orange px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-light"
              >
                Falar com especialista
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={handleScroll} />

      <AnimatePresence>
        {serviceDetails && (
          <Modal onClose={handleCloseModal} title={serviceDetails.title} highlight={serviceDetails.highlight}>
            <p className="text-gray-300">{serviceDetails.description}</p>
            <p className="mt-4 text-white">{serviceDetails.details}</p>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
