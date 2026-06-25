import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ChevronRight, Building2, Bot } from 'lucide-react';

const experiences = [
  {
    company: 'Sasken Technologies Limited',
    role: 'Java Android Framework Intern',
    duration: 'June 2025',
    location: 'Bangalore, India',
    icon: Building2,
    color: '#7c3aed',
    highlights: [
      'Developed a full-featured Inventory Management Android application',
      'Implemented robust POS features tailored for small and medium-scale stores',
      'Utilized Java and SQLite for backend logic and local data persistence',
      'Followed MVVM architecture for clean and maintainable code structure',
    ],
    tech: ['Java', 'Android', 'SQLite', 'MVVM'],
  },
  {
    company: 'Rooman Technologies',
    role: 'AI Product Developer Intern',
    duration: 'January 2026 – Present',
    location: 'Bangalore, India',
    icon: Bot,
    color: '#06b6d4',
    current: true,
    highlights: [
      'Building AI-driven Learning Management System (LMS) with personalized recommendations',
      'Performing model tuning and deploying ML pipelines on AWS infrastructure',
      'Contributing to ERP system development for streamlined business processes',
      'Developing an online code compiler with multi-language support',
    ],
    tech: ['Python', 'AWS', 'LLMs', 'ERP', 'React'],
  },
];

function ExperienceCard({ exp, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative pl-14 pb-12 last:pb-0"
    >
      {/* Timeline node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center text-lg z-10"
        style={{ background: `${exp.color}20`, border: `2px solid ${exp.color}60`, boxShadow: `0 0 20px ${exp.color}30` }}
      >
        <exp.icon size={20} style={{ color: exp.color }} />
      </motion.div>

      {/* Card */}
      <div className="glass-card p-7">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">{exp.company}</h3>
              {exp.current && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Current
                </span>
              )}
            </div>
            <p className="text-base font-semibold" style={{ color: exp.color }}>{exp.role}</p>
          </div>
          <div className="flex flex-col gap-1.5 text-right">
            <div className="flex items-center gap-1.5 text-white/40 text-xs">
              <Calendar size={12} />{exp.duration}
            </div>
            <div className="flex items-center gap-1.5 text-white/40 text-xs">
              <MapPin size={12} />{exp.location}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-2.5 mb-5">
          {exp.highlights.map((h, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
              className="flex items-start gap-2.5 text-white/60 text-sm leading-relaxed"
            >
              <ChevronRight size={14} className="mt-0.5 flex-shrink-0" style={{ color: exp.color }} />
              {h}
            </motion.li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ background: `${exp.color}15`, border: `1px solid ${exp.color}30`, color: exp.color }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

      <div className="w-full px-8 lg:px-48 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">
            <Briefcase size={14} className="inline mr-1" />
            Professional Journey
          </p>
          <h2 className="section-heading gradient-text">Experience</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-violet-600 to-blue-600" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-5 bottom-0 w-px bg-gradient-to-b from-violet-600/60 via-blue-600/40 to-transparent" />

          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
