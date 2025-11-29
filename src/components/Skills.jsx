import React from 'react';

const skillGroups = [
  {
    title: 'Programming & Core',
    skills: ['Python', 'Java', 'JavaScript (ES6+)', 'OOP', 'DSA basics'],
  },
  {
    title: 'Data & Machine Learning',
    skills: [
      'Pandas, NumPy',
      'scikit‑learn, TensorFlow',
      'Data cleaning & feature engineering',
      'Regression, classification, clustering',
      'Model evaluation & tuning',
    ],
  },
  {
    title: 'Databases & Analytics',
    skills: ['SQL', 'MongoDB', 'Power BI (learning)', 'Data visualization'],
  },
  {
    title: 'Web & Tools',
    skills: [
      'React + Vite',
      'Node.js & Express',
      'REST APIs',
      'Git & GitHub',
      'VS Code, Jupyter',
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-slate-950 text-slate-50 border-t border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        
<h2 className="text-3xl font-semibold tracking-tight mb-6">
  Technical <span className="text-indigo-400">Skills</span>
</h2>


        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-semibold mb-3 text-cyan-300">
                {group.title}
              </h3>
              <ul className="space-y-1 text-sm text-slate-200">
                {group.skills.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
