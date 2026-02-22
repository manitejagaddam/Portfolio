import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Star, X, Zap, Code2, Globe, ArrowUpRight } from 'lucide-react'

const FILTER_TAGS = ['All', 'AI/ML', 'Agentic AI', 'Web', 'Systems', 'Research', 'EdTech']

const PROJECTS = [
  {
    title: 'CodeTitan',
    tagline: 'AI-Powered Application Builder',
    description:
      'Multi-agent orchestration platform that generates production-ready full-stack applications automatically. Uses AutoGen agents for planning, coding, reviewing, and deploying — powered by asyncio for maximum concurrency.',
    longDescription:
      'CodeTitan is an ambitious multi-agent AI system that revolutionises software development. It leverages Microsoft AutoGen to coordinate specialised agents — a Planner, Coder, Reviewer, and Deployer — each responsible for a distinct phase of the dev cycle. The platform accepts a high-level project description in natural language and autonomously produces a working full-stack application.\n\nThe backend is powered by Python with asyncio enabling concurrent agent coordination with zero blocking. FastAPI exposes a streaming endpoint so users can watch the build happen in real time. The frontend (React) shows live agent thoughts, generated file trees, and code previews as they stream in.',
    tech: ['Python', 'AutoGen', 'asyncio', 'FastAPI', 'React', 'WebSockets'],
    github: 'https://github.com/manitejagaddam/Code-Titan',
    demo: null,
    color: '#00d4ff',
    stars: 2,
    badge: 'Pinned',
    tags: ['AI/ML', 'Agentic AI'],
    highlights: ['Multi-agent orchestration', 'Real-time streaming output', 'Production-ready codegen'],
  },
  {
    title: 'Multi-Chat',
    tagline: 'Multi-LLM Orchestration Platform',
    description:
      'Unified conversation layer across 5+ open-source LLMs without losing context. Compare responses, orchestrate workflows, and experiment with model routing.',
    longDescription:
      'MultiChat solves the core frustration of AI experimentation — having to restart conversations every time you switch models. It maintains a shared conversation thread that can be simultaneously sent to DeepSeek, Mistral, LLaMA, and other open-source LLMs.\n\nBuilt in TypeScript with a React frontend, the platform lets you compare model responses side-by-side, route specific types of questions to the best model, and chain outputs from one model as input to another. Perfect for AI researchers and power users who want to extract the best from every model.',
    tech: ['TypeScript', 'React', 'LangChain', 'REST APIs', 'Node.js'],
    github: 'https://github.com/manitejagaddam/Multi-Chat',
    demo: null,
    color: '#7c3aed',
    stars: 2,
    badge: 'Pinned',
    tags: ['AI/ML', 'Web', 'Agentic AI'],
    highlights: ['Context-preserving multi-LLM routing', 'Side-by-side model comparison', '5+ open-source models'],
  },
  {
    title: 'NeuroLens',
    tagline: 'Multimodal Mental Stress Detection',
    description:
      'Deep learning system combining pupil dilation, facial expressions, and physiological signals to detect mental stress with ~90% accuracy.',
    longDescription:
      'NeuroLens is a neurotech research project targeting early mental stress detection through multimodal physiological signals. The system fuses three data streams: pupil dilation measurements via webcam, facial action unit analysis (eye openness, brow furrow), and optional heart rate variability data.\n\nA custom-trained CNN processes the visual streams while a lightweight LSTM handles temporal patterns in the physiological data. The fusion model achieves ~90% classification accuracy on the test set. The project was built as a real-world application of deep learning for mental health monitoring, with potential for deployment in academic and corporate wellness settings.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Multimodal DL', 'LSTM', 'CNN'],
    github: 'https://github.com/manitejagaddam/Neuro-Lense-Pupil-Dilation',
    demo: null,
    color: '#10b981',
    stars: 0,
    badge: 'Research',
    tags: ['AI/ML', 'Research'],
    highlights: ['~90% classification accuracy', 'Multimodal sensor fusion', 'Real-time webcam inference'],
  },
  {
    title: 'Loan Lona',
    tagline: 'AI Loan Recommendation Engine',
    description:
      'React/Node.js loan recommendation system with ML-powered eligibility scoring. Pitched at the RBI Headquarters.',
    longDescription:
      'Loan Lona is a fintech product designed to democratise credit access. Users input their income, employment history, and financial profile; the ML backend scores their loan eligibility across 15+ banking and NBFC products and surfaces the best-fit options with predicted approval chances.\n\nThe system was built as a hackathon project and pitched at the Reserve Bank of India Headquarters, receiving strong interest as a tool to improve credit inclusion in underserved tier-2 and tier-3 cities. Built on React + Node.js with a Python ML service handling the scoring model.',
    tech: ['React', 'Node.js', 'Python', 'ML', 'PostgreSQL', 'REST APIs'],
    github: 'https://github.com/manitejagaddam',
    demo: "https://bright-path-loans.lovable.app",
    color: '#f59e0b',
    stars: 0,
    badge: 'RBI Pitch',
    tags: ['AI/ML', 'Web'],
    highlights: ['Pitched at RBI HQ', 'ML-powered credit scoring', '15+ banking products'],
  },
  {
    title: 'WIKI-GAME',
    tagline: 'Wikipedia Navigation Game',
    description:
      'Finds optimal link paths between Wikipedia articles using BFS with multithreading and BERT-based context matching.',
    longDescription:
      'The Wikipedia Game challenges players to navigate from one Wikipedia article to another using only hyperlinks. This project automates and enhances that challenge — given any two Wikipedia articles, the system finds the shortest link path using BFS with multithreading for parallel page crawling.\n\nBERT-based semantic embeddings guide the search heuristically, prioritising links whose titles are semantically closer to the target — dramatically reducing average path length versus pure BFS. Multilingual Wikipedia support allows cross-language path finding with automatic title translation.',
    tech: ['Python', 'BERT', 'Multithreading', 'NLP', 'BFS', 'Wikipedia API'],
    github: 'https://github.com/manitejagaddam/WIKI-GAME',
    demo: "wikigame.streamlit.app/",
    color: '#ec4899',
    stars: 0,
    badge: 'Algorithmic',
    tags: ['Systems', 'AI/ML'],
    highlights: ['BERT-guided heuristic BFS', 'Multilingual support', 'Concurrent page crawling'],
  },
  {
    title: 'Linkdln Post generator',
    tagline: 'Intelligent Agent to generate posts for Linkdln',
    description:
      'Agentic AI to generate posts for Linkdln ',
    longDescription:
      'This project is a web application that uses AI to generate posts for Linkdln. It uses LangChain to power the natural language insight generation, the backend FastAPI service processes batch data and streams reports to the React frontend. Institutions can connect their LMS via REST webhooks for automated ingestion.',
    tech: ['Python', 'LangChain', 'Streamlit'],
    github: 'https://github.com/manitejagaddam/Linkdln-Post-generator',
    demo: "https://linkedin-post-generator-apk.streamlit.app/",
    color: '#06b6d4',
    stars: 0,
    badge: 'AI',
    tags: ['AI/ML', 'Web'],
    highlights: ['LangChain insight generation', 'Agentic AI', 'Post generation'],
  },
  {
    title: 'Subtitle generator',
    tagline: 'Intelligent Agent to generate subtitles for videos',
    description:
      'Agentic AI to generate subtitles for videos ',
    longDescription:
      'This project is a web application that uses AI to generate subtitles for videos. It uses ffmpeg, whisper to power the natural language insight generation, the backend FastAPI service processes batch data and streams reports to the React frontend. Institutions can connect their LMS via REST webhooks for automated ingestion. ans provides a subtitle file which contans the time stamps and the subtitles.',
    tech: ['Python', 'ffmpeg', 'Streamlit'],
    github: 'https://github.com/manitejagaddam/Subtitle-generator',
    demo: "https://subtitlegenerator0.streamlit.app/",
    color: '#06b6d4',
    stars: 0,
    badge: 'AI',
    tags: ['AI/ML', 'Web'],
    highlights: ['ffmpeg', 'whisper', 'Agentic AI', 'Subtitle generation'],
  },
  {
    title: 'Academic Analyzer',
    tagline: 'Intelligent Student Performance AI',
    description:
      'AI platform for deep academic performance analysis with personalised feedback loops and LMS integration.',
    longDescription:
      'Academic Analyzer gives students, teachers, and institutions a powerful AI lens on academic performance. The platform ingests exam scores, assignment grades, and attendance data to produce granular insight reports — identifying weak topic areas, predicting at-risk students, and generating personalised improvement plans.\n\nBuilt with LangChain to power the natural language insight generation, the backend FastAPI service processes batch data and streams reports to the React frontend. Institutions can connect their LMS via REST webhooks for automated ingestion.',
    tech: ['Python', 'LangChain', 'React', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/manitejagaddam/Academic-Analyzer',
    demo: null,
    color: '#06b6d4',
    stars: 0,
    badge: 'EdTech',
    tags: ['AI/ML', 'EdTech', 'Web'],
    highlights: ['LangChain insight generation', 'At-risk student prediction', 'LMS webhook integration'],
  },
  {
    title: 'EmotiCam',
    tagline: 'Real-Time Emotion Recognition',
    description:
      'Real-time facial emotion detection with custom CNN, optimised for edge deployment with sub-30ms inference.',
    longDescription:
      'EmotiCam detects 7 core emotions from live webcam video in real time using a custom lightweight CNN architecture designed for edge deployment. The model was trained on a combined dataset (FER-2013 + AffectNet subsets) and post-training quantised to INT8 for sub-30ms inference on CPU — no GPU required.\n\nApplications include employee wellbeing monitoring, accessibility tools for users with social communication difficulties, and real-time feedback during presentations or interviews. The system outputs emotion probabilities with confidence intervals and supports multi-face detection in a single frame.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'CNN', 'ONNX', 'INT8 Quantisation'],
    github: 'https://github.com/manitejagaddam/EmotiCam',
    demo: null,
    color: '#8b5cf6',
    stars: 0,
    badge: 'CV',
    tags: ['AI/ML', 'Research'],
    highlights: ['<30ms CPU inference', 'INT8 quantisation', '7-class emotion detection'],
  },
  {
    title: 'Job Net',
    tagline: 'AI-Powered Job Search Companion',
    description:
      'Semantic job matching and application assistant that scores candidate fit and generates tailored cover letters.',
    longDescription:
      'Job Net is an AI-powered job search assistant that removes the guesswork from applications. Users paste a job description and their profile; the system semantically scores fit across 10+ dimensions (skills, experience, culture, growth stage) using a fine-tuned sentence transformer.\n\nFor high-fit roles, Job Net generates a tailored cover letter, identifies skill gaps to address, and estimates offer probability based on historical hiring patterns. Built with a React front-end, FastAPI backend, and LLM-powered generation layer.',
    tech: ['Python', 'LLM', 'Semantic Search', 'React', 'FastAPI', 'Transformers'],
    github: 'https://github.com/manitejagaddam/Job-Net--A-Companion-for-job-search',
    demo: "https://job-net-a-companion-for-job-search.vercel.app/",
    color: '#f97316',
    stars: 0,
    badge: 'AI Tool',
    tags: ['AI/ML', 'Web'],
    highlights: ['Semantic fit scoring', 'LLM cover letter generation', 'Skill gap analysis'],
  },
  {
    title: 'VishwAlpha EdTech',
    tagline: 'AI-Powered Personalised Learning Platform',
    description:
      'Full EdTech platform with AI skill tracking, career simulations, and adaptive learning paths.',
    longDescription:
      'VishwAlpha is the production EdTech platform built during my tenure as AI ML Developer. It combines personalised learning paths, AI-powered exam analysis, and career simulation modules into a single product used by thousands of students.\n\nThe AI backbone uses AutoGen agents to dynamically generate practice problems, analyse performance patterns, and adjust difficulty. The career simulation module lets students walk through realistic job interview scenarios with an AI interviewer that provides structured feedback. Built on a TypeScript + Python microservices architecture.',
    tech: ['TypeScript', 'Python', 'AutoGen', 'LangChain', 'React', 'PostgreSQL'],
    github: 'https://github.com/manitejagaddam/VishwAlpha-EdTech',
    demo: null,
    color: '#38bdf8',
    stars: 0,
    badge: 'EdTech',
    tags: ['AI/ML', 'EdTech', 'Web', 'Agentic AI'],
    highlights: ['Dynamic agent-generated content', 'AI interview simulator', 'Adaptive difficulty'],
  },
  {
    title: 'Idea Validator',
    tagline: 'AI Startup Idea Validation Engine',
    description:
      'Automates startup idea validation using LLM reasoning chains — analysing market size, competition and feasibility.',
    longDescription:
      'Idea Validator compresses weeks of market research into minutes. Founders input a startup idea in plain English; LangChain orchestrates a chain of specialised agents that research market size (TAM/SAM/SOM), analyse top competitors, assess technical feasibility, and evaluate regulatory risk.\n\nThe final output is an investor-ready validation report with a composite viability score, SWOT analysis, and recommended pivot strategies — all generated in under 90 seconds. Built for early-stage founders and accelerator cohorts.',
    tech: ['Python', 'LangChain', 'LLMs', 'FastAPI', 'React'],
    github: 'https://github.com/manitejagaddam/Idea-Validator',
    demo: null,
    color: '#a3e635',
    stars: 0,
    badge: 'AI Tool',
    tags: ['AI/ML', 'Agentic AI'],
    highlights: ['90-second validation reports', 'TAM/SAM/SOM analysis', 'Competitor research agents'],
  },
  {
    title: 'All-In-One AI Platform',
    tagline: 'Unified AI Tools Dashboard',
    description:
      'A single platform aggregating multiple AI utilities with a unified API and React dashboard.',
    longDescription:
      'All-In-One AI Platform is a productivity super-app that consolidates the most-used AI tools into a single interface. Text generation, image description, code review, document summarisation, and translation — all accessible from one clean dashboard without switching tabs or accounts.\n\nThe platform routes tasks to the appropriate model (GPT-class for text, CLIP for vision, CodeBERT for code) and exposes a unified REST API so developers can integrate any capability into their own apps.',
    tech: ['React', 'FastAPI', 'Multiple LLMs', 'REST', 'Python'],
    github: 'https://github.com/manitejagaddam/All-In-One-AI-Platform',
    demo: null,
    color: '#fb923c',
    stars: 0,
    badge: 'Platform',
    tags: ['AI/ML', 'Web'],
    highlights: ['Unified AI API', 'Multi-model routing', 'Single-dashboard productivity'],
  },
  {
    title: 'C++ DSA Library',
    tagline: 'High-Performance Data Structures & Algorithms',
    description:
      'Hand-written, optimised implementations of 50+ data structures and algorithms in C++ for competitive programming.',
    longDescription:
      'A battle-tested competitive programming library containing hand-optimised implementations of 50+ fundamental data structures and algorithms — AVL trees, segment trees with lazy propagation, Fenwick trees, graph algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall), string algorithms (KMP, Z-function, Suffix Arrays), and number theory.\n\nAll implementations are template-generic, thoroughly tested against online judge datasets, and optimised with cache-friendly memory layouts. This library underpins the 1000+ competitive programming solutions submitted on LeetCode, Codeforces, and Code360.',
    tech: ['C++17/20', 'STL', 'Templates', 'Competitive Programming'],
    github: 'https://github.com/manitejagaddam/C-Plus-Plus',
    demo: null,
    color: '#fb7185',
    stars: 0,
    badge: 'Systems',
    tags: ['Systems'],
    highlights: ['50+ optimised implementations', 'Template-generic API', 'OJ-tested correctness'],
  },
]

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      style={{ backdropFilter: 'blur(18px)', background: 'rgba(5,10,20,0.75)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl"
        style={{
          background: 'rgba(10,15,30,0.97)',
          border: `1px solid ${project.color}40`,
          boxShadow: `0 0 60px ${project.color}18, 0 30px 80px rgba(0,0,0,0.6)`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}80, transparent)` }}
        />

        <div className="p-7 md:p-9">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1 mr-4">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span
                  className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold"
                  style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
                >
                  {project.badge}
                </span>
                {project.demo && (
                  <span
                    className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981', border: '1px solid rgba(16,185,129,0.35)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE
                  </span>
                )}
                {project.stars > 0 && (
                  <span className="flex items-center gap-1 text-xs" style={{ color: '#f59e0b' }}>
                    <Star size={11} fill="#f59e0b" /> {project.stars}
                  </span>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-1">{project.title}</h2>
              <p className="text-base font-medium" style={{ color: project.color }}>{project.tagline}</p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 rounded-xl transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.05)', color: '#64748b' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#64748b' }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {project.highlights && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.highlights.map(h => (
                <div
                  key={h}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                  style={{ background: `${project.color}0d`, border: `1px solid ${project.color}20`, color: '#94a3b8' }}
                >
                  <Zap size={10} style={{ color: project.color }} />
                  {h}
                </div>
              ))}
            </div>
          )}

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Code2 size={14} style={{ color: project.color }} />
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#475569' }}>About the Project</span>
            </div>
            <div className="space-y-3">
              {project.longDescription.split('\n\n').map((para, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{para}</p>
              ))}
            </div>
          </div>

          <div className="mb-7">
            <div className="flex items-center gap-2 mb-3">
              <Globe size={14} style={{ color: project.color }} />
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#475569' }}>Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', color: '#e2e8f0' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#e2e8f0',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${project.color}50`; e.currentTarget.style.color = project.color }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#e2e8f0' }}
            >
              <Github size={15} /> View Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, rgba(16,185,129,0.18), rgba(6,182,212,0.18))',
                  border: '1px solid rgba(16,185,129,0.4)',
                  color: '#10b981',
                  boxShadow: '0 0 20px rgba(16,185,129,0.12)',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(16,185,129,0.25)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(16,185,129,0.12)'}
              >
                <ArrowUpRight size={15} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ project, onClick }) {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 300, damping: 30 })

  const handleMouseMove = useCallback((e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }, [x, y])

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.88 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div
        className="relative h-full rounded-2xl p-6 flex flex-col overflow-hidden transition-all duration-300"
        style={{
          background: 'rgba(10,15,30,0.8)',
          border: `1px solid ${project.color}22`,
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = `${project.color}55`}
        onMouseLeave={e => e.currentTarget.style.borderColor = `${project.color}22`}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at top left, ${project.color}0d 0%, transparent 65%)` }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}55, transparent)` }}
        />

        <div className="flex items-start justify-between mb-3 relative">
          <div className="flex-1 mr-3">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span
                className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold"
                style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
              >
                {project.badge}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-sm font-medium mt-0.5" style={{ color: project.color }}>{project.tagline}</p>
          </div>

          <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
            {project.demo && (
              <span
                className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold"
                style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981', border: '1px solid rgba(16,185,129,0.35)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE
              </span>
            )}
            {project.stars > 0 && (
              <span className="flex items-center gap-1 text-xs" style={{ color: '#f59e0b' }}>
                <Star size={12} fill="#f59e0b" /> {project.stars}
              </span>
            )}
          </div>
        </div>

        <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: '#64748b' }}>{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map(t => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-xs font-mono"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8' }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2.5 py-1 rounded-md text-xs font-mono" style={{ color: '#475569' }}>
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs font-mono transition-all duration-200" style={{ color: project.color }}>
            Click to explore →
          </span>
          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="p-1.5 rounded-lg transition-all duration-200"
              style={{ color: '#475569' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = '#475569'}
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="p-1.5 rounded-lg transition-all duration-200"
                style={{ color: '#10b981' }}
                onMouseEnter={e => e.currentTarget.style.color = '#34d399'}
                onMouseLeave={e => e.currentTarget.style.color = '#10b981'}
                aria-label="Live Demo"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.tags.includes(activeFilter))

  return (
    <section id="projects" className="section-padding relative">
      <div
        className="absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: '#00d4ff' }}>
            04. Featured Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Things I've <span className="gradient-text">Shipped</span>
          </h2>
          <p className="mt-3 text-base max-w-xl" style={{ color: '#64748b' }}>
            Click any card for the full breakdown. From AI agent pipelines to high-performance systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10 items-center"
        >
          {FILTER_TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className="px-4 py-1.5 rounded-full text-sm font-semibold font-mono transition-all duration-200 relative overflow-hidden"
              style={{
                background: activeFilter === tag
                  ? 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(124,58,237,0.2))'
                  : 'rgba(255,255,255,0.03)',
                border: activeFilter === tag ? '1px solid rgba(0,212,255,0.45)' : '1px solid rgba(255,255,255,0.08)',
                color: activeFilter === tag ? '#00d4ff' : '#64748b',
                boxShadow: activeFilter === tag ? '0 0 16px rgba(0,212,255,0.15)' : 'none',
              }}
            >
              {tag}
            </button>
          ))}
          <span className="ml-auto text-xs font-mono" style={{ color: '#334155' }}>
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </span>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-3 gap-6" style={{ perspective: '1000px' }}>
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <ProjectCard
                key={project.title}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/manitejagaddam?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#94a3b8',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.35)'; e.currentTarget.style.color = '#00d4ff' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#94a3b8' }}
          >
            <Github size={16} /> View All 93 Repos on GitHub
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
