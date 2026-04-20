// components/Skills.jsx
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper, { SectionHeader } from './SectionWrapper'

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    emoji: '🎨',
    skills: [
      { name: 'React', level: 88 },
      { name: 'JavaScript', level: 85 },
      { name: 'Tailwind CSS', level: 82 },
      { name: 'HTML / CSS', level: 90 },
    ],
  },
  {
    category: 'Backend',
    emoji: '⚙️',
    skills: [
      { name: 'Java', level: 92 },
      { name: 'Spring Boot', level: 88 },
      { name: 'REST APIs', level: 86 },
      { name: 'SQL / MySQL', level: 80 },
    ],
  },
  {
    category: 'Data & Analytics',
    emoji: '📊',
    skills: [
      { name: 'Python', level: 78 },
      { name: 'Power BI', level: 80 },
      { name: 'Excel Formulas', level: 85 },
      { name: 'Data Analysis', level: 82 },
    ],
  },
]

function ProgressBar({ name, level, delay }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-body text-sm font-medium text-[var(--ink)]">{name}</span>
        <span className="font-mono text-xs text-[var(--gold)]">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[var(--gold)] to-yellow-300"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

function SkillCard({ category, emoji, skills, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="p-7 rounded-2xl border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--gold)]/30 transition-colors duration-300"
    >
      <div className="flex items-center gap-3 mb-7">
        <span className="text-2xl">{emoji}</span>
        <h3 className="font-display font-bold text-lg text-[var(--ink)]">{category}</h3>
      </div>
      {skills.map((skill, i) => (
        <ProgressBar key={skill.name} {...skill} delay={index * 0.1 + i * 0.08} />
      ))}
    </motion.div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader
        label="Technical Skills"
        heading="What I bring to the table."
        sub="A blend of backend engineering, modern frontend development, and data analytical skills."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((group, i) => (
          <SkillCard key={group.category} {...group} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
