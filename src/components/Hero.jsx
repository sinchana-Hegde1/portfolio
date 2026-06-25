import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ChevronRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MailIcon } from './GithubIcon';
import { TypeAnimation } from 'react-type-animation';

/* Subtle animated canvas particle background */
function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.35 + 0.08,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${p.opacity})`;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.12 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Radial glows — toned down */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[280px] h-[280px] rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)' }}
        />
      </div>

      <ParticleBackground />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* ── Text Content ── */}
        <div className="flex-1 text-center lg:text-left z-10">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card mb-5 border border-white/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-white/70 tracking-wide">Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold font-['Space_Grotesk'] tracking-tight mb-3 leading-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Sinchana Hegde</span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="text-lg lg:text-xl text-white/70 font-medium mb-5 h-8 flex items-center justify-center lg:justify-start gap-2"
          >
            <span className="text-violet-400 text-sm">▹</span>
            <TypeAnimation
              sequence={[
                'AI Product Developer',
                2000,
                'Machine Learning Engineer',
                2000,
                'Computer Science Engineer',
                2000,
                'Web Developer',
                2000,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.26 }}
            className="text-sm lg:text-base text-white/50 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0"
          >
            Passionate CS graduate building AI-driven solutions, modern web apps, and
            real-world products through technology and thoughtful design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.34 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
          >
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium flex items-center gap-1.5 transition-all glow-btn"
            >
              View Projects <ChevronRight size={15} />
            </a>
            <a
              href="#"
              className="px-5 py-2.5 rounded-lg glass-card text-white/80 hover:text-white text-sm font-medium flex items-center gap-1.5 transition-all border border-white/10"
            >
              <Download size={15} /> Resume
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg text-white/60 hover:text-white text-sm font-medium transition-all border border-white/8 hover:border-white/20 hover:bg-white/5"
            >
              Contact
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.42 }}
            className="flex items-center justify-center lg:justify-start gap-3"
          >
            {[
              { icon: GithubIcon, href: 'https://github.com/sinchana-Hegde1', label: 'GitHub' },
              { icon: LinkedinIcon, href: 'https://linkedin.com/in/sinchana-hegde-53359635b', label: 'LinkedIn' },
              { icon: MailIcon, href: 'mailto:hegdesinchana597@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center glass-card text-white/50 hover:text-violet-400 transition-all duration-300 hover:scale-110"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── Profile Image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full opacity-30 blur-xl"
              style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
            />
            {/* Profile photo */}
            <div className="relative w-52 h-52 lg:w-64 lg:h-64 xl:w-72 xl:h-72">
              <img
                src="/profile.jpg"
                alt="Sinchana Hegde"
                className="w-full h-full object-cover object-top rounded-full border border-white/10 shadow-2xl"
              />
              {/* Thin gradient ring */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'transparent',
                  boxShadow: '0 0 0 2px rgba(124, 58, 237, 0.35), 0 0 40px rgba(124, 58, 237, 0.15)',
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/25 hover:text-white/50 transition-colors"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={15} />
        </motion.div>
      </motion.button>
    </section>
  );
}
