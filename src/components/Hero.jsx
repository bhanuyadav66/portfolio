import React from 'react';
import { Download, ChevronRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-transparent text-slate-50 pt-20"
    >
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-[3fr,2fr] gap-10 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
            ALLAM BHANU <span className="text-indigo-400">PRAKASH</span>
          </h1>

          <p className="text-lg sm:text-xl text-cyan-300 font-medium mb-4">
            Python Specialist &amp; Machine Learning Engineer
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mb-3">
            I build data‑driven applications and intelligent systems using Python, ML,
            and modern web technologies — from predictive models and NLP pipelines
            to full‑stack dashboards and portfolio tools.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 mb-8">
            Currently building: an AI‑powered resume &amp; portfolio builder for students and
            early‑career professionals.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 text-slate-950 font-medium hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/30"
            >
              <span>View My Code</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="/ALLAM_RESUME.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-600 text-slate-100 hover:border-cyan-400 hover:text-cyan-300 transition"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Right: Card */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl">
            <p className="text-xs text-cyan-300 mb-2">Current Focus</p>
            <ul className="text-sm text-slate-200 space-y-1 mb-4">
              <li>• Data analysis &amp; visualization with Python, SQL, and Power BI</li>
              <li>• Machine learning pipelines using scikit‑learn &amp; TensorFlow</li>
              <li>• Full‑stack apps with React, Node.js, and MongoDB</li>
              <li>• AI‑powered resume &amp; portfolio builder project</li>
            </ul>

            <p className="text-[11px] text-slate-500">
              Exploring ways to combine ML models, clean UI, and automation to help
              students showcase their skills more effectively.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
