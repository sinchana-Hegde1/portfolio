import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './GithubIcon';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hegdesinchana597@gmail.com',
    href: 'mailto:hegdesinchana597@gmail.com',
    color: '#7c3aed',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 6362190539',
    href: 'tel:+916362190539',
    color: '#2563eb',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/sinchana-Hegde1',
    href: 'https://github.com/sinchana-Hegde1',
    color: '#10b981',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'sinchana-hegde-53359635b',
    href: 'https://linkedin.com/in/sinchana-hegde-53359635b',
    color: '#0ea5e9',
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #7c3aed 0%, transparent 70%)' }}
      />

      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">
            <MapPin size={14} className="inline mr-1" /> Reach out
          </p>
          <h2 className="section-heading gradient-text">Get In Touch</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-violet-600 to-blue-600" />
          <p className="mt-6 text-white/50 max-w-lg mx-auto">
            I'm open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left – Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            <div className="glass-card p-8 mb-2">
              <h3 className="font-['Space_Grotesk'] font-bold text-white text-xl mb-2">Let's work together</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Whether you have a project idea, an internship opportunity, or just want to connect —
                I'd love to hear from you. I typically respond within 24 hours.
              </p>
            </div>

            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="glass-card p-5 flex items-center gap-5 group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${link.color}15`, border: `1px solid ${link.color}30` }}
                  >
                    <Icon size={18} style={{ color: link.color }} />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-medium uppercase tracking-wider mb-0.5">{link.label}</div>
                    <div className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">{link.value}</div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Right – Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-5">
              <h3 className="font-['Space_Grotesk'] font-bold text-white text-xl">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/50 text-xs font-medium uppercase tracking-wider">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white/80 text-sm placeholder-white/20 focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.07] transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/50 text-xs font-medium uppercase tracking-wider">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white/80 text-sm placeholder-white/20 focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.07] transition-all duration-300"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-white/50 text-xs font-medium uppercase tracking-wider">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white/80 text-sm placeholder-white/20 focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.07] transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-white/50 text-xs font-medium uppercase tracking-wider">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white/80 text-sm placeholder-white/20 focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.07] transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending || sent}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 py-3.5 rounded-xl font-semibold text-white text-sm relative overflow-hidden transition-all duration-300 disabled:opacity-70"
                style={{ background: sent ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #7c3aed, #2563eb)' }}
              >
                {sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : sent ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
