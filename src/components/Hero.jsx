import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ChevronRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MailIcon } from './GithubIcon';
import { TypeAnimation } from 'react-type-animation';

/* Animated canvas particle background */
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

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
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

      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
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
      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)' }}
        />
      </div>

      <ParticleBackground />

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-['Space_Grotesk'] text-5xl md:text-7xl font-black mb-4 tracking-tight"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">Sinchana</span>
            <br />
            <span className="text-white">Hegde</span>
          </motion.h1>

          {/* Type Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl font-medium text-white/60 mb-6 h-9 flex items-center justify-center lg:justify-start gap-2"
          >
            <span className="text-violet-400">▹</span>
            <TypeAnimation
              sequence={[
                'AI Product Developer', 2000,
                'Computer Science Engineer', 2000,
                'ML Enthusiast', 2000,
                'Web Developer', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white/80"
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-white/50 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0"
          >
            Passionate Computer Science graduate focused on building AI-driven solutions,
            modern web applications, and solving real-world problems through technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-blue-600 text-white glow-btn text-sm"
            >
              View Projects <ChevronRight size={16} />
            </button>
            <a
              href="#"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold glass-card text-white/80 hover:text-white text-sm border-violet-500/20"
            >
              <Download size={16} /> Download Resume
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold glass-card text-white/80 hover:text-white text-sm"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-5 justify-center lg:justify-start"
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
                className="w-11 h-11 rounded-xl flex items-center justify-center glass-card text-white/60 hover:text-violet-400 transition-all duration-300 hover:scale-110"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0 relative"
        >
          <div className="relative w-60 h-60 md:w-72 md:h-72 floating">
            {/* Outer ring */}
            <div className="absolute inset-[-8px] rounded-full bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 opacity-60 blur-sm pulse-glow" />
            <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 opacity-80" />
            {/* Avatar */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-violet-900/60 to-blue-900/60 border-2 border-white/10">
              <img src="/profile.jpg" alt="Sinchana Hegde" className="w-full h-full object-cover" />
            </div>
            {/* Decorative dots */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-violet-400"
                style={{
                  top: `${50 + 48 * Math.sin((i * Math.PI * 2) / 6)}%`,
                  left: `${50 + 48 * Math.cos((i * Math.PI * 2) / 6)}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
