import React from "react";
import "./Dialog.css"; // We'll style it next

const Dialog = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Don’t render when closed

  return (
    <div className="dialog-backdrop" onClick={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <div className="dialog-content">{children}</div>
        <div className="dialog-actions">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;