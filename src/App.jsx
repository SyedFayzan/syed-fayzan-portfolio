import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Achievements from './components/sections/Achievements';
import CodingProfiles from './components/sections/CodingProfiles';
import ResumeViewer from './components/sections/ResumeViewer';
import Contact from './components/sections/Contact';
import ProjectModal from './components/ui/ProjectModal';
import Toast from './components/ui/Toast';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);
  const [toast, setToast] = useState({ message: '', type: 'success' });

  // Trigger celebration confetti
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7c6af7', '#00e5ff', '#ec4899', '#38bdf8', '#ffffff']
      });
    } catch (e) {
      console.log('Confetti effect:', e);
    }
  };

  const handleDownloadResume = () => {
    triggerConfetti();
    setToast({
      message: 'Downloading Syed Fayzan’s Resume (PDF)...',
      type: 'success'
    });
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  // Track active section for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'skills',
        'experience',
        'projects',
        'education',
        'certifications',
        'achievements',
        'coding-profiles',
        'resume',
        'contact'
      ];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app position-relative min-vh-100">
      {/* Fixed Navbar */}
      <Navbar
        activeSection={activeSection}
        onDownloadResume={handleDownloadResume}
      />

      {/* Main Page Sections */}
      <main>
        <Hero onDownloadResume={handleDownloadResume} />
        <About onCopyContact={showToast} />
        <Skills />
        <Experience />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Education />
        <Certifications />
        <Achievements />
        <CodingProfiles />
        <ResumeViewer onDownloadResume={handleDownloadResume} />
        <Contact onShowToast={showToast} onConfetti={triggerConfetti} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Toast Notifications */}
      {toast.message && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ message: '', type: 'success' })}
        />
      )}
    </div>
  );
}
