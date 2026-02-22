import { motion } from 'framer-motion'
import {
  Brain,
  Bot,
  Globe,
  Cpu,
  Eye,
  GraduationCap,
  ArrowRight,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Brain,
    title: 'AI/ML Engineering',
    tagline: 'Production-grade intelligence',
    description:
      'End-to-end ML pipeline design and deployment — from data preprocessing and model training to RAG systems, vector search, and scalable inference APIs.',
    stack: ['TensorFlow', 'PyTorch', 'LangChain', 'FAISS', 'FastAPI'],
    color: '#00d4ff',
    glow: 'rgba(0,212,255,0.12)',
  },
  {
    icon: Bot,
    title: 'Agentic AI Systems',
    tagline: 'Autonomous multi-agent pipelines',
    description:
      'Design and orchestrate multi-agent workflows using AutoGen and LangChain agents — from exam analysers to autonomous dev tools and AI copilots.',
    stack: ['AutoGen', 'LangChain', 'CrewAI', 'asyncio', 'Python'],
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.12)',
  },
  {
    icon: Globe,
    title: 'Full-Stack Web Development',
    tagline: 'Scalable products from idea to launch',
    description:
      'Ship complete web products — React/TypeScript frontends, Node.js or FastAPI backends, database design, and API architecture. From MVP to production.',
    stack: ['React', 'TypeScript', 'Node.js', 'FastAPI', 'PostgreSQL'],
    color: '#10b981',
    glow: 'rgba(16,185,129,0.12)',
  },
  {
    icon: Cpu,
    title: 'High-Performance C++ Systems',
    tagline: 'Low-latency, concurrent programming',
    description:
      'Write high-throughput, concurrent systems in modern C++. Data structures, algorithm optimisation, game engines, competitive programming toolkits, and performance-critical software.',
    stack: ['C++17/20', 'STL', 'Multithreading', 'SIMD', 'CMake'],
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.12)',
  },
  {
    icon: Eye,
    title: 'Computer Vision & Deep Learning',
    tagline: 'Vision systems that understand the world',
    description:
      'Build and deploy custom CNN architectures, object detection pipelines, facial analysis systems, and multimodal deep learning models for research or production.',
    stack: ['OpenCV', 'TensorFlow', 'YOLO', 'PyTorch', 'ONNX'],
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.12)',
  },
  {
    icon: GraduationCap,
    title: 'Technical Training & Consulting',
    tagline: 'From zero to production-ready',
    description:
      'Structured bootcamps and 1-on-1 mentorship in AI/ML, full-stack dev, and competitive programming. Startup technical consulting from ideation to first investor demo.',
    stack: ['Curriculum Design', 'Mentorship', 'Code Review', 'MVP Scoping'],
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.12)',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(0,212,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: '#00d4ff' }}>
              02. Services
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              What I <span className="gradient-text">Deliver</span>
            </h2>
            <p className="mt-3 text-base max-w-xl" style={{ color: '#64748b' }}>
              Focused expertise across the full AI/ML and engineering spectrum — from research to production.
            </p>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold self-start md:self-auto whitespace-nowrap transition-all duration-300 flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))',
              border: '1px solid rgba(0,212,255,0.3)',
              color: '#00d4ff',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 24px rgba(0,212,255,0.2)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            Work With Me <ArrowRight size={15} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative rounded-2xl p-7 flex flex-col overflow-hidden cursor-default"
                style={{
                  background: 'rgba(10,15,30,0.75)',
                  border: `1px solid ${svc.color}20`,
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `${svc.color}50`}
                onMouseLeave={e => e.currentTarget.style.borderColor = `${svc.color}20`}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 20% 0%, ${svc.glow} 0%, transparent 60%)` }}
                />
                <div
                  className="absolute top-0 left-8 right-8 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${svc.color}50, transparent)`,
                    opacity: 0,
                    transition: 'opacity 0.3s',
                  }}
                  ref={el => {
                    if (el) {
                      el.closest('.group').addEventListener('mouseenter', () => el.style.opacity = '1')
                      el.closest('.group').addEventListener('mouseleave', () => el.style.opacity = '0')
                    }
                  }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{
                    background: `${svc.color}12`,
                    border: `1px solid ${svc.color}28`,
                  }}
                >
                  <Icon size={22} style={{ color: svc.color }} />
                </div>

                <div className="mb-1 flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-white leading-snug">{svc.title}</h3>
                </div>
                <p className="text-xs font-mono mb-3" style={{ color: svc.color }}>{svc.tagline}</p>
                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#64748b' }}>
                  {svc.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {svc.stack.map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono"
                      style={{
                        background: `${svc.color}0d`,
                        border: `1px solid ${svc.color}22`,
                        color: '#94a3b8',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
