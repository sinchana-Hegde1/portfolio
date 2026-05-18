import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MailIcon } from './GithubIcon';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="max-w-[90rem] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="font-['Space_Grotesk'] text-lg font-bold gradient-text mb-1">Sinchana Hegde</div>
          <p className="text-white/30 text-xs">AI Product Developer · CS Engineer · ML Enthusiast</p>
        </div>

        <div className="flex items-center gap-5">
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
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white/40 hover:text-violet-400 glass-card transition-all duration-300 hover:scale-110"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="text-white/30 text-xs flex items-center gap-1">
          © {year} Made with <Heart size={12} className="text-pink-500 fill-pink-500" /> by Sinchana Hegde
        </p>
      </div>
    </footer>
  );
}
