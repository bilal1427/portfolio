// components/About.jsx
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Code2, Database, BarChart3 } from 'lucide-react'
import SectionWrapper, { SectionHeader } from './SectionWrapper'

const HIGHLIGHTS = [
  { icon: Code2, label: 'Full Stack Dev', value: 'Java & React' },
  { icon: Database, label: 'Backend', value: 'Spring Boot' },
  { icon: BarChart3, label: 'Data Tools', value: 'Power BI & Python' },
  { icon: Award, label: 'Certified', value: 'Data Analysis' },
]

function HighlightCard({ icon: Icon, label, value, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] hover:border-[var(--gold)]/40 transition-all duration-300 card-hover"
    >
      <div className="w-10 h-10 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center mb-3 group-hover:bg-[var(--gold)]/20 transition-colors">
        <Icon size={18} className="text-[var(--gold)]" />
      </div>
      <p className="font-mono text-xs text-[var(--ink-muted)] uppercase tracking-wider mb-1">{label}</p>
      <p className="font-body font-semibold text-[var(--ink)]">{value}</p>
    </motion.div>
  )
}

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-[var(--bg-2)]">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Text block */}
        <div>
          <SectionHeader
            label="About Me"
            heading={<>The story so<br />far.</>}
          />
          <div className="space-y-5 font-body text-[var(--ink-muted)] leading-relaxed text-[1.0625rem]">
            <p>
              I'm a <strong className="text-[var(--ink)] font-semibold">Java Full Stack Developer</strong> passionate
              about building robust, scalable web applications using <strong className="text-[var(--ink)] font-semibold">
              Spring Boot</strong> on the backend and <strong className="text-[var(--ink)] font-semibold">React</strong> on
              the frontend.
            </p>
            <p>
              Beyond code, I bring a strong analytical edge — with skills in
              {' '}<strong className="text-[var(--ink)] font-semibold">Python</strong>,{' '}
              <strong className="text-[var(--ink)] font-semibold">Excel formulas</strong>, and
              {' '}<strong className="text-[var(--ink)] font-semibold">Power BI</strong>, I can turn raw
              data into actionable insights. This dual expertise lets me bridge the gap between
              engineering and business intelligence.
            </p>
            <p>
              I hold a <strong className="text-[var(--ink)] font-semibold">Data Analysis Certification</strong> and
              am constantly learning new technologies to stay ahead in the fast-moving tech landscape.
            </p>
          </div>

          {/* Cert badge */}
          <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-[var(--gold)]/30 bg-[var(--gold)]/5">
            <Award size={18} className="text-[var(--gold)]" />
            <span className="font-body font-medium text-[var(--ink)] text-sm">
              Data Analysis Certified
            </span>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 gap-4">
          {HIGHLIGHTS.map((item, i) => (
            <HighlightCard key={item.label} {...item} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
