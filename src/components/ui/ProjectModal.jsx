import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Sparkles, Layers, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="custom-modal-backdrop" onClick={onClose}>
      <div className="custom-modal-content p-4 p-md-5" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="d-flex align-items-start justify-content-between mb-4 pb-3 border-bottom border-secondary border-opacity-25">
          <div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="glass-pill text-uppercase" style={{ borderColor: project.accentColor, color: project.accentColor }}>
                <Sparkles size={13} /> {project.badge || project.category}
              </span>
              <span className="text-muted small font-mono">{project.period}</span>
            </div>
            <h2 className="h3 font-heading mb-1 text-white">{project.title}</h2>
            <p className="text-secondary mb-0 small">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="btn btn-dark rounded-circle p-2 border border-secondary border-opacity-50 text-white"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Overview */}
        <div className="mb-4">
          <h5 className="font-heading text-white mb-2 d-flex align-items-center gap-2">
            <Layers size={18} className="text-primary" /> Project Overview
          </h5>
          <p className="text-light text-opacity-75 leading-relaxed">
            {project.fullDescription || project.shortDescription}
          </p>
        </div>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="row g-3 mb-4">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="col-4">
                <div className="p-3 rounded-3 text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="text-muted small mb-1">{m.label}</div>
                  <div className="fw-bold font-mono text-white">{m.value}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Key Architectural Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-4">
            <h5 className="font-heading text-white mb-3 d-flex align-items-center gap-2">
              <ShieldCheck size={18} className="text-cyan" /> Key Engineering Highlights
            </h5>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="d-flex align-items-start gap-2 text-light text-opacity-75 small">
                  <CheckCircle size={16} className="text-primary flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Breakdown */}
        <div className="mb-4">
          <h5 className="font-heading text-white mb-2 d-flex align-items-center gap-2">
            <Cpu size={18} className="text-primary" /> Technologies Used
          </h5>
          <div className="d-flex flex-wrap gap-2 pt-1">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="badge rounded-pill px-3 py-2 font-mono small"
                style={{ background: 'rgba(124, 106, 247, 0.12)', border: '1px solid rgba(124, 106, 247, 0.25)', color: '#c4b5fd' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button: View on GitHub */}
        <div className="pt-3 border-top border-secondary border-opacity-25">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium-primary w-100 justify-content-center py-3 font-mono"
            >
              <GithubIcon size={18} /> View GitHub Profile <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
