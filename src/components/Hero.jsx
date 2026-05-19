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

      <div className="relative z-10 w-full px-8 lg:px-24 py-24 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left z-10 max-w-2xl">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 border border-white/10"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-medium text-white/80">Available for opportunities</span>
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold font-['Space_Grotesk'] tracking-tight mb-4"
          >
            Hi, I’m <span className="gradient-text">Sinchana Hegde</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl lg:text-3xl text-white/80 font-medium mb-6 h-[40px] flex items-center justify-center lg:justify-start"
          >
            <span className="text-violet-400 mr-2">▹</span>
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
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
          >
            Passionate Computer Science graduate focused on building AI-driven solutions, 
            modern web applications, and solving real-world problems through technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
          >
            <a href="#projects" className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-medium flex items-center gap-2 transition-all glow-btn">
              View Projects <ChevronRight size={18} />
            </a>
            <a href="#" className="px-6 py-3 rounded-xl glass-card text-white hover:bg-white/10 font-medium flex items-center gap-2 transition-all border border-white/10">
              <Download size={18} /> Download Resume
            </a>
            <a href="#contact" className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-all border border-white/5">
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center lg:justify-start gap-4"
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

        {/* Center Decorative Element for Wide Screens to fill the huge gap */}
        <div className="hidden xl:flex absolute left-[55%] top-[45%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-10 pointer-events-none z-0">
          <motion.div 
            animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-4 px-6 py-4 rounded-2xl glass-card border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl -translate-x-12"
          >
            <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-xl border border-violet-500/30">🤖</div>
            <div className="flex flex-col text-left">
              <span className="text-white/90 font-bold text-sm tracking-wide">AI / ML</span>
              <span className="text-white/40 text-xs">Algorithms</span>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [15, -15, 15], rotate: [2, -2, 2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-4 px-6 py-4 rounded-2xl glass-card border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl translate-x-16"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-xl border border-blue-500/30">⚛️</div>
            <div className="flex flex-col text-left">
              <span className="text-white/90 font-bold text-sm tracking-wide">Web Dev</span>
              <span className="text-white/40 text-xs">React & Vite</span>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [-1, 1, -1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-4 px-6 py-4 rounded-2xl glass-card border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl -translate-x-4"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-xl border border-emerald-500/30">☁️</div>
            <div className="flex flex-col text-left">
              <span className="text-white/90 font-bold text-sm tracking-wide">Cloud</span>
              <span className="text-white/40 text-xs">AWS & Azure</span>
            </div>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0 relative"
        >
          {/* Professional Circular Profile Photo */}
          <div className="relative w-64 h-64 lg:w-[350px] lg:h-[350px] flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-blue-600/20 rounded-full translate-x-4 translate-y-4 -z-10" />
            <img 
              src="/profile.jpg" 
              alt="Sinchana Hegde" 
              className="w-full h-full object-cover object-top rounded-full shadow-2xl border-2 border-white/10" 
            />
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
