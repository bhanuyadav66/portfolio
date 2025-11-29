import React from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Traffic Sign Classifier',
    role: 'Deep Learning Engineer',
    desc: 'CNN‑based model for German traffic signs, trained on GTSRB with TensorFlow and deployed via Flask API.',
    tags: ['Python', 'TensorFlow', 'CNN', 'Flask'],
    github: 'https://github.com/bhanuyadav66/Traffic-Sign-Classifier',
    demo: '',
  },
  {
    title: 'Road Accident Prediction',
    role: 'Data Scientist',
    desc: 'Predictive analytics pipeline to identify high‑risk zones using weather, time and traffic features with regression models.',
    tags: ['scikit‑learn', 'Pandas', 'Matplotlib', 'Power BI'],
    github: 'https://github.com/bhanuyadav66/Road-Accident-Prediction',
    demo: '',
  },
  {
    title: 'Amazon Sentiment Analysis',
    role: 'NLP Engineer',
    desc: 'NLP workflow that processes Amazon product reviews to classify sentiment and surface customer pain points.',
    tags: ['Python', 'NLP', 'NLTK', 'Text Mining'],
    github: 'https://github.com/bhanuyadav66/Sentiment-Analysis-On-Poduct-Reviews',
    demo: '',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-slate-950 text-slate-50 border-t border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
  <div>
    <h2 className="text-3xl font-semibold tracking-tight mb-2">
      <span className="text-indigo-400">Featured</span> Work
    </h2>
    <p className="text-sm text-slate-400">
      A selection of data‑science, ML and full‑stack projects.
    </p>
  </div>
</div>


        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className="relative flex flex-col rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-lg shadow-slate-950/60"

              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: '0 18px 45px rgba(0,0,0,0.6)',
              }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <p className="text-xs text-cyan-300 mb-1">{project.role}</p>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-1">
                {project.title}
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </h3>
              <p className="text-sm text-slate-300 mb-4">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full bg-slate-800 text-[11px] text-slate-200 border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3 text-xs">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 transition"
                  >
                    <Github className="w-3 h-3" />
                    <span>GitHub</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-cyan-500 text-slate-950 font-medium hover:bg-cyan-400 transition"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
