import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="text-xl font-semibold text-slate-100 tracking-tight">
          Allam<span className="text-cyan-400"> Bhanu</span>
        </a>

        <div className="flex gap-6 text-sm text-slate-200">
          <a
            href="#about"
            className="nav-link"
          >
            About
          </a>
          <a
            href="#skills"
            className="nav-link"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="nav-link"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="nav-link"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
