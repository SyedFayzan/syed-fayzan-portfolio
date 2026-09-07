import React, { useState } from 'react';
import { Cpu, Sparkles, Code2, Server, Database, Terminal, Binary, LineChart, Wrench, Layers } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import TiltCard from '../ui/TiltCard';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills.list
    : skills.list.filter(s => s.category === activeCategory);

  const getCategoryIcon = (catId) => {
    switch (catId) {
      case 'web': return <Layers size={14} />;
      case 'languages': return <Code2 size={14} />;
      case 'databases': return <Database size={14} />;
      case 'dsa': return <Binary size={14} />;
      case 'data_ml': return <LineChart size={14} />;
      case 'tools': return <Wrench size={14} />;
      default: return <Sparkles size={14} />;
    }
  };

  return (
    <section id="skills" className="py-5 position-relative">
      <div className="container-xl py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="section-tag">
            <Cpu size={14} /> Technical Competencies
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text-accent">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Structured according to core MERN development, programming languages, databases, algorithms, and data science workflows.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {skills.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`btn px-3 py-2 rounded-pill small font-mono d-flex align-items-center gap-2 transition-smooth ${
                activeCategory === cat.id
                  ? 'btn-premium-primary'
                  : 'btn-dark bg-opacity-50 text-secondary border border-secondary border-opacity-25'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="row g-3">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <TiltCard maxTilt={6}>
                <div
                  className="glass-panel p-4 h-100 position-relative overflow-hidden"
                  style={{
                    border: skill.highlight ? '1px solid rgba(124, 106, 247, 0.4)' : '1px solid rgba(255, 255, 255, 0.07)'
                  }}
                >
                  {/* Top Badge */}
                  {skill.highlight && (
                    <div
                      className="position-absolute top-0 end-0 px-3 py-1 font-mono text-cyan"
                      style={{
                        fontSize: '0.68rem',
                        background: 'rgba(0, 229, 255, 0.1)',
                        borderBottomLeftRadius: '10px',
                        borderLeft: '1px solid rgba(0, 229, 255, 0.25)',
                        borderBottom: '1px solid rgba(0, 229, 255, 0.25)'
                      }}
                    >
                      ★ Core Skill
                    </div>
                  )}

                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <div
                        className="rounded-3 p-2 d-flex align-items-center justify-content-center"
                        style={{
                          background: skill.highlight ? 'rgba(124, 106, 247, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                          color: skill.highlight ? '#c4b5fd' : '#94a3b8'
                        }}
                      >
                        <Code2 size={18} />
                      </div>
                      <div>
                        <h4 className="h6 font-heading text-white mb-0">{skill.name}</h4>
                        <span className="text-muted small text-capitalize font-mono" style={{ fontSize: '0.72rem' }}>
                          {skill.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-white small fw-semibold">{skill.level}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="progress rounded-pill bg-dark bg-opacity-75 mb-2" style={{ height: '6px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div
                      className="progress-bar rounded-pill"
                      role="progressbar"
                      style={{
                        width: `${skill.level}%`,
                        background: skill.highlight
                          ? 'linear-gradient(90deg, #7c6af7 0%, #00e5ff 100%)'
                          : 'linear-gradient(90deg, #64748b 0%, #94a3b8 100%)'
                      }}
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* Bottom Callout: DSA & CS Foundations */}
        <div className="mt-5 p-4 rounded-4 glass-panel border-primary border-opacity-25 text-center">
          <div className="row g-4 align-items-center justify-content-between">
            <div className="col-md-8 text-md-start">
              <h4 className="h6 font-heading text-white mb-1 d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
                <Sparkles size={18} className="text-cyan" /> 180+ Algorithmic Problems Solved
              </h4>
              <p className="text-secondary small mb-0">
                Rigorous practice across Arrays, Strings, Linked Lists, Stacks, Queues, Hashing, Trees, Graphs (BFS/DFS), Sorting, Binary Search, Recursion, Backtracking, Greedy, and Dynamic Programming.
              </p>
            </div>
            <div className="col-md-4 text-md-end">
              <a
                href={portfolioData.socials.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium-outline btn-sm font-mono"
              >
                View LeetCode (180+) →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
