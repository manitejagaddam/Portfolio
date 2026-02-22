import { motion } from 'framer-motion'
import { Code2, Trophy, GraduationCap, Zap, Download } from 'lucide-react'
import me from "/images/me.png"
import me2 from "/images/me2.png"

const STATS = [
  {
    icon: Code2,
    value: '1000+',
    label: 'LeetCode Problems',
    sub: 'Top 5% Competitive Rank',
    color: '#00d4ff',
  },
  {
    icon: GraduationCap,
    value: '9.0',
    label: 'CGPA',
    sub: 'B-Tech CSE (AI) • Parul University',
    color: '#7c3aed',
  },
  {
    icon: Trophy,
    value: '3',
    label: 'Hackathon MVPs',
    sub: 'Shipped in 48 hours each',
    color: '#f59e0b',
  },
  {
    icon: Zap,
    value: '93+',
    label: 'GitHub Repos',
    sub: 'Open source & research projects',
    color: '#10b981',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="flex justify-center lg:justify-start mb-10 lg:mb-0"
    >
      <div className="relative">
        <div
          className="absolute inset-0 rounded-2xl blur-[30px] opacity-40"
          style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)' }}
        />

        <div
          className="relative w-52 h-60 md:w-60 md:h-72 rounded-2xl overflow-hidden"
          style={{
            border: '2px solid rgba(0,212,255,0.3)',
            boxShadow: '0 0 40px rgba(0,212,255,0.15), 0 0 80px rgba(124,58,237,0.1)',
          }}
        >
          {/* 
            PHOTO SLOT: Place your photo at src/assets/me.jpg (or me.png / me.webp)
            and uncomment the img tag below, then remove the placeholder div.
          */}

          <img src={me2} alt="Maniteja Gaddam" className="w-full h-full object-cover object-top" />

          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{ background: 'linear-gradient(145deg, #0d1526, #111d35)' }}
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black"
              style={{
                background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))',
                border: '2px solid rgba(0,212,255,0.25)',
                color: '#00d4ff',
              }}
            >
              MG
            </div>
          </div>
        </div>

        <div
          className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold"
          style={{
            background: 'rgba(0,212,255,0.1)',
            border: '1px solid rgba(0,212,255,0.3)',
            color: '#00d4ff',
          }}
        >
          Available for Hire ✓
        </div>
      </div>
    </motion.div>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: '#00d4ff' }}>
            01. About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-0">
            Building at the intersection of
            <span className="gradient-text block mt-1">Intelligence & Performance</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-1">
            <ProfilePhoto />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-2 space-y-5"
          >
            <p className="text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
              I am a smart Developer with a deep passion for
              building systems that are both{' '}
              <span className="text-white font-semibold">blazing fast</span> and{' '}
              <span className="text-white font-semibold">intelligently designed</span>.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#64748b' }}>
              My work spans from architecting multi-agent AI pipelines with AutoGen and LangChain,
              to writing high-throughput C++ systems and shipping full-stack web products. I thrive
              under pressure — having shipped 3 complete MVPs in 48-hour hackathon windows.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#64748b' }}>
              With 1000+ solved competitive programming problems, I approach every engineering
              challenge algorithmically — optimising for correctness first, then performance.
            </p>

            <div className="flex gap-4 pt-4 flex-wrap">
              <a
                href="https://github.com/manitejagaddam"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
                style={{
                  background: 'rgba(0,212,255,0.08)',
                  border: '1px solid rgba(0,212,255,0.25)',
                  color: '#00d4ff',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,212,255,0.15)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,212,255,0.08)'}
              >
                View GitHub →
              </a>
              <a
                href="https://leetcode.com/u/Maniteja_Gaddam/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
                style={{
                  background: 'rgba(124,58,237,0.08)',
                  border: '1px solid rgba(124,58,237,0.25)',
                  color: '#a855f7',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(124,58,237,0.15)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(124,58,237,0.08)'}
              >
                LeetCode Profile →
              </a>
              <a
                href="https://drive.google.com/file/d/17_X43WhSB4ewwoKjTiVBzQGAacirb5X9/view?usp=sharing"
                className="flex items-center gap-1.5 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
                style={{
                  background: 'rgba(16,185,129,0.08)',
                  border: '1px solid rgba(16,185,129,0.25)',
                  color: '#10b981',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(16,185,129,0.15)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(16,185,129,0.08)'}
              >
                <Download size={14} /> Resume
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {STATS.map(({ icon: Icon, value, label, sub, color }) => (
            <motion.div
              key={label}
              variants={item}
              className="p-5 rounded-2xl relative overflow-hidden group"
              style={{
                background: 'rgba(10,15,30,0.7)',
                border: `1px solid ${color}22`,
                transition: 'all 0.3s',
              }}
              whileHover={{ scale: 1.03 }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${color}0a 0%, transparent 70%)` }}
              />
              <Icon size={22} className="mb-3" style={{ color }} />
              <div className="text-3xl font-black text-white mb-1">{value}</div>
              <div className="text-sm font-semibold text-white mb-1">{label}</div>
              <div className="text-xs" style={{ color: '#64748b' }}>{sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
