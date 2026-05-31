import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'Backend Developer',
    company: 'Deepsafer Company',
    period: '2025 — Present',
    description:
      'Designed and developed backend systems for cybersecurity applications. Built secure and scalable REST APIs. Reduced database load by 40% with Redis caching and async processing. Improved API response time by 50%.',
    tags: ['Go', 'Redis', 'Kafka', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Secure Multi-Broker Kafka System',
    company: 'Personal Project',
    period: '',
    description:
      'Distributed messaging system with 3-broker Kafka cluster for high availability. Go-based producer and consumer services with SSL/TLS secure communication. Docker containerized infrastructure.',
    tags: ['Go', 'Apache Kafka', 'Protobuf', 'Docker', 'SSL/TLS'],
  },
  {
    role: 'MDM Backend System',
    company: 'Mobile Device Management',
    period: '',
    description:
      'Event-driven architecture handling thousands of device events per minute. Reduced database writes by 60% with batching. Redis caching cut queries by 70%, response time from 300ms to 80ms. gRPC + SSE for real-time communication.',
    tags: ['Go', 'PHP', 'gRPC', 'Redis', 'SSE', 'PostgreSQL'],
  },
  {
    role: 'Security Alert & Malware Detection',
    company: 'Backend Monitoring Service',
    period: '',
    description:
      'Continuous log monitoring in Go using Elasticsearch to detect suspicious URLs. Integrated with internal security scanning. Automated threat detection, reduced manual work by 70%.',
    tags: ['Go', 'Elasticsearch', 'Background Workers'],
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
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

      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 md:py-44"
    >
      <div className="max-w-6xl mx-auto px-8">
        {/* Section header */}
        <div ref={headerRef} className="mb-20 opacity-0">
          <p className="text-gold text-[10px] tracking-[0.3em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream tracking-tight">
            Experience &
            <span className="text-gold"> Projects</span>
          </h2>
        </div>

        {/* Experience list */}
        <div className="space-y-0">
          {experiences.map((exp, idx) => (
            <div
              key={exp.role}
              ref={(el) => { itemsRef.current[idx] = el; }}
              className="group border-t border-[#1C1917] py-12 md:py-16 opacity-0"
            >
              <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
                {/* Left column */}
                <div>
                  <h3 className="font-display text-xl md:text-2xl text-cream font-medium mb-2 tracking-wide">
                    {exp.role}
                  </h3>
                  <p className="text-stone-500 text-sm mb-3">{exp.company}</p>
                  {exp.period && (
                    <p className="text-gold text-xs tracking-[0.15em] font-mono">
                      {exp.period}
                    </p>
                  )}
                </div>

                {/* Right column */}
                <div>
                  <p className="text-stone-400 text-sm md:text-base leading-[1.8] mb-6">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[11px] tracking-wider border border-[#292524] text-stone-500 transition-colors duration-300 group-hover:text-stone-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-20 pt-16 border-t border-[#1C1917]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: '40%', label: 'Database Load Cut' },
              { value: '50%', label: 'API Speed Gain' },
              { value: '60%', label: 'Writes Reduced' },
              { value: '5000+', label: 'Concurrent Connections' },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="font-display text-3xl md:text-4xl font-bold text-gold mb-2">
                  {stat.value}
                </p>
                <p className="text-stone-600 text-[10px] tracking-[0.2em] uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
