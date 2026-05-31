import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 1, ease: 'power3.inOut' },
          '-=0.3'
        )
        .fromTo(
          nameRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.3'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  function scrollToAbout() {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToContact() {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <div className="relative z-10 text-center max-w-4xl">
        {/* Label */}
        <p
          ref={labelRef}
          className="font-display italic text-gold text-lg md:text-xl tracking-wider mb-6 opacity-0"
        >
          Backend Software Engineer
        </p>

        {/* Decorative line */}
        <div
          ref={lineRef}
          className="w-16 h-px bg-gold mx-auto mb-8 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Name */}
        <h1
          ref={nameRef}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-cream tracking-[-0.02em] leading-none mb-6 opacity-0"
        >
          Ammar
          <br />
          <span className="text-gold">Rajeh</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-stone-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed mb-10 opacity-0"
        >
          Scalable systems. Event-driven architectures.
          <br />
          High-performance backend engineering.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="flex items-center justify-center gap-6 opacity-0">
          <button
            onClick={scrollToAbout}
            className="group relative px-8 py-3 border border-gold text-gold text-sm tracking-[0.15em] uppercase font-medium overflow-hidden transition-colors duration-500 hover:text-[#050505]"
          >
            <span className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative">Explore</span>
          </button>
          <button
            onClick={scrollToContact}
            className="text-stone-500 text-sm tracking-[0.1em] uppercase hover:text-cream transition-colors duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-stone-600 text-[10px] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-stone-700 relative overflow-hidden">
          <div className="w-full h-4 bg-gold absolute top-0 animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(250%); }
        }
      `}</style>
    </section>
  );
}
