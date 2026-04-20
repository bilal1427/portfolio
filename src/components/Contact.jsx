// components/Contact.jsx
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import SectionWrapper, { SectionHeader } from './SectionWrapper'

function InputField({ label, id, type = 'text', rows, placeholder, value, onChange, required }) {
  const Tag = rows ? 'textarea' : 'input'
  return (
    <div>
      <label htmlFor={id} className="block font-body text-sm font-medium text-[var(--ink)] mb-2">
        {label} {required && <span className="text-[var(--gold)]">*</span>}
      </label>
      <Tag
        id={id}
        type={type}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--ink)] 
          font-body text-sm placeholder:text-[var(--ink-muted)] 
          focus:outline-none focus:border-[var(--gold)]/60 focus:ring-2 focus:ring-[var(--gold)]/10
          transition-all duration-200 resize-none"
      />
    </div>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    // Simulate send (replace with EmailJS / Formspree in production)
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <SectionWrapper id="contact">
      <div ref={ref} className="grid md:grid-cols-2 gap-16">
        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            label="Contact"
            heading={<>Let's work<br />together.</>}
            sub="Have a project in mind or just want to say hello? I'd love to hear from you."
          />

          <div className="space-y-4 mb-10">
            <a
              href="mailto:bilalshaikh1427@gmail.com"
              className="flex items-center gap-3 text-[var(--ink-muted)] hover:text-[var(--gold)] transition-colors group"
            >
              <div className="w-9 h-9 rounded-xl bg-[var(--bg-2)] border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--gold)]/40 transition-colors">
                <Mail size={16} />
              </div>
              <span className="font-body text-sm">bilalshaikh1427@gmail.com</span>
            </a>

            <div className="flex items-center gap-3 text-[var(--ink-muted)]">
              <div className="w-9 h-9 rounded-xl bg-[var(--bg-2)] border border-[var(--border)] flex items-center justify-center">
                <MapPin size={16} />
              </div>
              <span className="font-body text-sm">Available Remotely · India</span>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            <a
              href="https://github.com/bilal1427/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-xl border border-[var(--border)] bg-[var(--bg-2)] flex items-center justify-center text-[var(--ink-muted)] hover:text-[var(--ink)] hover:border-[var(--ink)]/30 transition-all duration-200 hover:-translate-y-0.5 card-hover"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/bilalshaikh1427/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-xl border border-[var(--border)] bg-[var(--bg-2)] flex items-center justify-center text-[var(--ink-muted)] hover:text-blue-500 hover:border-blue-400/40 transition-all duration-200 hover:-translate-y-0.5 card-hover"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center gap-4 py-16 text-center"
            >
              <CheckCircle size={48} className="text-emerald-500" />
              <h3 className="font-display text-2xl font-bold text-[var(--ink)]">Message Sent!</h3>
              <p className="font-body text-[var(--ink-muted)]">Thanks for reaching out. I'll get back to you soon.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 px-5 py-2 rounded-lg border border-[var(--border)] font-body text-sm text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <InputField
                label="Name"
                id="name"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange('name')}
                required
              />
              <InputField
                label="Email"
                id="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange('email')}
                required
              />
              <InputField
                label="Message"
                id="message"
                rows={5}
                placeholder="Tell me about your project or just say hi..."
                value={form.message}
                onChange={handleChange('message')}
                required
              />
              <button
                type="submit"
                disabled={sending}
                className="group w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[var(--ink)] text-[var(--bg)] font-body font-medium text-sm
                  hover:bg-[var(--gold)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed
                  hover:-translate-y-0.5 hover:shadow-lg"
              >
                {sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
