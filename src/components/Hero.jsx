// components/Hero.jsx
import { motion } from 'framer-motion'
import { ArrowDown, ExternalLink } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useTypewriter } from '../hooks/useTypewriter'

const TYPEWRITER_WORDS = [
  'Java Full Stack Developer',
  'Spring Boot Engineer',
  'React Developer',
  'Data Analyst',
]

// Animated background orb
function Orb({ className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full opacity-20 blur-3xl pointer-events-none ${className}`}
      animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
      transition={{ duration: 7, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  )
}

export default function Hero() {
  const typed = useTypewriter(TYPEWRITER_WORDS, 75, 2200)

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden noise-bg">
      {/* Background orbs */}
      <Orb className="w-96 h-96 bg-[var(--gold)] top-20 -right-20" delay={0} />
      <Orb className="w-64 h-64 bg-blue-400 bottom-40 -left-10" delay={2} />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Greeting badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/5 text-[var(--gold)] font-mono text-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-[var(--ink)] mb-4"
          >
            Hi, I'm{' '}
            <span className="text-gradient-gold italic">Bilal Shaikh</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div variants={itemVariants} className="mb-5 h-10 flex items-center">
            <span className="font-mono text-xl sm:text-2xl text-[var(--ink-muted)]">
              {typed}
              <span className="animate-cursor-blink text-[var(--gold)]">|</span>
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="font-body text-lg text-[var(--ink-muted)] max-w-xl leading-relaxed mb-10"
          >
            Building scalable web applications with{' '}
            <span className="text-[var(--ink)] font-medium">Java & React</span>.
            Turning data into decisions with{' '}
            <span className="text-[var(--ink)] font-medium">Python & Power BI</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-14">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group flex items-center gap-2 px-7 py-3.5 bg-[var(--ink)] text-[var(--bg)] rounded-xl font-body font-medium text-sm hover:bg-[var(--gold)] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              View Projects
              <ExternalLink size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => scrollToSection('#contact')}
              className="group flex items-center gap-2 px-7 py-3.5 border-2 border-[var(--ink)] text-[var(--ink)] rounded-xl font-body font-medium text-sm hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-5">
            <a
              href="https://github.com/bilal1427/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors duration-200 group"
            >
              <FaGithub size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-body text-sm hidden sm:block">GitHub</span>
            </a>

            <div className="w-px h-5 bg-[var(--border)]" />

            <a
              href="https://www.linkedin.com/in/bilalshaikh1427/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 text-[var(--ink-muted)] hover:text-blue-500 transition-colors duration-200 group"
            >
              <FaLinkedin size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-body text-sm hidden sm:block">LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--ink-muted)]"
        >
          <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
