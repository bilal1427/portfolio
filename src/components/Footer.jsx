// components/Footer.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-2)]">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-[var(--ink)] flex items-center justify-center">
            <span className="font-display font-bold text-[var(--gold)] text-sm leading-none">B</span>
          </div>
          <span className="font-body text-sm text-[var(--ink-muted)]">
            © {year} Bilal Shaikh
          </span>
        </div>

        <p className="font-body text-xs text-[var(--ink-muted)]">
          Built with React · Vite · Tailwind CSS · Framer Motion
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/bilal1427/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/bilalshaikh1427/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--ink-muted)] hover:text-blue-500 transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
