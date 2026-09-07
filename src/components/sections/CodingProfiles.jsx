import React from 'react';
import { ExternalLink, Code2, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../ui/Icons';
import { portfolioData } from '../../data/portfolioData';
import TiltCard from '../ui/TiltCard';

export default function CodingProfiles() {
  const { codingProfiles } = portfolioData;

  const getProfileIcon = (name) => {
    switch (name) {
      case 'GitHub': return <GithubIcon size={32} className="text-light" />;
      case 'LinkedIn': return <LinkedinIcon size={32} className="text-info" />;
      case 'LeetCode': return <LeetcodeIcon size={32} className="text-warning" />;
      default: return <Code2 size={32} className="text-primary" />;
    }
  };

  const handleCardClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="coding-profiles" className="py-5 position-relative">
      <div className="container-xl py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="section-tag">
            <Code2 size={14} /> Developer Footprint
          </div>
          <h2 className="section-title">
            Coding & <span className="gradient-text-accent">Professional Profiles</span>
          </h2>
          <p className="section-subtitle">
            Explore my active open-source repositories, algorithmic problem-solving track record, and professional network.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="row g-4 justify-content-center">
          {codingProfiles.map((profile, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none d-block h-100"
                style={{ cursor: 'pointer' }}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <TiltCard className="h-100">
                  <div
                    className="glass-panel p-4 p-md-5 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden group"
                    style={{
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      cursor: 'pointer'
                    }}
                  >
                    {/* Corner Link Icon */}
                    <div className="position-absolute top-0 end-0 p-4 text-muted group-hover:text-white transition-smooth">
                      <ArrowUpRight size={22} className="text-cyan" />
                    </div>

                    <div>
                      {/* Icon */}
                      <div
                        className="rounded-4 p-3 d-inline-flex align-items-center justify-content-center mb-4"
                        style={{
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)'
                        }}
                      >
                        {getProfileIcon(profile.name)}
                      </div>

                      <h3 className="h4 font-heading text-white mb-1">
                        {profile.name}
                      </h3>
                      <div className="text-cyan small font-mono mb-3">
                        @{profile.username}
                      </div>

                      <p className="text-light text-opacity-80 small mb-0">
                        {profile.secondaryText}
                      </p>
                    </div>

                    {/* Stats Footer */}
                    <div className="pt-3 border-top border-secondary border-opacity-20 mt-4 d-flex align-items-center justify-content-between">
                      <span className="font-mono text-white fw-bold small">
                        {profile.statsText}
                      </span>
                      <span className="text-primary-light small font-mono d-flex align-items-center gap-1 fw-semibold">
                        Visit Profile <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
