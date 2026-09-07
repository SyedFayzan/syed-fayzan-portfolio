import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import TiltCard from '../ui/TiltCard';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-5 position-relative">
      <div className="container-xl py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="section-tag">
            <GraduationCap size={14} /> Academic Background
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text-accent">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Strong academic distinction in Computer Science & Engineering, Mathematics, and Sciences.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div className="row g-4">
          {education.map((edu, idx) => (
            <div key={idx} className={idx === 0 ? "col-12" : "col-md-6"}>
              <TiltCard maxTilt={idx === 0 ? 4 : 6}>
                <div
                  className="glass-panel p-4 p-md-5 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
                  style={{
                    border: idx === 0 ? '1px solid rgba(0, 229, 255, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div>
                    {/* Header Badges */}
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                      <span className="glass-pill" style={{ borderColor: 'rgba(0, 229, 255, 0.3)', color: '#00e5ff' }}>
                        <Award size={13} /> {edu.badge}
                      </span>
                      <div className="d-flex align-items-center gap-2 text-muted small font-mono">
                        <Calendar size={13} className="text-primary-light" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    {/* Degree & Institution */}
                    <h3 className={`font-heading text-white mb-1 ${idx === 0 ? 'h4' : 'h5'}`}>
                      {edu.degree}
                    </h3>
                    <div className="text-cyan fw-semibold small mb-2 font-mono">
                      {edu.field}
                    </div>
                    <div className="d-flex flex-wrap align-items-center gap-3 text-secondary small mb-4">
                      <span className="text-white">{edu.institution}</span>
                      <span>•</span>
                      <span className="d-flex align-items-center gap-1">
                        <MapPin size={13} /> {edu.location}
                      </span>
                    </div>

                    {/* Highlights */}
                    {edu.highlights && (
                      <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                        {edu.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="d-flex align-items-start gap-2 text-light text-opacity-75 small">
                            <CheckCircle2 size={15} className="text-cyan flex-shrink-0 mt-1" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Score & Status Footer */}
                  <div className="pt-3 border-top border-secondary border-opacity-20 d-flex align-items-center justify-content-between mt-auto">
                    <div>
                      <span className="text-muted small font-mono d-block" style={{ fontSize: '0.72rem' }}>Academic Performance</span>
                      <span className="fw-bold font-mono text-cyan fs-6">{edu.score}</span>
                    </div>
                    <span className="badge bg-dark border border-secondary border-opacity-40 text-secondary font-mono small">
                      {edu.status}
                    </span>
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
