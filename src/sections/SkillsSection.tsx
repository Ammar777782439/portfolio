import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { category: 'Languages', items: ['Go', 'Python', 'PHP', 'JavaScript'] },
  { category: 'Frameworks', items: ['Django', 'Django REST', 'Laravel', 'Fiber'] },
  { category: 'Messaging', items: ['Apache Kafka', 'Message Queues', 'Event-Driven', 'gRPC', 'SSE'] },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'Oracle SQL', 'Redis', 'Elasticsearch'] },
  { category: 'DevOps', items: ['Docker', 'Git', 'GitHub', 'Postman', 'Linux'] },
  { category: 'Concepts', items: ['System Design', 'Scalability', 'Performance', 'Caching', 'Rate Limiting', 'Load Balancing'] },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 65%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 md:py-44"
    >
      <div className="max-w-6xl mx-auto px-8">
        {/* Section header */}
        <div className="mb-20">
          <p className="text-gold text-[10px] tracking-[0.3em] uppercase mb-4">
            Capabilities
          </p>
          <h2
            ref={headingRef}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream tracking-tight opacity-0"
          >
            Technical
            <span className="text-gold"> Expertise</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1917]">
          {skills.map((skill, idx) => (
            <div
              key={skill.category}
              ref={(el) => { cardsRef.current[idx] = el; }}
              className="group bg-[#0A0A0A] p-8 md:p-10 opacity-0 transition-all duration-500 hover:bg-[#111111]"
            >
              <p className="font-display text-xl text-cream font-medium mb-6 tracking-wide">
                {skill.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs tracking-wider border border-[#292524] text-stone-400 transition-all duration-300 group-hover:border-[#C8A45C]/30 group-hover:text-stone-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
