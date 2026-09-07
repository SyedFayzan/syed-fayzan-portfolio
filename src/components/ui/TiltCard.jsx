import React, { useRef } from 'react';

export default function TiltCard({ children, className = '', glare = true, onClick }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glowRef.current.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(124, 106, 247, 0.15), transparent 80%)`;
    glowRef.current.style.opacity = '1';
  };

  const handleMouseLeave = () => {
    if (glowRef.current) {
      glowRef.current.style.opacity = '0';
    }
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-wrapper position-relative h-100 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        cursor: onClick ? 'pointer' : 'default'
      }}
    >
      <div className="tilt-card-inner h-100 position-relative">
        {children}
        {glare && (
          <div
            ref={glowRef}
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              borderRadius: 'inherit',
              opacity: 0,
              transition: 'opacity 0.25s ease',
              zIndex: 1
            }}
          />
        )}
      </div>
    </div>
  );
}
