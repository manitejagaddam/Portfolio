import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const SKILLS = [
  { name: 'C++', level: 95, category: 'Systems', color: '#00d4ff' },
  { name: 'Python', level: 93, category: 'AI/ML', color: '#7c3aed' },
  { name: 'React', level: 80, category: 'Frontend', color: '#61dafb' },
  { name: 'LangChain', level: 85, category: 'AI/ML', color: '#10b981' },
  { name: 'Natural Language Processing', level: 70, category: 'AI/ML', color: '#10b981' },
  { name: 'RAG', level: 82, category: 'Agentic AI', color: '#10b981' },
  { name: 'Deep Agents', level: 72, category: 'Agentic AI', color: '#10b981' },
  { name: 'TensorFlow', level: 80, category: 'AI/ML', color: '#ff6f00' },
  { name: 'AutoGen', level: 87, category: 'Agentic AI', color: '#a855f7' },
  { name: 'FastAPI', level: 85, category: 'Backend', color: '#059669' },
  { name: 'Flask', level: 80, category: 'Backend', color: '#059669' },
  { name: 'TypeScript', level: 80, category: 'Frontend', color: '#3178c6' },
  { name: 'FAISS / VectorDB', level: 72, category: 'AI/ML', color: '#f59e0b' },
  { name: 'Node.js', level: 78, category: 'Backend', color: '#68a063' },
  { name: 'Docker / Linux', level: 76, category: 'DevOps', color: '#2496ed' },
]

const GITHUB_STATS = [
  { label: 'Public Repos', value: '93+' },
  { label: 'Stars Earned', value: '5+' },
  { label: 'Contributions', value: '∞' },
  { label: 'Followers', value: 'Growing' },
]

function SkillBar({ skill, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm text-white">{skill.name}</span>
          <span
            className="px-2 py-0.5 rounded-full text-xs font-mono"
            style={{
              background: `${skill.color}12`,
              border: `1px solid ${skill.color}25`,
              color: skill.color,
            }}
          >
            {skill.category}
          </span>
        </div>
        <span className="text-xs font-mono" style={{ color: '#64748b' }}>{skill.level}%</span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative">
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
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
            05. Skills & Activity
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Tech I <span className="gradient-text">Build With</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-lg font-bold text-white mb-8">Core Proficiencies</h3>
            <div className="space-y-5">
              {SKILLS.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} delay={i * 0.05} />
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl p-7 relative overflow-hidden"
              style={{
                background: 'rgba(10,15,30,0.7)',
                border: '1px solid rgba(0,212,255,0.2)',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at top right, rgba(0,212,255,0.06) 0%, transparent 60%)',
                }}
              />

              <div className="flex items-center gap-3 mb-2">
                <Github size={20} style={{ color: '#00d4ff' }} />
                <span className="font-bold text-white text-lg">GitHub Activity</span>
              </div>
              <p className="text-sm mb-6" style={{ color: '#64748b' }}>
                Consistently shipping code across AI, ML, and web projects.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {GITHUB_STATS.map(({ label, value }) => (
                  <div
                    key={label}
                    className="rounded-xl p-4 text-center"
                    style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.1)' }}
                  >
                    <div className="text-2xl font-black text-white">{value}</div>
                    <div className="text-xs mt-1" style={{ color: '#64748b' }}>{label}</div>
                  </div>
                ))}
              </div>

              <a
                href="https://github.com/manitejagaddam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))',
                  border: '1px solid rgba(0,212,255,0.3)',
                  color: '#00d4ff',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 25px rgba(0,212,255,0.2)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <Github size={16} /> github.com/manitejagaddam <ExternalLink size={13} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-2xl p-7"
              style={{
                background: 'rgba(10,15,30,0.7)',
                border: '1px solid rgba(124,58,237,0.2)',
              }}
            >
              <h3 className="text-white font-bold text-base mb-4">Competitive Programming</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { platform: 'LeetCode', stat: '1000+', link: 'https://leetcode.com/u/Maniteja_Gaddam/', color: '#f59e0b' },
                  { platform: 'CodeForces', stat: 'Active', link: 'https://codeforces.com/profile/psycho1107', color: '#3b82f6' },
                  { platform: 'Code360', stat: 'Top 10%', link: 'https://www.naukri.com/code360/profile/ManitejaGaddam', color: '#10b981' },
                ].map(({ platform, stat, link, color }) => (
                  <a
                    key={platform}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl p-4 text-center block transition-all duration-200 group"
                    style={{ background: `${color}0d`, border: `1px solid ${color}25` }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = `${color}55`}
                    onMouseLeave={e => e.currentTarget.style.borderColor = `${color}25`}
                  >
                    <div className="text-lg font-black" style={{ color }}>{stat}</div>
                    <div className="text-xs mt-1" style={{ color: '#64748b' }}>{platform}</div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
