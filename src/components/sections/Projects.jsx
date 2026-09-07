import React, { useState } from 'react';
import { Layers, Sparkles, ArrowRight, ShieldCheck, Cpu, Filter, Info, Code, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { portfolioData } from '../../data/portfolioData';
import TiltCard from '../ui/TiltCard';

export default function Projects({ onSelectProject }) {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('all');

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'MERN Stack', label: 'MERN Stack' },
    { id: 'AI & Safety Tech', label: 'AI & Safety Tech' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-5 position-relative">
      <div className="container-xl py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="section-tag">
            <Layers size={14} /> Full-Stack Portfolio
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text-accent">MERN & AI Projects</span>
          </h2>
          <p className="section-subtitle">
            End-to-end full-stack applications with production-grade architectures, secure JWT authentication, and responsive user interfaces.
          </p>
        </div>

        {/* Project Filter Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`btn px-3 py-2 rounded-pill small font-mono transition-smooth ${
                activeFilter === cat.id
                  ? 'btn-premium-primary'
                  : 'btn-dark bg-opacity-50 text-secondary border border-secondary border-opacity-25'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <TiltCard maxTilt={6}>
                <div
                  className="glass-panel p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
                  style={{
                    border: project.featured ? '1px solid rgba(124, 106, 247, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  {/* Glowing Top Accent Bar */}
                  <div
                    className="position-absolute top-0 start-0 end-0"
                    style={{
                      height: '3px',
                      background: `linear-gradient(90deg, ${project.accentColor || '#7c6af7'}, transparent)`
                    }}
                  />

                  <div>
                    {/* Header Badges */}
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span
                        className="glass-pill"
                        style={{
                          borderColor: project.accentColor || 'rgba(124, 106, 247, 0.4)',
                          color: project.accentColor || '#c4b5fd',
                          fontSize: '0.72rem'
                        }}
                      >
                        <Sparkles size={11} /> {project.badge}
                      </span>
                      <span className="text-muted small font-mono" style={{ fontSize: '0.72rem' }}>
                        {project.period}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="h5 font-heading text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-cyan small fw-medium mb-3" style={{ fontSize: '0.8rem' }}>
                      {project.subtitle}
                    </p>

                    {/* Short Description */}
                    <p className="text-light text-opacity-75 small mb-4 leading-relaxed" style={{ fontSize: '0.85rem' }}>
                      {project.shortDescription}
                    </p>

                    {/* Metrics Banner */}
                    {project.metrics && (
                      <div className="row g-2 mb-4">
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="col-4">
                            <div className="p-2 rounded-2 text-center" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                              <div className="text-muted" style={{ fontSize: '0.65rem' }}>{m.label}</div>
                              <div className="text-white font-mono fw-semibold" style={{ fontSize: '0.72rem' }}>{m.value}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="d-flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="badge rounded-pill px-2 py-1 font-mono"
                          style={{
                            background: 'rgba(124, 106, 247, 0.08)',
                            border: '1px solid rgba(124, 106, 247, 0.2)',
                            color: '#c4b5fd',
                            fontSize: '0.7rem'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div
                    className="d-flex align-items-center justify-content-between gap-2 pt-3 border-top border-secondary border-opacity-20 mt-auto position-relative"
                    style={{ zIndex: 10 }}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                      className="btn btn-sm text-cyan p-0 border-0 d-flex align-items-center gap-1 font-mono fw-semibold"
                      style={{ fontSize: '0.78rem', cursor: 'pointer', zIndex: 10 }}
                    >
                      <Info size={14} /> Details <ArrowRight size={13} />
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="btn-premium-primary py-1 px-3 rounded-3 d-inline-flex align-items-center gap-2 text-white text-decoration-none font-mono position-relative"
                        style={{ fontSize: '0.78rem', cursor: 'pointer', zIndex: 10 }}
                        title="View GitHub Profile"
                      >
                        <GithubIcon size={15} /> GitHub Profile <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
