import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, MessageSquare } from 'lucide-react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    window.location.href = `mailto:manitejagaddam1@gmail.com?subject=Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`
    setSent(true)
  }

  return (
    <section id="contact" className="section-padding relative">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
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
            06. Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Let's <span className="gradient-text">Build Together</span>
          </h2>
          <p className="mt-3 text-base max-w-lg" style={{ color: '#64748b' }}>
            Open to full-time roles, research collaborations, and interesting side projects. Drop a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {[
              { Icon: Mail, label: 'Email', value: 'manitejagaddam1@gmail.com', href: 'mailto:manitejagaddam1@gmail.com', color: '#00d4ff' },
              { Icon: MapPin, label: 'Location', value: 'Hyderabad, Telangana, India', href: '#', color: '#7c3aed' },
              { Icon: MessageSquare, label: 'Response Time', value: 'Usually within 24 hours', href: '#', color: '#10b981' },
            ].map(({ Icon, label, value, href, color }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ background: 'rgba(10,15,30,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div
                  className="p-2.5 rounded-xl flex-shrink-0"
                  style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 mb-0.5">{label}</div>
                  {href.startsWith('mailto') ? (
                    <a href={href} className="text-sm font-medium text-white hover:text-cyan-400 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-white">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {[
              { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Elon Musk' },
              { name: 'email', label: 'Email Address', type: 'email', placeholder: 'elon@tesla.com' },
            ].map(({ name, label, type, placeholder }) => (
              <div key={name}>
                <label className="block text-xs font-mono text-slate-500 mb-2 uppercase tracking-widest">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200"
                  style={{
                    background: 'rgba(10,15,30,0.8)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
            ))}
            <div>
              <label className="block text-xs font-mono text-slate-500 mb-2 uppercase tracking-widest">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity or project..."
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none resize-none transition-all duration-200"
                style={{
                  background: 'rgba(10,15,30,0.8)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onFocus={e => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'}
                onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              style={{
                background: sent ? 'rgba(16,185,129,0.2)' : 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                color: sent ? '#10b981' : '#ffffff',
                border: sent ? '1px solid rgba(16,185,129,0.4)' : 'none',
                boxShadow: sent ? 'none' : '0 0 30px rgba(0,212,255,0.25)',
              }}
            >
              {sent ? '✓ Opening mail client...' : (<><Send size={15} /> Send Message</>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
