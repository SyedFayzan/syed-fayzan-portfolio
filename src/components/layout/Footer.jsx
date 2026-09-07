import React from 'react';
import { ArrowUp, Code2, Heart, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../ui/Icons';
import { portfolioData } from '../../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-5 pb-4 border-top border-secondary border-opacity-25" style={{ background: '#06070a' }}>
      <div className="container-xl">
        <div className="row g-4 justify-content-between align-items-center mb-5">
          <div className="col-lg-5">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div
                className="d-flex align-items-center justify-content-center rounded-3 fw-bold font-heading text-white"
                style={{
                  width: '36px',
                  height: '36px',
                  background: 'linear-gradient(135deg, #00e5ff 0%, #7c6af7 50%, #ec4899 100%)',
                  fontSize: '0.9rem'
                }}
              >
                SF
              </div>
              <span className="font-heading fw-bold text-white fs-5">
                Syed <span style={{ color: '#00e5ff' }}>Fayzan</span>
              </span>
            </div>
            <p className="text-secondary small mb-3" style={{ maxWidth: '420px' }}>
              Computer Science Engineering undergraduate & Full Stack Developer building resilient, high-performance web systems and AI applications.
            </p>
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span>Available for Full Stack / SDE Opportunities</span>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="d-flex flex-wrap gap-4 justify-content-lg-end mb-3">
              <a href="#about" className="text-secondary text-decoration-none small hover-text-white">About</a>
              <a href="#skills" className="text-secondary text-decoration-none small hover-text-white">Skills</a>
              <a href="#projects" className="text-secondary text-decoration-none small hover-text-white">Projects</a>
              <a href="#experience" className="text-secondary text-decoration-none small hover-text-white">Experience</a>
              <a href="#education" className="text-secondary text-decoration-none small hover-text-white">Education</a>
              <a href="#contact" className="text-secondary text-decoration-none small hover-text-white">Contact</a>
            </div>

            <div className="d-flex align-items-center gap-3 justify-content-lg-end">
              <a
                href={portfolioData.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark rounded-circle p-2 border border-secondary border-opacity-50 text-light"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={portfolioData.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark rounded-circle p-2 border border-secondary border-opacity-50 text-light"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={portfolioData.socials.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark rounded-circle p-2 border border-secondary border-opacity-50 text-light"
                title="LeetCode"
              >
                <LeetcodeIcon size={18} className="text-warning" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="btn btn-dark rounded-circle p-2 border border-secondary border-opacity-50 text-light"
                title="Email Syed"
              >
                <Mail size={18} />
              </a>
              <button
                onClick={scrollToTop}
                className="btn btn-primary rounded-circle p-2 ms-2"
                style={{ background: 'var(--primary)', borderColor: 'var(--primary)' }}
                title="Back to Top"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between pt-4 border-top border-secondary border-opacity-10 small text-muted">
          <div className="font-mono mb-2 mb-md-0">
            © {new Date().getFullYear()} Syed Fayzan. All rights reserved.
          </div>
          <div>
            Crafted with React, Three.js, Bootstrap & Clean Architecture.
          </div>
        </div>
      </div>
    </footer>
  );
}
