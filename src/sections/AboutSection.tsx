import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

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
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
          },
        }
      );

      gsap.fromTo(
        bodyRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );

      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 55%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 md:py-44"
    >
      <div className="max-w-6xl mx-auto px-8">
        {/* Decorative line */}
        <div
          ref={lineRef}
          className="w-20 h-px bg-gold mb-12 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24">
          {/* Main content */}
          <div>
            <h2
              ref={headingRef}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream tracking-tight leading-tight mb-10 opacity-0"
            >
              Crafting Robust
              <br />
              <span className="text-gold">Backend Solutions</span>
            </h2>

            <div ref={bodyRef} className="space-y-6 opacity-0">
              <p className="text-stone-400 text-base md:text-lg leading-[1.8]">
                Backend Software Engineer with hands-on experience building scalable
                backend systems, REST APIs, and event-driven architectures. Deep
                expertise in distributed systems, message queues, caching, and
                performance optimization.
              </p>
              <p className="text-stone-400 text-base md:text-lg leading-[1.8]">
                Currently at <span className="text-cream font-medium">Deepsafer Company</span>,
                designing secure backend systems for cybersecurity applications. Achieved
                a <span className="text-gold font-medium">40% reduction</span> in database
                load and <span className="text-gold font-medium">50% improvement</span> in
                API response times through Redis caching, query optimization, and
                asynchronous processing.
              </p>
              <p className="text-stone-400 text-base md:text-lg leading-[1.8]">
                Passionate about system design and high-performance architectures.
                Always pushing the boundaries of what backend systems can achieve.
              </p>
            </div>
          </div>

          {/* Info sidebar */}
          <div ref={infoRef} className="opacity-0">
            <div className="border-l border-[#1C1917] pl-8 space-y-8">
              <div>
                <p className="text-stone-600 text-[10px] tracking-[0.2em] uppercase mb-2">
                  Location
                </p>
                <p className="text-cream font-medium">Yemen</p>
              </div>
              <div>
                <p className="text-stone-600 text-[10px] tracking-[0.2em] uppercase mb-2">
                  Education
                </p>
                <p className="text-cream font-medium">
                  B.S. Computer Science
                </p>
                <p className="text-stone-500 text-sm">Yemeni University</p>
              </div>
              <div>
                <p className="text-stone-600 text-[10px] tracking-[0.2em] uppercase mb-2">
                  Email
                </p>
                <a
                  href="mailto:ammarragha@gmail.com"
                  className="text-gold hover:underline font-medium transition-colors"
                >
                  ammarragha@gmail.com
                </a>
              </div>
              <div>
                <p className="text-stone-600 text-[10px] tracking-[0.2em] uppercase mb-2">
                  GitHub
                </p>
                <a
                  href="https://github.com/Ammar777782439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline font-medium transition-colors"
                >
                  @Ammar777782439
                </a>
              </div>
              <div>
                <p className="text-stone-600 text-[10px] tracking-[0.2em] uppercase mb-2">
                  LinkedIn
                </p>
                <a
                  href="https://linkedin.com/in/ammar-rajeh-902048255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline font-medium transition-colors"
                >
                  /in/ammar-rajeh
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
