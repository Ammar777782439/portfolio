import { useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import SkillsSection from '@/sections/SkillsSection';
import ExperienceSection from '@/sections/ExperienceSection';
import ContactSection from '@/sections/ContactSection';

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    let lenis: any = null;
    let raf: number;

    async function initLenis() {
      const Lenis = (await import('@studio-freight/lenis')).default;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function onRaf(time: number) {
        lenis.raf(time);
        raf = requestAnimationFrame(onRaf);
      }
      raf = requestAnimationFrame(onRaf);
    }

    initLenis();

    return () => {
      if (lenis) lenis.destroy();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative min-h-[100dvh] bg-[#050505]">
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <div className="bg-[#050505]/90 backdrop-blur-sm">
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}

export default App;
