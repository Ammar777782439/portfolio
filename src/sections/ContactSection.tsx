import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 md:py-44"
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <p className="text-gold text-[10px] tracking-[0.3em] uppercase mb-6">
            Get in Touch
          </p>
          <h2
            ref={headingRef}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-cream tracking-tight mb-6 opacity-0"
          >
            Let's Build
            <br />
            <span className="text-gold">Something Great</span>
          </h2>
        </div>

        <div ref={contentRef} className="max-w-xl mx-auto text-center opacity-0">
          <p className="text-stone-400 text-base md:text-lg leading-relaxed mb-10">
            Open for backend engineering opportunities, collaborations, and
            consulting. Let's discuss how we can build scalable systems together.
          </p>

          {/* Email */}
          <a
            href="mailto:ammarragha@gmail.com"
            className="inline-flex items-center gap-3 text-gold text-lg md:text-xl font-medium hover:underline mb-12 transition-colors"
          >
            <Mail size={20} />
            ammarragha@gmail.com
          </a>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/Ammar777782439"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 border border-[#292524] text-stone-400 text-sm transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <Github size={16} />
              GitHub
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://linkedin.com/in/ammar-rajeh-902048255"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 border border-[#292524] text-stone-400 text-sm transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <Linkedin size={16} />
              LinkedIn
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 pt-10 border-t border-[#1C1917]">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-700 text-xs tracking-wider">
            &copy; 2025 Ammar Rajeh
          </p>
          <p className="text-stone-700 text-xs tracking-wider">
            Backend Engineer
          </p>
        </div>
      </footer>
    </section>
  );
}
