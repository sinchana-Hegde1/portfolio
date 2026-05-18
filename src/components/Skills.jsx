import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Programming',
    emoji: '💻',
    color: '#7c3aed',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 78 },
      { name: 'C', level: 72 },
    ],
  },
  {
    title: 'Web Technologies',
    emoji: '🌐',
    color: '#2563eb',
    skills: [
      { name: 'HTML', level: 88 },
      { name: 'CSS', level: 82 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    title: 'Tools & Frameworks',
    emoji: '🛠️',
    color: '#06b6d4',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'UI/UX Design', level: 75 },
      { name: 'Salesforce', level: 70 },
    ],
  },
  {
    title: 'Technologies',
    emoji: '🤖',
    color: '#10b981',
    skills: [
      { name: 'Generative AI', level: 82 },
      { name: 'Machine Learning', level: 85 },
      { name: 'Cloud Computing', level: 72 },
      { name: 'Intelligent Systems', level: 78 },
    ],
  },
  {
    title: 'Core Subjects',
    emoji: '📚',
    color: '#f59e0b',
    skills: [
      { name: 'Operating Systems', level: 80 },
      { name: 'DBMS', level: 85 },
      { name: 'Computer Networks', level: 78 },
    ],
  },
  {
    title: 'Soft Skills',
    emoji: '🌟',
    color: '#ec4899',
    skills: [
      { name: 'Communication', level: 92 },
      { name: 'Leadership', level: 85 },
      { name: 'Teamwork', level: 90 },
      { name: 'Analytical Thinking', level: 88 },
    ],
  },
];

function SkillBar({ name, level, color, index, inView }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-white/80 text-sm font-medium">{name}</span>
        <span className="text-xs font-semibold" style={{ color }}>{level}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
        />
      </div>
    </div>
  );
}

function CategoryCard({ cat, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="glass-card p-7 group"
      style={{ '--cat-color': cat.color }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
          style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}30` }}
        >
          {cat.emoji}
        </div>
        <h3 className="font-['Space_Grotesk'] font-bold text-white text-base">{cat.title}</h3>
      </div>
      {cat.skills.map((skill, i) => (
        <SkillBar key={skill.name} {...skill} color={cat.color} index={i} inView={inView} />
      ))}
    </motion.div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute right-0 top-1/2 w-64 h-64 rounded-full opacity-5 translate-x-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, #2563eb, transparent)' }} />

      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">What I work with</p>
          <h2 className="section-heading gradient-text">Skills & Expertise</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-violet-600 to-blue-600" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
