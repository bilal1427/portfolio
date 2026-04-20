// components/Projects.jsx
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'
import { FaGithub as Github } from 'react-icons/fa'
import SectionWrapper, { SectionHeader } from './SectionWrapper'

const PROJECTS = [
  {
    title: 'News Aggregator App',
    description:
      'A full-stack news application built with Spring Boot REST APIs and React frontend. Fetches and categorises live news across topics with a responsive, filterable UI.',
    tags: ['Java', 'Spring Boot', 'React', 'REST API', 'MySQL'],
    github: 'https://github.com/bilal1427/',
    live: null,
    gradient: 'from-amber-500/10 to-yellow-300/5',
    accent: '#D4AF37',
    icon: '📰',
  },
  {
    title: 'Data Dashboard (Power BI)',
    description:
      'An interactive Power BI sales dashboard with KPIs, drill-through reports, custom DAX formulas, and slicers for dynamic data exploration.',
    tags: ['Power BI', 'DAX', 'Excel', 'Data Analysis'],
    github: 'https://github.com/bilal1427/',
    live: null,
    gradient: 'from-blue-500/10 to-cyan-300/5',
    accent: '#3B82F6',
    icon: '📊',
  },
  {
    title: 'Spring Boot Auth Service',
    description:
      'A JWT-based authentication microservice with role-based access control, Spring Security integration, and clean REST endpoints.',
    tags: ['Java', 'Spring Boot', 'JWT', 'Spring Security'],
    github: 'https://github.com/bilal1427/',
    live: null,
    gradient: 'from-emerald-500/10 to-teal-300/5',
    accent: '#10B981',
    icon: '🔐',
  },
  {
    title: 'Python Data Pipeline',
    description:
      'An automated ETL pipeline using Python (pandas, NumPy) to clean, transform, and visualise datasets — outputs charts and Excel reports.',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Excel'],
    github: 'https://github.com/bilal1427/',
    live: null,
    gradient: 'from-violet-500/10 to-purple-300/5',
    accent: '#8B5CF6',
    icon: '🐍',
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative p-7 rounded-2xl border border-[var(--border)] bg-gradient-to-br ${project.gradient} 
        hover:border-[${project.accent}]/30 transition-all duration-400 card-hover overflow-hidden`}
    >
      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at top right, ${project.accent}15, transparent 70%)` }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{project.icon}</span>
          <h3 className="font-display font-bold text-xl text-[var(--ink)] leading-tight">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="font-body text-[var(--ink-muted)] text-sm leading-relaxed mb-5 line-clamp-3">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 rounded-md font-mono text-xs border border-[var(--border)] text-[var(--ink-muted)] bg-[var(--bg)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-body text-sm font-medium text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors group/link"
        >
          <Github size={15} className="group-hover/link:scale-110 transition-transform" />
          Source Code
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-body text-sm font-medium text-[var(--gold)] hover:text-yellow-500 transition-colors"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-[var(--bg-2)]">
      <SectionHeader
        label="Projects"
        heading="Things I've built."
        sub="A selection of projects spanning full-stack development and data analytics."
      />
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <p className="font-body text-[var(--ink-muted)] mb-4">
          Want to see more?
        </p>
        <a
          href="https://github.com/bilal1427/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[var(--ink)] text-[var(--ink)] font-body font-medium text-sm hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300 hover:-translate-y-0.5"
        >
          <Github size={16} />
          View All on GitHub
        </a>
      </motion.div>
    </SectionWrapper>
  )
}
