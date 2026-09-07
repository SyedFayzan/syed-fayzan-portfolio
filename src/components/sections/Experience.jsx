import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronRight, Building, Sparkles, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { LinkedinIcon } from '../ui/Icons';
import TiltCard from '../ui/TiltCard';

export default function Experience() {
  const { experience, socials } = portfolioData;

  return (
    <section id="experience" className="py-5 position-relative">
      <div className="container-xl py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="section-tag">
            <Briefcase size={14} /> Professional Journey
          </div>
          <h2 className="section-title">
            Internships & <span className="gradient-text-accent">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software development experience across real-world industry applications and engineering teams.
          </p>
        </div>

        {/* Experience Cards / Timeline */}
        <div className="row g-4">
          {experience.map((item, idx) => (
            <div key={idx} className={item.featured ? "col-12" : "col-lg-4 col-md-6"}>
              <TiltCard maxTilt={item.featured ? 4 : 8}>
                <div
                  className="glass-panel p-4 p-md-5 h-100 position-relative overflow-hidden d-flex flex-column justify-content-between"
                  style={{
                    border: item.featured ? '1px solid rgba(124, 106, 247, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                    background: item.featured ? 'rgba(18, 20, 32, 0.85)' : 'rgba(14, 16, 25, 0.7)'
                  }}
                >
                  <div>
                    {/* Status / Badge */}
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <span
                          className="glass-pill"
                          style={{
                            background: item.featured ? 'rgba(124, 106, 247, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                            borderColor: item.featured ? 'rgba(124, 106, 247, 0.4)' : 'rgba(255, 255, 255, 0.15)',
                            color: item.featured ? '#c4b5fd' : '#94a3b8'
                          }}
                        >
                          <Sparkles size={12} /> {item.badge || item.type}
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 text-muted small font-mono">
                        <Calendar size={13} className="text-cyan" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Role & Company Header */}
                    <div className="mb-4">
                      <div className="d-flex flex-wrap align-items-start justify-content-between gap-2">
                        <div>
                          <h3 className={`font-heading text-white mb-1 ${item.featured ? 'h4' : 'h5'}`}>
                            {item.role}
                          </h3>
                          <div className="d-flex flex-wrap align-items-center gap-3 text-secondary small">
                            <span className="fw-semibold text-cyan d-flex align-items-center gap-1">
                              <Building size={14} /> {item.company}
                            </span>
                            <span>•</span>
                            <span className="d-flex align-items-center gap-1">
                              <MapPin size={13} /> {item.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-light text-opacity-80 small mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Bullet Responsibilities */}
                    {item.responsibilities && (
                      <div className="mb-4">
                        <h6 className="font-heading text-white small text-uppercase mb-2 font-mono" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>
                          Key Responsibilities & Deliverables:
                        </h6>
                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                          {item.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="d-flex align-items-start gap-2 text-light text-opacity-75 small">
                              <CheckCircle size={15} className="text-primary flex-shrink-0 mt-1" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Technologies Tags & LinkedIn Button */}
                  <div
                    className="pt-3 border-top border-secondary border-opacity-20 mt-4 position-relative"
                    style={{ zIndex: 10 }}
                  >
                    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-3">
                      <div className="d-flex flex-wrap gap-2">
                        {item.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="badge rounded-pill px-2 py-1 font-mono"
                            style={{
                              background: 'rgba(255, 255, 255, 0.04)',
                              border: '1px solid rgba(255, 255, 255, 0.08)',
                              color: '#94a3b8',
                              fontSize: '0.72rem'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={item.linkedinUrl || socials.linkedin.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="btn-premium-outline btn-sm font-mono d-inline-flex align-items-center gap-2 flex-shrink-0 position-relative"
                        style={{
                          fontSize: '0.78rem',
                          padding: '6px 13px',
                          borderColor: 'rgba(56, 189, 248, 0.35)',
                          background: 'rgba(14, 165, 233, 0.08)',
                          color: '#38bdf8',
                          cursor: 'pointer',
                          zIndex: 10
                        }}
                      >
                        <LinkedinIcon size={14} className="text-info" />
                        <span>View on LinkedIn</span>
                        <ExternalLink size={12} className="text-secondary" />
                      </a>
                    </div>
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
