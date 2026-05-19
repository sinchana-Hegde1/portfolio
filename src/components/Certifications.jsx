import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Python Certification',
    issuer: 'Professional Certification Body',
    year: '2024',
    emoji: '🐍',
    color: '#3b82f6',
    credentialLink: '#',
  },
  {
    title: 'Machine Learning using Python',
    issuer: 'Simplilearn',
    year: '2025',
    emoji: '🤖',
    color: '#7c3aed',
    credentialLink: '#',
  },
  {
    title: 'Salesforce Certification',
    issuer: 'TCS Last Mile Program',
    year: '2025',
    emoji: '☁️',
    color: '#00a1e0',
    credentialLink: '#',
  },
  {
    title: 'Generative AI Certification',
    issuer: 'AWS Educate',
    year: '2026',
    emoji: '✨',
    color: '#ff9900',
    credentialLink: '#',
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL – IIT Certification',
    year: '2025',
    emoji: '🌩️',
    color: '#10b981',
    credentialLink: '#',
  },
];

function CertCard({ cert, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotateY: -10 }}
      animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 group relative overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${cert.color}15, transparent 60%)` }}
      />

      {/* Top border gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }}
      />

      <div className="relative z-10">
        {/* Emoji + Year */}
        <div className="flex items-center justify-between mb-4">
          <motion.div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            {cert.emoji}
          </motion.div>
          <span
            className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
            style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}30` }}
          >
            {cert.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-['Space_Grotesk'] font-bold text-white text-sm leading-snug mb-1.5">
          {cert.title}
        </h3>

        {/* Issuer */}
        <p className="text-white/40 text-xs mb-5">{cert.issuer}</p>

        {/* CTA */}
        <a
          href={cert.credentialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-300 group/link"
          style={{ color: cert.color }}
        >
          <Award size={13} /> View Credential
          <ExternalLink size={11} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

      <div className="w-full px-8 lg:px-24 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">
            <Award size={14} className="inline mr-1" /> Achievements
          </p>
          <h2 className="section-heading gradient-text">Certifications</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-violet-600 to-blue-600" />
          <p className="mt-6 text-white/50 text-base max-w-lg mx-auto">
            Professional certifications that validate my expertise across AI, cloud, and development.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
