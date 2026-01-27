"use client";

import { useState, useCallback } from "react";

interface DesktopIconProps {
  icon: string;
  label: string;
  onDoubleClick: () => void;
}

export function DesktopIcon({ icon, label, onDoubleClick }: DesktopIconProps) {
  const [isSelected, setIsSelected] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);

  const handleClick = useCallback(() => {
    const now = Date.now();
    const timeSinceLastClick = now - lastClickTime;

    if (timeSinceLastClick < 400) {
      // Double click
      onDoubleClick();
      setIsSelected(false);
    } else {
      // Single click - select
      setIsSelected(true);
    }

    setLastClickTime(now);
  }, [lastClickTime, onDoubleClick]);

  const handleBlur = () => {
    setIsSelected(false);
  };

  return (
    <div
      className={`desktop-icon ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
      onBlur={handleBlur}
      tabIndex={0}
      role="button"
      aria-label={`Open ${label}`}
    >
      <div className="icon-image">{icon}</div>
      <div className="icon-label">{label}</div>
    </div>
  );
}
