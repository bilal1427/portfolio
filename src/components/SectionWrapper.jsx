// components/SectionWrapper.jsx
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SectionWrapper({ id, className = '', children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id={id} ref={ref} className={`py-24 relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto px-6"
      >
        {children}
      </motion.div>
    </section>
  )
}

/** Section header: label + heading + optional subtitle */
export function SectionHeader({ label, heading, sub }) {
  return (
    <div className="mb-16">
      <span className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-3 block">
        {label}
      </span>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--ink)] mb-4 leading-tight">
        {heading}
      </h2>
      {sub && (
        <p className="font-body text-[var(--ink-muted)] text-lg max-w-2xl leading-relaxed">
          {sub}
        </p>
      )}
    </div>
  )
}
