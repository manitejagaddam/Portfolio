import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const EXPERIENCES = [
  {
    company: 'VishwAlpha',
    role: 'AI ML Developer',
    period: '2024 – Present',
    location: 'Remote',
    color: '#00d4ff',
    highlights: [
      'Architected a Multi-Agent Exam Analyser using Microsoft AutoGen, enabling dynamic agent collaboration for personalised student feedback at scale.',
      'Built a RAG-powered chatbot achieving sub-second retrieval latency via optimised vector indexing with FAISS and LangChain.',
      'Designed the core AI backbone for the VishwAlpha EdTech platform — encompassing skill tracking, career simulations, and adaptive learning paths.',
      'Led integration of TypeScript microservices with Python AI modules through an async event bus architecture.',
    ],
    tech: ['AutoGen', 'LangChain', 'FAISS', 'Python', 'TypeScript', 'RAG'],
  },
  {
    company: 'Zenre8',
    role: 'Founding Member & Trainer',
    period: '2023 – 2024',
    location: 'Hybrid',
    color: '#7c3aed',
    highlights: [
      'Co-founded the organisation and structured a curriculum training 95+ learners in AI, ML, and full-stack development.',
      'Mentored early-stage startup founders through ideation-to-MVP journeys, with multiple teams reaching seed funding rounds.',
      'Designed and delivered hands-on bootcamps covering Python, React, ML pipelines, and system design.',
      'Facilitated connections between learners and industry professionals, growing the cohort network to 150+ members.',
    ],
    tech: ['Python', 'React', 'ML', 'System Design', 'Mentorship'],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative">
      <div
        className="absolute top-1/2 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translateY(-50%)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: '#00d4ff' }}>
            03. Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Where I've <span className="gradient-text">Built Things</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(180deg, transparent, #00d4ff 20%, #7c3aed 80%, transparent)' }}
          />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
                className="md:pl-20 relative"
              >
                <div
                  className="absolute left-6 top-6 w-4 h-4 rounded-full hidden md:block"
                  style={{
                    background: exp.color,
                    boxShadow: `0 0 16px ${exp.color}88`,
                    transform: 'translateX(-50%)',
                  }}
                />

                <div
                  className="rounded-2xl p-7 relative overflow-hidden group transition-all duration-300"
                  style={{
                    background: 'rgba(10,15,30,0.7)',
                    border: `1px solid ${exp.color}22`,
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = `${exp.color}55`}
                  onMouseLeave={e => e.currentTarget.style.borderColor = `${exp.color}22`}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at top left, ${exp.color}08 0%, transparent 60%)` }}
                  />

                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} style={{ color: exp.color }} />
                        <span className="text-xs font-mono tracking-widest uppercase" style={{ color: exp.color }}>
                          {exp.company}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-sm" style={{ color: '#64748b' }}>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-5">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-mono font-medium"
                        style={{
                          background: `${exp.color}12`,
                          border: `1px solid ${exp.color}30`,
                          color: exp.color,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
