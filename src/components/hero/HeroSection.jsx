import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Sparkles } from 'lucide-react'
import NeuralNetwork from './NeuralNetwork'

const ROLES = ['AI/ML Engineer', 'Systems Engineer', 'Full-Stack Builder', 'Agent Architect']

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise"
      style={{ background: 'radial-gradient(ellipse at 50% 55%, #0d1526 0%, #050a14 65%)' }}
    >
      <NeuralNetwork />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(124,58,237,0.14) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 15% 30%, rgba(0,212,255,0.07) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
          style={{
            background: 'rgba(0,212,255,0.07)',
            border: '1px solid rgba(0,212,255,0.22)',
          }}
        >
          <Sparkles size={12} style={{ color: '#00d4ff' }} />
          <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: '#00d4ff' }}>
            Open to Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-black mb-5 leading-[1.02] tracking-tight"
          style={{ fontSize: 'clamp(3.2rem, 9vw, 8rem)' }}
        >
          <span className="text-white">Maniteja</span>
          <br />
          <span className="gradient-text glow-text-cyan">Gaddam</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mb-3"
        >
          <span
            className="inline-block text-xl md:text-2xl font-semibold tracking-wide"
            style={{ color: '#e2e8f0' }}
          >
            Software Engineer
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.72 }}
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mb-11"
        >
          {['AI/ML Pipelines', 'High-Performance C++', 'Multi-Agent Systems', 'Full-Stack Products'].map((tag, i) => (
            <span
              key={tag}
              className="text-sm font-mono"
              style={{ color: i % 2 === 0 ? '#00d4ff' : '#7c3aed' }}
            >
              {i > 0 && <span className="mr-4 text-slate-700">·</span>}
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.88 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <a
            href="#projects"
            className="group px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
              color: '#ffffff',
              boxShadow: '0 0 35px rgba(0,212,255,0.28), 0 4px 20px rgba(0,0,0,0.4)',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 55px rgba(0,212,255,0.5), 0 4px 30px rgba(0,0,0,0.5)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 35px rgba(0,212,255,0.28), 0 4px 20px rgba(0,0,0,0.4)'}
          >
            <span className="relative z-10">View Projects</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#e2e8f0',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(0,212,255,0.08)'
              e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'
              e.currentTarget.style.color = '#00d4ff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
              e.currentTarget.style.color = '#e2e8f0'
            }}
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex items-center justify-center gap-1 mb-8"
        >
          <div className="h-px w-16 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.07)' }} />
          <div className="flex items-center gap-4 px-6">
            {[
              { href: 'https://github.com/manitejagaddam', Icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/maniteja-gaddam-354345245/', Icon: Linkedin, label: 'LinkedIn' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg transition-all duration-200"
                style={{ color: '#475569' }}
                onMouseEnter={e => e.currentTarget.style.color = '#00d4ff'}
                onMouseLeave={e => e.currentTarget.style.color = '#475569'}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <div className="h-px w-16 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.07)' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {[
            { val: '1000+', label: 'LeetCode Solved' },
            { val: '9.0', label: 'CGPA' },
            { val: '3', label: 'MVPs in 48h' },
            { val: '93+', label: 'GitHub Repos' },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <div className="text-xl font-black gradient-text">{val}</div>
              <div className="text-xs font-mono" style={{ color: '#475569' }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: '#334155' }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
