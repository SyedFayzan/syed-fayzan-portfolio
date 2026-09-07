import React from 'react';
import { Award, ShieldCheck, CheckCircle, ExternalLink, Sparkles, Code, Database, Terminal, Lock, Cpu } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { LinkedinIcon } from '../ui/Icons';
import TiltCard from '../ui/TiltCard';

export default function Certifications() {
  const { certifications, socials } = portfolioData;

  const getCertIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck size={20} className="text-primary-light" />;
      case 'Code': return <Code size={20} className="text-warning" />;
      case 'Sparkles': return <Sparkles size={20} className="text-success" />;
      case 'Database': return <Database size={20} className="text-cyan" />;
      case 'Terminal': return <Terminal size={20} className="text-info" />;
      case 'Lock': return <Lock size={20} className="text-danger" />;
      default: return <Cpu size={20} className="text-primary" />;
    }
  };

  return (
    <section id="certifications" className="py-5 position-relative">
      <div className="container-xl py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="section-tag">
            <Award size={14} /> Professional Validation
          </div>
          <h2 className="section-title">
            Licenses & <span className="gradient-text-accent">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Industry-recognized credentials from Infosys, Microsoft, IBM, Cisco, and AICTE validating specialized domain expertise.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="row g-4">
          {certifications.map((cert, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <TiltCard className="h-100">
                <div
                  className="glass-panel p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden group"
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div>
                    {/* Top Issuer Bar */}
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div
                        className="rounded-3 p-2 d-flex align-items-center justify-content-center"
                        style={{
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)'
                        }}
                      >
                        {getCertIcon(cert.icon)}
                      </div>
                      <span className="glass-pill small" style={{ fontSize: '0.72rem' }}>
                        {cert.verification}
                      </span>
                    </div>

                    {/* Certification Title & Issuer */}
                    <h3 className="h6 font-heading text-white mb-1">
                      {cert.title}
                    </h3>
                    <div className="text-cyan small fw-medium mb-3">
                      {cert.issuer}
                    </div>

                    {/* Skills Covered */}
                    <div className="p-2 rounded-2 mb-3" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div className="text-muted" style={{ fontSize: '0.7rem' }}>Skills & Competencies:</div>
                      <div className="text-light text-opacity-80 small font-mono">{cert.skills}</div>
                    </div>
                  </div>

                  {/* Year, Verified Footer & LinkedIn Action */}
                  <div
                    className="pt-3 border-top border-secondary border-opacity-20 d-flex flex-column gap-2 mt-auto position-relative"
                    style={{ zIndex: 10 }}
                  >
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="text-muted font-mono small">Issued {cert.date}</span>
                      <span className="text-success small d-flex align-items-center gap-1 font-mono" style={{ fontSize: '0.75rem' }}>
                        <CheckCircle size={13} /> Verified
                      </span>
                    </div>
                    <a
                      href={cert.linkedinUrl || socials.linkedin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="btn-premium-outline btn-sm font-mono d-inline-flex align-items-center justify-content-center gap-2 mt-2 position-relative"
                      style={{
                        fontSize: '0.78rem',
                        padding: '7px 12px',
                        borderColor: 'rgba(56, 189, 248, 0.35)',
                        background: 'rgba(14, 165, 233, 0.08)',
                        color: '#38bdf8',
                        cursor: 'pointer',
                        zIndex: 10
                      }}
                    >
                      <LinkedinIcon size={14} className="text-info" />
                      <span>View on LinkedIn</span>
                      <ExternalLink size={12} className="text-secondary ms-auto" />
                    </a>
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
