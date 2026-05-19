import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Star, Cpu, Brain, Cloud } from 'lucide-react';

const stats = [
  { label: 'CGPA', value: '9.18', icon: Star, color: '#f59e0b' },
  { label: 'Projects', value: '5+', icon: Cpu, color: '#7c3aed' },
  { label: 'Certifications', value: '5+', icon: Brain, color: '#06b6d4' },
  { label: 'Technologies', value: '15+', icon: Cloud, color: '#10b981' },
];

const interests = [
  '🤖 Generative AI',
  '🧠 Machine Learning',
  '☁️ Cloud Computing',
  '🌐 Web Development',
  '📱 Mobile Apps',
  '🔬 Intelligent Systems',
];

function StatCard({ stat, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-5 text-center group"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
        style={{ background: `${stat.color}1a`, border: `1px solid ${stat.color}40` }}
      >
        <Icon size={18} style={{ color: stat.color }} />
      </div>
      <motion.div
        className="text-3xl font-black font-['Space_Grotesk'] mb-1"
        style={{ color: stat.color }}
        animate={inView ? { scale: [0.5, 1.1, 1] } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
      >
        {stat.value}
      </motion.div>
      <div className="text-white/50 text-xs font-medium tracking-wider uppercase">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 w-72 h-72 rounded-full opacity-5 -translate-y-1/2 -translate-x-1/2"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />

      <div className="w-full px-8 lg:px-24">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="section-heading gradient-text">About Me</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-violet-600 to-blue-600" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left – Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 mb-6"
            >
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white mb-4">
                Who I Am
              </h3>
              <p className="text-white/60 leading-relaxed mb-4">
                I'm a passionate Computer Science Engineering student at{' '}
                <span className="text-violet-400 font-medium">SJB Institute of Technology, Bangalore</span>,
                with a strong CGPA of 9.18. I thrive at the intersection of AI and product development.
              </p>
              <p className="text-white/60 leading-relaxed">
                With a deep interest in Generative AI, Machine Learning, and Cloud Technologies, I love
                building intelligent systems that solve real-world problems. I bring strong communication,
                analytical thinking, and team leadership to every project.
              </p>
            </motion.div>

            {/* Education Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white mb-6 flex items-center gap-2">
                <GraduationCap size={20} className="text-violet-400" /> Education
              </h3>
              <div className="relative pl-10">
                <div className="timeline-line" />
                <div className="flex flex-col gap-1">
                  <div className="absolute left-[14px] top-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 ring-2 ring-violet-500/30" />
                  <div className="flex items-center gap-2 text-white/40 text-xs font-medium tracking-wider uppercase">
                    <MapPin size={12} /> Bangalore, Karnataka
                  </div>
                  <h4 className="text-white font-semibold text-base">
                    BE / BTech – Computer Science & Engineering
                  </h4>
                  <p className="text-violet-400 text-sm font-medium">SJB Institute of Technology</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="skill-badge text-xs">CGPA: 9.18</span>
                    <span className="text-white/30 text-xs">Batch 2021–2025</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right – Stats + Interests */}
          <div className="flex flex-col gap-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-7"
            >
              <h3 className="text-lg font-bold font-['Space_Grotesk'] text-white mb-5">
                Areas of Interest
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, i) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.07 }}
                    className="skill-badge"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
