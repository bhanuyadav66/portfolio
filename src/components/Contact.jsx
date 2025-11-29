import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-slate-950 text-slate-50 border-t border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        
<h2 className="text-3xl font-semibold tracking-tight mb-4">
  Get In <span className="text-indigo-400">Touch</span>
</h2>
<p className="text-sm text-slate-300 mb-10">
  I&apos;m currently looking for opportunities in Data Science, ML, and
  Full‑Stack Development. Feel free to reach out!
</p>


        <div className="flex justify-center gap-6 flex-wrap">
          {/* Email */}
          <motion.a
            href="mailto:allambhanuprakash3413@gmail.com"
            className="flex items-center justify-center w-14 h-14 rounded-2xl border border-slate-800 bg-slate-900/70"
            whileHover={{
              y: -6,
              scale: 1.08,
              boxShadow: '0 18px 45px rgba(0,0,0,0.6)',
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-cyan-300" />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/allam-bhanu-yadav/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-2xl border border-slate-800 bg-slate-900/70"
            whileHover={{
              y: -6,
              scale: 1.08,
              boxShadow: '0 18px 45px rgba(0,0,0,0.6)',
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-cyan-300" />
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/bhanuyadav66"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-2xl border border-slate-800 bg-slate-900/70"
            whileHover={{
              y: -6,
              scale: 1.08,
              boxShadow: '0 18px 45px rgba(0,0,0,0.6)',
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-cyan-300" />
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/yadavbhanu__"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-2xl border border-slate-800 bg-slate-900/70"
            whileHover={{
              y: -6,
              scale: 1.08,
              boxShadow: '0 18px 45px rgba(0,0,0,0.6)',
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-cyan-300" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
