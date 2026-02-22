import { Github, Linkedin, Mail, Code2, ExternalLink } from 'lucide-react'

const LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/maniteja-gaddam-354345245/',
    Icon: Linkedin,
    color: '#0077b5',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/manitejagaddam',
    Icon: Github,
    color: '#fff',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/ManitejagadDAM/',
    Icon: Code2,
    color: '#f59e0b',
  },
  {
    label: 'Code360',
    href: 'https://www.naukri.com/code360/profile/manitejagaddam',
    Icon: ExternalLink,
    color: '#f97316',
  },
  {
    label: 'Email',
    href: 'mailto:manitejagaddam1@gmail.com',
    Icon: Mail,
    color: '#00d4ff',
  },
]

export default function Footer() {
  return (
    <footer
      className="relative py-12 px-6"
      style={{
        background: 'rgba(5,8,16,0.95)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
        <div className="text-2xl font-black">
          <span className="gradient-text">Maniteja Gaddam</span>
        </div>

        <p className="text-sm text-center max-w-md" style={{ color: '#475569' }}>
          Building at the intersection of intelligence and performance. Open to exciting roles and collaborations.
        </p>

        <div className="flex items-center gap-5 flex-wrap justify-center">
          {LINKS.map(({ label, href, Icon, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                color: '#475569',
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.02)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = color
                e.currentTarget.style.borderColor = `${color}44`
                e.currentTarget.style.background = `${color}0a`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#475569'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
              }}
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
        </div>

        <div
          className="w-full h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), rgba(124,58,237,0.2), transparent)' }}
        />

        <p className="text-xs font-mono" style={{ color: '#334155' }}>
          © {new Date().getFullYear()} Maniteja Gaddam · Built with React, Three.js & Framer Motion
        </p>
      </div>
    </footer>
  )
}
