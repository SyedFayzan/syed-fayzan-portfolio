import React from 'react';
import { ArrowDown, Download, Mail, ExternalLink, Code2, Sparkles, Terminal, ChevronRight, Layers, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../ui/Icons';
import { portfolioData } from '../../data/portfolioData';
import HeroScene from '../3d/HeroScene';

export default function Hero({ onDownloadResume }) {
  const { personal, socials } = portfolioData;

  return (
    <section id="hero" className="position-relative min-vh-100 d-flex align-items-center pt-5 pb-5 overflow-hidden">
      {/* Background Gradients & Microgrid */}
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>
      <div className="bg-grid-pattern"></div>

      <div className="container-xl position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center g-5 min-vh-100 py-5">
          {/* Left Column: Hero Text Content */}
          <div className="col-lg-7 text-start">
            {/* Status & Focus Pill */}
            <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
              <div
                className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill"
                style={{
                  background: 'rgba(124, 106, 247, 0.12)',
                  border: '1px solid rgba(124, 106, 247, 0.35)',
                  boxShadow: '0 0 15px rgba(124, 106, 247, 0.15)'
                }}
              >
                <span className="status-dot"></span>
                <span className="text-white small fw-semibold font-mono" style={{ letterSpacing: '0.03em' }}>
                  {personal.status}
                </span>
              </div>
              <span
                className="badge rounded-pill px-3 py-2 font-mono"
                style={{
                  background: 'rgba(0, 229, 255, 0.1)',
                  border: '1px solid rgba(0, 229, 255, 0.3)',
                  color: '#00e5ff',
                  fontSize: '0.75rem'
                }}
              >
                ⚡ 180+ LeetCode DSA Solved
              </span>
            </div>

            {/* Greeting & Headline */}
            <div className="mb-3">
              <span className="font-mono fs-5 text-cyan d-block mb-1">
                Hi, I'm
              </span>
              <h1 className="display-3 font-heading fw-extrabold mb-2 text-white">
                Syed <span className="gradient-text-accent">Fayzan</span>
              </h1>
              <h2 className="h4 text-light text-opacity-90 fw-semibold mb-3 d-flex flex-wrap align-items-center gap-2">
                <span>Computer Science Engineer</span>
                <span className="text-primary">•</span>
                <span className="text-cyan">MERN-Stack Developer</span>
                <span className="text-primary">•</span>
                <span>Data Structures & Algorithms</span>
              </h2>
            </div>

            {/* Subheadline */}
            <p className="lead text-secondary mb-4 fs-6" style={{ maxWidth: '590px', lineHeight: '1.75' }}>
              {personal.subheadline}
            </p>

            {/* Tech Stack Chips */}
            <div className="d-flex flex-wrap gap-2 mb-4">
              {["MongoDB", "Express.js", "React.js", "Node.js", "Python / C++", "REST APIs", "DSA (180+)"].map((tech, i) => (
                <span
                  key={i}
                  className="badge rounded-pill px-3 py-1 font-mono small"
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    color: '#c4b5fd'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap align-items-center gap-3 mb-5">
              <a href="#projects" className="btn-premium-primary">
                View Projects <ChevronRight size={18} />
              </a>
              <a
                href={personal.resumeUrl}
                download="Syed_Fayzan_Resume.pdf"
                onClick={onDownloadResume}
                className="btn-premium-outline"
              >
                <Download size={18} /> Download Resume
              </a>
              <a href="#contact" className="btn-premium-ghost">
                <Mail size={18} /> Contact Me
              </a>
            </div>

            {/* Social Links & Coding Profile Badges */}
            <div className="d-flex align-items-center gap-3 pt-3 border-top border-secondary border-opacity-20">
              <span className="text-muted small font-mono">Connect:</span>
              <a
                href={socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-sm rounded-3 px-3 py-2 border border-secondary border-opacity-40 d-flex align-items-center gap-2 text-white text-decoration-none"
              >
                <GithubIcon size={16} className="text-light" />
                <span className="small font-mono">GitHub</span>
              </a>
              <a
                href={socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-sm rounded-3 px-3 py-2 border border-secondary border-opacity-40 d-flex align-items-center gap-2 text-white text-decoration-none"
              >
                <LinkedinIcon size={16} className="text-info" />
                <span className="small font-mono">LinkedIn</span>
              </a>
              <a
                href={socials.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-sm rounded-3 px-3 py-2 border border-secondary border-opacity-40 d-flex align-items-center gap-2 text-white text-decoration-none"
              >
                <LeetcodeIcon size={16} className="text-warning" />
                <span className="small font-mono">LeetCode (180+)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive 3D Canvas Scene */}
          <div className="col-lg-5 position-relative">
            <div
              className="glass-panel p-2 position-relative overflow-hidden"
              style={{
                borderRadius: '28px',
                border: '1px solid rgba(124, 106, 247, 0.3)',
                boxShadow: '0 20px 50px -15px rgba(0,0,0,0.8), 0 0 30px rgba(124, 106, 247, 0.15)'
              }}
            >
              {/* Top Bar for 3D Viewport */}
              <div className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom border-secondary border-opacity-20 bg-dark bg-opacity-50">
                <div className="d-flex align-items-center gap-2">
                  <div className="rounded-circle" style={{ width: 10, height: 10, background: '#ef4444' }}></div>
                  <div className="rounded-circle" style={{ width: 10, height: 10, background: '#f59e0b' }}></div>
                  <div className="rounded-circle" style={{ width: 10, height: 10, background: '#10b981' }}></div>
                  <span className="text-muted small font-mono ms-2" style={{ fontSize: '0.72rem' }}>Interactive 3D MERN Core</span>
                </div>
                <span className="badge rounded-pill text-cyan font-mono" style={{ background: 'rgba(0, 229, 255, 0.1)', fontSize: '0.68rem' }}>
                  Interactive 3D Mesh
                </span>
              </div>

              {/* 3D Scene Viewport */}
              <div style={{ height: '420px', width: '100%', position: 'relative' }}>
                <HeroScene />
              </div>

              {/* Floating Stat Micro-Cards at Bottom */}
              <div className="p-3 bg-dark bg-opacity-75 border-top border-secondary border-opacity-20 d-flex justify-content-around text-center">
                <div>
                  <div className="text-cyan font-mono fw-bold fs-6">9.06 / 10</div>
                  <div className="text-muted" style={{ fontSize: '0.72rem' }}>B.Tech CGPA</div>
                </div>
                <div className="vr bg-secondary opacity-25"></div>
                <div>
                  <div className="text-primary-light font-mono fw-bold fs-6">180+ Solved</div>
                  <div className="text-muted" style={{ fontSize: '0.72rem' }}>LeetCode DSA</div>
                </div>
                <div className="vr bg-secondary opacity-25"></div>
                <div>
                  <div className="text-white font-mono fw-bold fs-6">Mindenious</div>
                  <div className="text-muted" style={{ fontSize: '0.72rem' }}>Dev Intern</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center position-relative pb-3 pt-2">
          <a
            href="#about"
            className="text-secondary text-decoration-none small d-inline-flex flex-column align-items-center gap-1 animate-float"
            aria-label="Scroll to About section"
          >
            <span className="font-mono text-muted" style={{ fontSize: '0.75rem' }}>Explore Portfolio</span>
            <ArrowDown size={16} className="text-cyan" />
          </a>
        </div>
      </div>
    </section>
  );
}
