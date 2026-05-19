import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Layers } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

const projects = [
  {
    title: 'Multimodal Sensing for Enhanced UX & Wellbeing',
    desc: 'An emotion-aware intelligent system that uses voice, facial expressions, and text analysis to detect emotions in real-time and recommends personalized songs to enhance user wellbeing.',
    tags: ['Python', 'AI/ML', 'Emotion Detection', 'Computer Vision'],
    emoji: '🎭',
    color: '#7c3aed',
    github: 'https://github.com/sinchana-Hegde1/Multimodal-Sensing-Emotion-Project',
    demo: '#',
    featured: true,
  },
  {
    title: 'Disaster Prediction Detection',
    desc: 'An ML model for predicting disasters using environmental and historical data. Implemented Random Forest and SVC algorithms to detect patterns and predict disaster events with high accuracy.',
    tags: ['Python', 'Machine Learning', 'Random Forest', 'SVC'],
    emoji: '🌪️',
    color: '#2563eb',
    github: 'https://github.com/sinchana-Hegde1/Disaster-Prediction',
    demo: '#',
    featured: true,
  },
  {
    title: 'Crop Recommendation System',
    desc: 'An intelligent system that suggests the most suitable crops based on soil composition and climate data. Built with Streamlit and scikit-learn, it includes crop yield estimation features.',
    tags: ['Python', 'Streamlit', 'Scikit-learn', 'Agriculture AI'],
    emoji: '🌾',
    color: '#10b981',
    github: 'https://github.com/sinchana-Hegde1/crop_recommendation',
    demo: '#',
  },
  {
    title: 'Agentic Resume Screening',
    desc: 'An AI-powered system designed to automate resume screening using intelligent agents. Evaluates candidate profiles against job requirements for efficient hiring.',
    tags: ['Python', 'Generative AI', 'NLP', 'Automation'],
    emoji: '📄',
    color: '#f59e0b',
    github: 'https://github.com/sinchana-Hegde1/agenticresumescreening',
    demo: '#',
  },
  {
    title: 'IT Asset Manager',
    desc: 'A comprehensive Java-based application for managing IT assets within an organization, featuring inventory tracking, assignment management, and reporting capabilities.',
    tags: ['Java', 'Software Engineering', 'Asset Management'],
    emoji: '💻',
    color: '#ec4899',
    github: 'https://github.com/sinchana-Hegde1/ITAssetManager',
    demo: '#',
  },
  {
    title: 'Expense Tracker',
    desc: 'A modern web application built with JavaScript to track daily expenses, manage budgets, and visualize spending habits with a clean, responsive user interface.',
    tags: ['JavaScript', 'Web Development', 'Finance', 'UI/UX'],
    emoji: '💰',
    color: '#06b6d4',
    github: 'https://github.com/sinchana-Hegde1/Expense_Tracker',
    demo: '#',
  },
];

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? project.color + '60' : 'rgba(255,255,255,0.07)'}`,
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? `0 20px 60px ${project.color}25` : 'none',
      }}
    >
      {/* Top gradient bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}60)` }}
      />

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-5 right-5 px-2.5 py-0.5 rounded-full text-xs font-semibold"
          style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}40` }}>
          ★ Featured
        </div>
      )}

      <div className="p-7">
        {/* Icon + Title */}
        <div className="flex items-start gap-4 mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
          >
            {project.emoji}
          </div>
          <div>
            <h3 className="font-['Space_Grotesk'] font-bold text-white text-base leading-snug">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/55 text-sm leading-relaxed mb-6">{project.desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium"
              style={{ background: `${project.color}12`, color: `${project.color}cc`, border: `1px solid ${project.color}25` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-white/70 hover:text-white transition-all duration-300"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <GithubIcon size={15} /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-300 glow-btn"
            style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}80)` }}
          >
            <ExternalLink size={15} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      <div className="w-full px-8 lg:px-24">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">
            <Layers size={14} className="inline mr-1" />
            What I've built
          </p>
          <h2 className="section-heading gradient-text">Projects</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-violet-600 to-blue-600" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/sinchana-Hegde1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-white/70 hover:text-white font-medium text-sm transition-all"
          >
            <GithubIcon size={16} /> View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
