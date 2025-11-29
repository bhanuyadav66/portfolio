import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-slate-950 text-slate-50 border-t border-slate-800"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          About
        </h2>

        <p className="text-sm text-cyan-300 mb-4">
          B.Tech in Computer Science and Engineering (CSE) – Specialization: Data Science
        </p>

        <p className="text-sm sm:text-base text-slate-300 mb-3">
          I am a final‑year CSE (Data Science) student who enjoys turning raw data into
          clear, actionable insights and building intelligent systems that solve
          real‑world problems.
        </p>

        <p className="text-sm sm:text-base text-slate-300 mb-3">
          My work spans machine learning pipelines, deep‑learning models, and full‑stack
          web applications. I am comfortable across Python, SQL, JavaScript, and the
          modern data stack, from data cleaning and feature engineering to model
          deployment and visualization.
        </p>

        <p className="text-sm sm:text-base text-slate-300">
          I am currently looking for opportunities as a Data Analyst, ML Engineer, or
          Full‑Stack Developer where I can apply my skills in Python, React, and
          cloud‑ready data solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
