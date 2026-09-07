import React from 'react';
import { Download, FileText, ExternalLink, CheckCircle2, Sparkles, GraduationCap, Briefcase, Code2, Mail, Layers } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function ResumeViewer({ onDownloadResume }) {
  const { personal, experience, education, skills, projects } = portfolioData;

  return (
    <section id="resume" className="py-5 position-relative">
      <div className="container-xl py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="section-tag">
            <FileText size={14} /> Curriculum Vitae
          </div>
          <h2 className="section-title">
            Resume & <span className="gradient-text-accent">Credentials</span>
          </h2>
          <p className="section-subtitle">
            Executive summary of my academic record (9.06 CGPA), MERN stack projects, 180+ LeetCode milestones, and industry internships.
          </p>
        </div>

        <div className="glass-panel p-4 p-md-5 position-relative overflow-hidden" style={{ border: '1px solid rgba(124, 106, 247, 0.35)' }}>
          {/* Action Bar */}
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3 pb-4 mb-4 border-bottom border-secondary border-opacity-25">
            <div>
              <div className="d-flex align-items-center gap-2 mb-1">
                <span className="badge rounded-pill bg-success bg-opacity-25 text-success font-mono">
                  ATS-Optimized & Resume-Verified
                </span>
                <span className="text-muted small font-mono">Syed Fayzan · 180+ DSA</span>
              </div>
              <h3 className="h4 font-heading text-white mb-0">Syed Fayzan — MERN-Stack Developer Resume</h3>
            </div>

            <div className="d-flex flex-wrap align-items-center gap-3">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium-outline btn-sm font-mono"
              >
                <ExternalLink size={15} /> Preview PDF
              </a>
              <a
                href={personal.resumeUrl}
                download="Syed_Fayzan_Resume.pdf"
                onClick={onDownloadResume}
                className="btn-premium-primary btn-sm font-mono"
              >
                <Download size={15} /> Download Resume (PDF)
              </a>
            </div>
          </div>

          {/* Structured Resume Content Preview */}
          <div className="row g-4">
            {/* Column 1: Summary & Projects Snapshot */}
            <div className="col-lg-6">
              <div className="mb-4">
                <h5 className="font-heading text-white mb-2 d-flex align-items-center gap-2 small text-uppercase font-mono">
                  <Sparkles size={16} className="text-cyan" /> Professional Summary
                </h5>
                <p className="text-light text-opacity-80 small leading-relaxed mb-0">
                  {personal.bio[0]}
                </p>
              </div>

              <div className="mb-4">
                <h5 className="font-heading text-white mb-3 d-flex align-items-center gap-2 small text-uppercase font-mono">
                  <Layers size={16} className="text-primary-light" /> Featured MERN Projects
                </h5>
                <div className="d-flex flex-column gap-3">
                  {projects.slice(0, 2).map((proj, idx) => (
                    <div key={idx} className="p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <strong className="text-white small">{proj.title}</strong>
                        <span className="text-cyan font-mono" style={{ fontSize: '0.72rem' }}>{proj.period}</span>
                      </div>
                      <div className="text-secondary small mb-2">{proj.subtitle}</div>
                      <p className="text-light text-opacity-70 mb-0" style={{ fontSize: '0.78rem' }}>
                        {proj.shortDescription}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Education & Technical Competencies */}
            <div className="col-lg-6">
              <div className="mb-4">
                <h5 className="font-heading text-white mb-3 d-flex align-items-center gap-2 small text-uppercase font-mono">
                  <GraduationCap size={16} className="text-cyan" /> Education & Academic Record
                </h5>
                <div className="p-3 rounded-3 mb-3" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <strong className="text-white small">{education[0].degree}</strong>
                    <span className="text-cyan font-mono fw-bold small">{education[0].score}</span>
                  </div>
                  <div className="text-secondary small">{education[0].institution} ({education[0].period})</div>
                </div>

                <div className="p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <strong className="text-white small">{education[1].degree}</strong>
                    <span className="text-cyan font-mono fw-bold small">{education[1].score}</span>
                  </div>
                  <div className="text-secondary small">{education[1].institution} ({education[1].period})</div>
                </div>
              </div>

              <div>
                <h5 className="font-heading text-white mb-2 d-flex align-items-center gap-2 small text-uppercase font-mono">
                  <Code2 size={16} className="text-warning" /> Core MERN & DSA Stack
                </h5>
                <div className="d-flex flex-wrap gap-2">
                  {skills.list.filter(s => s.highlight).map((skill, idx) => (
                    <span
                      key={idx}
                      className="badge rounded-pill px-3 py-2 font-mono small"
                      style={{ background: 'rgba(124, 106, 247, 0.1)', border: '1px solid rgba(124, 106, 247, 0.25)', color: '#c4b5fd' }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="mt-4 pt-3 border-top border-secondary border-opacity-20 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 text-center text-md-start">
            <span className="text-secondary small">
              Looking for a dedicated MERN Stack Developer or SDE Intern?
            </span>
            <a href="#contact" className="btn-premium-outline btn-sm">
              <Mail size={15} /> Contact Syed Fayzan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
