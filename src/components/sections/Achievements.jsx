import React from 'react';
import { Trophy, Award, Flame, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import TiltCard from '../ui/TiltCard';

export default function Achievements() {
  const { achievements } = portfolioData;

  const getAchievementIcon = (iconName) => {
    switch (iconName) {
      case 'Trophy': return <Trophy size={24} className="text-warning" />;
      case 'Award': return <Award size={24} className="text-cyan" />;
      case 'Flame': return <Flame size={24} className="text-danger" />;
      case 'Users': return <Users size={24} className="text-primary-light" />;
      default: return <Sparkles size={24} className="text-primary" />;
    }
  };

  return (
    <section id="achievements" className="py-5 position-relative">
      <div className="container-xl py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="section-tag">
            <Trophy size={14} /> Honors & Co-Curriculars
          </div>
          <h2 className="section-title">
            Achievements & <span className="gradient-text-accent">Milestones</span>
          </h2>
          <p className="section-subtitle">
            Consistent algorithmic problem solving (180+ LeetCode), academic distinction, and competitive international hackathons.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="row g-4">
          {achievements.map((ach, idx) => (
            <div key={idx} className="col-lg-6">
              <TiltCard maxTilt={6}>
                <div
                  className="glass-panel p-4 p-md-5 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div
                        className="rounded-3 p-3 d-flex align-items-center justify-content-center"
                        style={{
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)'
                        }}
                      >
                        {getAchievementIcon(ach.icon)}
                      </div>
                      <span className="glass-pill text-cyan small font-mono">
                        {ach.stat}
                      </span>
                    </div>

                    <h3 className="h5 font-heading text-white mb-1">
                      {ach.title}
                    </h3>
                    <div className="text-primary-light small fw-medium mb-3 font-mono">
                      {ach.platform}
                    </div>

                    <p className="text-light text-opacity-75 small mb-0 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>

                  <div className="pt-3 border-top border-secondary border-opacity-20 d-flex align-items-center justify-content-between mt-4">
                    <span className="badge bg-dark border border-secondary border-opacity-40 text-secondary font-mono small">
                      {ach.badge}
                    </span>
                    <span className="text-muted small font-mono d-flex align-items-center gap-1">
                      <CheckCircle2 size={14} className="text-success" /> Verified Resume Record
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
