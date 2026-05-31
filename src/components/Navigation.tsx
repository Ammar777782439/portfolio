import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#skills' },
  { label: 'Work', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.5);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 300) {
            setActive(sections[i]);
            break;
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
    >
      <div className="backdrop-blur-xl bg-[#050505]/70 border-b border-[#1C1917]/50">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-display text-xl font-bold text-gold tracking-wide"
          >
            AR
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative text-sm font-medium tracking-[0.1em] uppercase transition-colors duration-300 ${
                  active === link.href.slice(1)
                    ? 'text-gold'
                    : 'text-stone-400 hover:text-cream'
                }`}
              >
                {link.label}
                {active === link.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gold" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
