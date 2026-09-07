import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose, duration = 3500 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const icons = {
    success: <CheckCircle2 size={20} className="text-success flex-shrink-0" />,
    error: <AlertCircle size={20} className="text-danger flex-shrink-0" />,
    info: <Info size={20} className="text-info flex-shrink-0" />
  };

  return (
    <div className="custom-toast" role="alert">
      {icons[type] || icons.success}
      <span className="small fw-medium pe-2">{message}</span>
      <button
        onClick={onClose}
        className="btn btn-sm text-muted p-0 border-0 ms-auto"
        aria-label="Close notification"
      >
        <X size={16} />
      </button>
    </div>
  );
}
