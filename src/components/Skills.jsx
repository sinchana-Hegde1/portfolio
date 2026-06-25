import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Globe, Wrench, Bot, BookOpen, Star, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code2,
    color: '#7c3aed',
    gradient: 'from-violet-600/20 to-violet-900/10',
    border: 'border-violet-500/20',
    skills: ['Python', 'Java', 'C'],
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    color: '#2563eb',
    gradient: 'from-blue-600/20 to-blue-900/10',
    border: 'border-blue-500/20',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'SQL'],
  },
  {
    title: 'Tools & Frameworks',
    icon: Wrench,
    color: '#06b6d4',
    gradient: 'from-cyan-600/20 to-cyan-900/10',
    border: 'border-cyan-500/20',
    skills: ['Git', 'GitHub', 'VS Code', 'Streamlit', 'Salesforce', 'UI/UX Design'],
  },
  {
    title: 'AI & Technologies',
    icon: Bot,
    color: '#10b981',
    gradient: 'from-emerald-600/20 to-emerald-900/10',
    border: 'border-emerald-500/20',
    skills: ['Generative AI', 'Machine Learning', 'Deep Learning', 'Cloud Computing', 'NLP', 'Computer Vision'],
  },
  {
    title: 'Core Subjects',
    icon: BookOpen,
    color: '#f59e0b',
    gradient: 'from-amber-600/20 to-amber-900/10',
    border: 'border-amber-500/20',
    skills: ['Operating Systems', 'DBMS', 'Computer Networks', 'Data Structures'],
  },
  {
    title: 'Soft Skills',
    icon: Star,
    color: '#ec4899',
    gradient: 'from-pink-600/20 to-pink-900/10',
    border: 'border-pink-500/20',
    skills: ['Communication', 'Leadership', 'Teamwork', 'Analytical Thinking', 'Problem Solving'],
  },
];

// Top-level highlighted skills for the spotlight strip
const highlightedSkills = [
  { name: 'Python', color: '#7c3aed' },
  { name: 'Machine Learning', color: '#10b981' },
  { name: 'React', color: '#2563eb' },
  { name: 'Generative AI', color: '#ec4899' },
  { name: 'Deep Learning', color: '#06b6d4' },
  { name: 'Streamlit', color: '#f59e0b' },
  { name: 'SQL', color: '#2563eb' },
  { name: 'Git', color: '#06b6d4' },
];

function CategoryCard({ cat, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className={`relative rounded-2xl p-6 bg-gradient-to-br ${cat.gradient} border ${cat.border} backdrop-blur-sm overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}
      style={{ boxShadow: `0 0 0 1px ${cat.color}18` }}
    >
      {/* Subtle corner glow */}
      <div
        className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-20 blur-2xl group-hover:opacity-35 transition-opacity duration-500"
        style={{ background: cat.color }}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${cat.color}20`, border: `1px solid ${cat.color}35` }}
        >
          <cat.icon size={18} style={{ color: cat.color }} />
        </div>
        <h3 className="font-['Space_Grotesk'] font-bold text-white/90 text-sm tracking-wide">
          {cat.title}
        </h3>
      </div>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.35, delay: index * 0.05 + i * 0.06 }}
            className="px-3 py-1 rounded-full text-xs font-medium cursor-default select-none transition-all duration-200 hover:scale-105"
            style={{
              background: `${cat.color}15`,
              color: `${cat.color}e0`,
              border: `1px solid ${cat.color}30`,
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/3 w-72 h-72 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />
        <div className="absolute right-0 bottom-1/4 w-64 h-64 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: 'radial-gradient(circle, #2563eb, transparent)' }} />
      </div>

      <div className="w-full px-8 lg:px-24 relative z-10">

        {/* Section heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles size={12} /> What I work with
          </p>
          <h2 className="section-heading gradient-text">Skills & Expertise</h2>
          <div className="mt-4 mx-auto w-14 h-0.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600" />
        </motion.div>

        {/* Highlighted skills strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {highlightedSkills.map((skill, i) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.055 }}
              className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide cursor-default select-none hover:scale-105 transition-transform duration-200"
              style={{
                background: `${skill.color}18`,
                color: skill.color,
                border: `1px solid ${skill.color}35`,
                boxShadow: `0 0 16px ${skill.color}15`,
              }}
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>

        {/* Category cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
