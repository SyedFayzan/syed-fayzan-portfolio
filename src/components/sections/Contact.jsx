import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare, Code2, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../ui/Icons';
import { portfolioData } from '../../data/portfolioData';

export default function Contact({ onShowToast, onConfetti }) {
  const { personal, socials, contactConfig } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    onShowToast(`${fieldName} copied to clipboard!`, 'success');
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill in all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);

    const accessKey = contactConfig?.web3FormsAccessKey;

    if (accessKey) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject || 'New Contact Message from Portfolio',
            message: formData.message,
            from_name: 'Portfolio Website Visitor'
          })
        });

        const result = await response.json();
        if (result.success) {
          onShowToast(`Thank you! Your message was delivered to ${personal.email}.`, 'success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          if (onConfetti) onConfetti();
        } else {
          onShowToast('Error sending message. Falling back to email.', 'error');
          openMailClient();
        }
      } catch (err) {
        onShowToast('Network issue. Opening your email app...', 'info');
        openMailClient();
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Default: Direct Mailto / Client feedback
      setTimeout(() => {
        setIsSubmitting(false);
        onShowToast(`Message received! Opening your email app to send to ${personal.email}...`, 'success');
        openMailClient();
        setFormData({ name: '', email: '', subject: '', message: '' });
        if (onConfetti) onConfetti();
      }, 700);
    }
  };

  const openMailClient = () => {
    const subject = encodeURIComponent(formData.subject || `Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-5 position-relative">
      <div className="container-xl py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="section-tag">
            <Mail size={14} /> Get in Touch
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text-accent">Remarkable</span>
          </h2>
          <p className="section-subtitle">
            Open for software engineering internships, graduate roles, and innovative project collaborations.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="col-lg-5">
            <div className="glass-panel p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="h4 font-heading text-white mb-2">Contact Details</h3>
                <p className="text-secondary small mb-4">
                  Messages submitted here reach my primary email directly. You can also connect on social platforms or call directly.
                </p>

                {/* Email Item */}
                <div className="p-3 rounded-3 mb-3" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <div className="p-2 rounded-2 bg-primary bg-opacity-20 text-primary">
                        <Mail size={20} />
                      </div>
                      <div>
                        <div className="text-muted small font-mono" style={{ fontSize: '0.72rem' }}>Direct Email</div>
                        <a href={`mailto:${personal.email}`} className="text-white small fw-medium text-decoration-none hover-text-cyan">
                          {personal.email}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(personal.email, 'Email')}
                      className="btn btn-sm btn-dark border border-secondary border-opacity-40 text-secondary p-2 rounded-2"
                      title="Copy Email"
                    >
                      {copiedField === 'Email' ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="p-3 rounded-3 mb-3" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <div className="p-2 rounded-2 bg-cyan bg-opacity-20 text-cyan">
                        <Phone size={20} />
                      </div>
                      <div>
                        <div className="text-muted small font-mono" style={{ fontSize: '0.72rem' }}>Phone Number</div>
                        <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="text-white small fw-medium text-decoration-none hover-text-cyan">
                          {personal.phone}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(personal.phone, 'Phone')}
                      className="btn btn-sm btn-dark border border-secondary border-opacity-40 text-secondary p-2 rounded-2"
                      title="Copy Phone Number"
                    >
                      {copiedField === 'Phone' ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>

                {/* Location Item */}
                <div className="p-3 rounded-3 mb-4" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="d-flex align-items-center gap-3">
                    <div className="p-2 rounded-2 bg-warning bg-opacity-20 text-warning">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-muted small font-mono" style={{ fontSize: '0.72rem' }}>Location</div>
                      <div className="text-white small fw-medium">{personal.location}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-top border-secondary border-opacity-20">
                <span className="text-muted small font-mono d-block mb-2">Connect Directly:</span>
                <div className="d-flex gap-2">
                  <a
                    href={socials.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark btn-sm rounded-3 px-3 py-2 border border-secondary border-opacity-40 text-light text-decoration-none d-flex align-items-center gap-2"
                  >
                    <LinkedinIcon size={16} className="text-info" />
                    <span className="small font-mono">LinkedIn</span>
                  </a>
                  <a
                    href={socials.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark btn-sm rounded-3 px-3 py-2 border border-secondary border-opacity-40 text-light text-decoration-none d-flex align-items-center gap-2"
                  >
                    <GithubIcon size={16} className="text-light" />
                    <span className="small font-mono">GitHub</span>
                  </a>
                  <a
                    href={socials.leetcode.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark btn-sm rounded-3 px-3 py-2 border border-secondary border-opacity-40 text-light text-decoration-none d-flex align-items-center gap-2"
                  >
                    <LeetcodeIcon size={16} className="text-warning" />
                    <span className="small font-mono">LeetCode</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="col-lg-7">
            <div className="glass-panel p-4 p-md-5 h-100 position-relative">
              <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-secondary border-opacity-25">
                <div className="d-flex align-items-center gap-2">
                  <MessageSquare size={20} className="text-cyan" />
                  <h3 className="h4 font-heading text-white mb-0">Send a Message</h3>
                </div>
                <span className="badge rounded-pill bg-dark border border-secondary border-opacity-40 text-secondary font-mono small">
                  Delivers to {personal.email}
                </span>
              </div>

              <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label text-secondary small font-mono">Your Name *</label>
                    <input
                      type="text"
                      className="form-control form-control-premium"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-secondary small font-mono">Your Email Address *</label>
                    <input
                      type="email"
                      className="form-control form-control-premium"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label text-secondary small font-mono">Subject</label>
                  <input
                    type="text"
                    className="form-control form-control-premium"
                    placeholder="e.g. MERN Stack Developer Opportunity / Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div>
                  <label className="form-label text-secondary small font-mono">Message *</label>
                  <textarea
                    className="form-control form-control-premium"
                    rows="5"
                    placeholder="Write your message or inquiry here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-premium-primary w-100 py-3 justify-content-center font-mono"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Send Message to {personal.email}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
