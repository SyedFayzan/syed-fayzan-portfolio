import React from 'react';
import { GraduationCap, Code2, Layers, Briefcase, Award, Terminal, CheckCircle2, User, Sparkles, MapPin, Languages, Globe } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import TiltCard from '../ui/TiltCard';

export default function About({ onCopyContact }) {
  const { personal } = portfolioData;

  const getStatIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap size={24} className="text-cyan" />;
      case 'Code2': return <Code2 size={24} className="text-primary-light" />;
      case 'Layers': return <Layers size={24} className="text-warning" />;
      case 'Briefcase': return <Briefcase size={24} className="text-success" />;
      default: return <Sparkles size={24} className="text-primary" />;
    }
  };

  return (
    <section id="about" className="py-5 position-relative">
      <div className="container-xl py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="section-tag">
            <User size={14} /> About Me
          </div>
          <h2 className="section-title">
            Engineering with <span className="gradient-text-accent">Purpose & Precision</span>
          </h2>
          <p className="section-subtitle">
            Computer Science undergraduate at Kamala Institute of Technology and Science with a dedicated focus on MERN stack web applications and algorithmic problem-solving.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Left Column: Bio & Core Values */}
          <div className="col-lg-7">
            <div className="glass-panel p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex align-items-center gap-2 mb-4 pb-3 border-bottom border-secondary border-opacity-25">
                  <div className="rounded-3 p-2 bg-primary bg-opacity-20 text-primary">
                    <Terminal size={22} />
                  </div>
                  <div>
                    <h3 className="h5 font-heading text-white mb-0">Syed Fayzan</h3>
                    <span className="text-cyan small font-mono">MERN-Stack Developer · B.Tech CSE</span>
                  </div>
                  <span className="ms-auto glass-pill small">
                    <MapPin size={12} /> Hanamkonda, Telangana
                  </span>
                </div>

                {/* Paragraphs */}
                <div className="text-light text-opacity-80 mb-4 d-flex flex-column gap-3 leading-relaxed">
                  {personal.bio.map((paragraph, idx) => (
                    <p key={idx} className="mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Quick Info Grid */}
                <div className="p-3 rounded-3 mb-4" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="text-muted small">Location</div>
                      <div className="text-white small fw-medium">{personal.location}</div>
                    </div>
                    <div className="col-sm-6">
                      <div className="text-muted small">Academic Standing</div>
                      <div className="text-cyan small fw-medium">CGPA: 9.06 / 10 (KITS CSE)</div>
                    </div>
                    <div className="col-sm-6">
                      <div className="text-muted small">Primary Focus</div>
                      <div className="text-white small fw-medium">Full Stack MERN & Scalable Web Apps</div>
                    </div>
                    <div className="col-sm-6">
                      <div className="text-muted small">Problem Solving</div>
                      <div className="text-warning small fw-medium">180+ Problems on LeetCode</div>
                    </div>
                  </div>
                </div>

                {/* Languages Known */}
                <div className="mb-4 p-3 rounded-3" style={{ background: 'rgba(124, 106, 247, 0.05)', border: '1px solid rgba(124, 106, 247, 0.2)' }}>
                  <div className="d-flex align-items-center gap-2 mb-2 text-white small font-mono">
                    <Globe size={15} className="text-cyan" /> Languages Known:
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    {personal.languagesKnown.map((lang, idx) => (
                      <span
                        key={idx}
                        className="badge rounded-pill px-3 py-1 font-mono"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          color: '#f8fafc',
                          fontSize: '0.78rem'
                        }}
                      >
                        {lang.name} <span className="text-muted font-mono" style={{ fontSize: '0.68rem' }}>({lang.level})</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Core Strengths Checklist */}
              <div>
                <h6 className="font-heading text-white small text-uppercase mb-3 font-mono" style={{ letterSpacing: '0.05em' }}>
                  Core Competencies & Stack
                </h6>
                <div className="row g-2">
                  {[
                    "MERN Stack Development (MongoDB, Express, React, Node.js)",
                    "Data Structures & Algorithmic Optimization (180+ Solved)",
                    "RESTful API Design & JWT Authentication",
                    "Database Schema Design & Query Optimization",
                    "Python, Flask & FastAPI Web Services",
                    "Clean Component Architecture & Agile Workflows"
                  ].map((skill, idx) => (
                    <div key={idx} className="col-md-6 d-flex align-items-center gap-2">
                      <CheckCircle2 size={16} className="text-cyan flex-shrink-0" />
                      <span className="text-light text-opacity-90 small">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Key Metric Cards */}
          <div className="col-lg-5">
            <div className="row g-3 h-100">
              {personal.stats.map((stat, idx) => (
                <div key={idx} className="col-sm-6">
                  <TiltCard maxTilt={8}>
                    <div className="glass-panel p-4 h-100 d-flex flex-column justify-content-between">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="p-2 rounded-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                          {getStatIcon(stat.icon)}
                        </div>
                        <span className="text-muted font-mono small">0{idx + 1}</span>
                      </div>
                      <div>
                        <div className="display-6 font-heading fw-bold text-white mb-1">
                          {stat.value}
                        </div>
                        <div className="text-secondary small fw-medium">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              ))}

              {/* Recruiter Callout Box */}
              <div className="col-12">
                <div
                  className="p-4 rounded-4 position-relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(124, 106, 247, 0.15) 0%, rgba(0, 229, 255, 0.1) 100%)',
                    border: '1px solid rgba(124, 106, 247, 0.3)'
                  }}
                >
                  <div className="d-flex align-items-start gap-3">
                    <div className="rounded-3 p-2 bg-primary bg-opacity-30 text-white flex-shrink-0">
                      <Award size={22} />
                    </div>
                    <div>
                      <h4 className="h6 font-heading text-white mb-1">Academic & Technical Honors</h4>
                      <p className="text-light text-opacity-80 small mb-3">
                        Awarded Certificate of Merit for Academic Excellence in B.Tech and experienced in building production-ready MERN applications at Mindenious Edutech.
                      </p>
                      <a href="#projects" className="btn btn-sm btn-outline-light rounded-pill px-3 font-mono">
                        View MERN Projects →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
