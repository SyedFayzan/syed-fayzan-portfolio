import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Code2, Sparkles, FileText } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Navbar({ activeSection, onDownloadResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`portfolio-navbar d-flex align-items-center ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container-xl d-flex align-items-center justify-content-between">
        {/* Brand Logo */}
        <a href="#hero" className="d-flex align-items-center gap-2 text-decoration-none group">
          <div
            className="d-flex align-items-center justify-content-center rounded-3 fw-bold font-heading text-white"
            style={{
              width: '38px',
              height: '38px',
              background: 'linear-gradient(135deg, #00e5ff 0%, #7c6af7 50%, #ec4899 100%)',
              boxShadow: '0 0 15px rgba(124, 106, 247, 0.4)',
              fontSize: '0.95rem'
            }}
          >
            SF
          </div>
          <div className="d-flex flex-column">
            <span className="font-heading fw-bold text-white fs-6 lh-1">
              Syed <span style={{ color: '#00e5ff' }}>Fayzan</span>
            </span>
            <span className="text-muted font-mono" style={{ fontSize: '0.68rem', letterSpacing: '0.05em' }}>
              Full Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="d-none d-lg-flex align-items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link-custom ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="d-none d-sm-flex align-items-center gap-3">
          <a
            href={portfolioData.personal.resumeUrl}
            download="Syed_Fayzan_Resume.pdf"
            onClick={onDownloadResume}
            className="btn-premium-outline py-2 px-3 fs-6"
            style={{ fontSize: '0.85rem' }}
          >
            <Download size={15} /> Resume
          </a>
          <a
            href="#contact"
            className="btn-premium-primary py-2 px-3"
            style={{ fontSize: '0.85rem' }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="btn btn-dark d-lg-none p-2 border border-secondary border-opacity-50 text-white rounded-3"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="position-fixed inset-0 d-lg-none"
          style={{
            top: '76px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(7, 8, 13, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 1040,
            padding: '24px 20px',
            overflowY: 'auto'
          }}
        >
          <div className="d-flex flex-column gap-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-decoration-none text-white py-2 px-3 rounded-3 font-heading fs-5 d-flex align-items-center justify-content-between"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <span>{link.name}</span>
                <span className="text-muted small font-mono">→</span>
              </a>
            ))}
          </div>

          <div className="d-flex flex-column gap-3 pt-3 border-top border-secondary border-opacity-25">
            <a
              href={portfolioData.personal.resumeUrl}
              download="Syed_Fayzan_Resume.pdf"
              onClick={() => {
                onDownloadResume();
                handleLinkClick();
              }}
              className="btn-premium-outline w-100 justify-content-center"
            >
              <Download size={18} /> Download Resume
            </a>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="btn-premium-primary w-100 justify-content-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
