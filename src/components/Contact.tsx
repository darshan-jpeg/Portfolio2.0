import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Mail, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare,
  MapPin
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { BorderGlow } from './BorderGlow';
import { ShinyText } from './ShinyText';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `New Portfolio Inquiry: ${formData.subject || 'Direct Message'}`,
          subject: formData.subject,
          message: formData.message,
          _template: 'table'
        })
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback: open mailto
        window.open(
          `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`,
          '_blank'
        );
        setFormSubmitted(true);
      }
    } catch {
      // Offline / network fallback to mailto
      window.open(
        `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`,
        '_blank'
      );
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen min-h-[100dvh] flex flex-col justify-center py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative w-full overflow-hidden snap-start">
      <div className="relative z-10 space-y-10 sm:space-y-14 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-5 sm:pb-6 border-b border-black/8 dark:border-white/10">
          <div className="space-y-2 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-black/4 dark:bg-white/6 border border-black/8 dark:border-white/10 text-neutral-600 dark:text-neutral-400"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Initiate Collaboration</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2] pb-0.5 flex items-baseline gap-2.5 sm:gap-3.5"
            >
              <span className="text-xl sm:text-2xl text-neutral-400 dark:text-neutral-600 font-mono font-medium">08</span>
              <ShinyText text="Let's build something great." speed={3} />
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase pb-1"
          >
            Available for Opportunities.
          </motion.div>
        </div>

        {/* Primary Social & Direct Contact Glass Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full">
          {/* LinkedIn Button */}
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 25, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 140, damping: 18, delay: 0.15 }}
            whileHover={{ y: -3, scale: 1.03, transition: { duration: 0.15 } }}
            className="flex-1 sm:flex-none text-center px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white dark:bg-[#15151c] border border-black/10 dark:border-white/12 shadow-sm text-black dark:text-white transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
            <span>→</span>
          </motion.a>

          {/* GitHub Button */}
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 25, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 140, damping: 18, delay: 0.22 }}
            whileHover={{ y: -3, scale: 1.03, transition: { duration: 0.15 } }}
            className="flex-1 sm:flex-none text-center px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white dark:bg-[#15151c] border border-black/10 dark:border-white/12 shadow-sm text-black dark:text-white transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
            <span>→</span>
          </motion.a>

          {/* Email Button */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            initial={{ opacity: 0, y: 25, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 140, damping: 18, delay: 0.29 }}
            whileHover={{ y: -3, scale: 1.03, transition: { duration: 0.15 } }}
            className="flex-1 sm:flex-none text-center px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-black text-white dark:bg-white dark:text-black hover:opacity-90 shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
            <span>→</span>
          </motion.a>

          {/* Copy Direct Email Button */}
          <motion.button
            onClick={copyEmail}
            initial={{ opacity: 0, y: 25, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 140, damping: 18, delay: 0.36 }}
            whileHover={{ y: -3, scale: 1.03, transition: { duration: 0.15 } }}
            className="flex-1 sm:flex-none text-center px-4 py-3 rounded-full text-[11px] sm:text-xs font-mono bg-black/4 dark:bg-white/6 hover:bg-black/8 dark:hover:bg-white/10 border border-black/6 dark:border-white/10 text-neutral-700 dark:text-neutral-300 transition-all flex items-center justify-center gap-1.5 active:scale-95 truncate cursor-pointer"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-black dark:text-white shrink-0" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{personalInfo.email}</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Interactive Monochrome Glass Message Form with BorderGlow */}
        <motion.div
          initial={{ opacity: 0, y: 45, rotateX: 8, scale: 0.95, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
          className="max-w-2xl mx-auto w-full perspective-1000"
        >
          <BorderGlow
            borderRadius={28}
            edgeSensitivity={28}
            glowRadius={38}
            className="w-full"
          >
            <div className="p-5 sm:p-10 w-full">
              <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-black/6 dark:border-white/8 mb-5 sm:mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/5 dark:bg-white/8 text-black dark:text-white flex items-center justify-center">
                    <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <h3 className="font-bold text-black dark:text-white text-sm sm:text-base">
                    Send Direct Message
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-[11px] sm:text-xs font-mono text-neutral-500">
                  <MapPin className="w-3 h-3" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-10 text-center space-y-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white mx-auto flex items-center justify-center">
                      <Check className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-black dark:text-white">
                      Message Dispatched
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-sm mx-auto">
                      Thank you for reaching out! Your message was delivered directly to Darshan.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="mt-2 text-xs font-mono underline hover:text-black dark:hover:text-white text-neutral-500 transition-colors cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-1">
                        <label className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 sm:py-3 rounded-2xl bg-black/4 dark:bg-white/5 border border-black/6 dark:border-white/8 text-black dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-black/30 dark:focus:border-white/30 text-xs sm:text-sm transition-colors"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                          Your Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="Email ID"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 sm:py-3 rounded-2xl bg-black/4 dark:bg-white/5 border border-black/6 dark:border-white/8 text-black dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-black/30 dark:focus:border-white/30 text-xs sm:text-sm transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                        Subject / Topic
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="What are you thinking?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-2xl bg-black/4 dark:bg-white/5 border border-black/6 dark:border-white/8 text-black dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-black/30 dark:focus:border-white/30 text-xs sm:text-sm transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell me what you're thinking..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-2xl bg-black/4 dark:bg-white/5 border border-black/6 dark:border-white/8 text-black dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-black/30 dark:focus:border-white/30 text-xs sm:text-sm transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 sm:py-3.5 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-semibold text-xs sm:text-sm hover:opacity-90 disabled:opacity-60 transition-all shadow-md flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      )}
                      <span>{isSubmitting ? 'Dispatching Message...' : 'Send Message'}</span>
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </BorderGlow>
        </motion.div>
      </div>
    </section>
  );
};
