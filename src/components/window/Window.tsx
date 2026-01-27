"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { useWindowStore, WindowState } from "@/stores/windowStore";

interface WindowProps {
  window: WindowState;
  children: React.ReactNode;
}

export function Window({ window: win, children }: WindowProps) {
  const { activeWindowId, focusWindow, closeWindow, minimizeWindow, moveWindow, resizeWindow } =
    useWindowStore();

  const isActive = activeWindowId === win.id;
  const constraintsRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Handle window focus on click
  const handleWindowClick = useCallback(() => {
    if (!isActive) {
      focusWindow(win.id);
    }
  }, [isActive, focusWindow, win.id]);

  // Handle drag start
  const handleDragStart = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".close-box")) return;

    focusWindow(win.id);
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - win.position.x,
      y: e.clientY - win.position.y,
    });
  };

  // Handle drag move
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newX = Math.max(0, e.clientX - dragOffset.x);
      const newY = Math.max(21, e.clientY - dragOffset.y); // Keep below menu bar
      moveWindow(win.id, { x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset, win.id, moveWindow]);

  // Handle resize
  const handleResizeStart = (e: React.MouseEvent) => {
    e.stopPropagation();
    focusWindow(win.id);
    setIsResizing(true);
  };

  useEffect(() => {
    if (!isResizing) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = Math.max(200, e.clientX - win.position.x);
      const newHeight = Math.max(100, e.clientY - win.position.y);
      resizeWindow(win.id, { width: newWidth, height: newHeight });
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing, win.id, win.position, resizeWindow]);

  if (win.isMinimized) return null;

  return (
    <motion.div
      ref={windowRef}
      className="window absolute window-opening"
      style={{
        left: win.position.x,
        top: win.position.y,
        width: win.size.width,
        height: win.size.height,
        zIndex: win.zIndex,
      }}
      onClick={handleWindowClick}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.15 }}
    >
      {/* Title Bar */}
      <div
        className={`window-title-bar ${isActive ? "focused" : ""}`}
        onMouseDown={handleDragStart}
      >
        <button
          className="close-box"
          onClick={(e) => {
            e.stopPropagation();
            closeWindow(win.id);
          }}
          aria-label="Close window"
        />
        <span className="window-title">{win.title}</span>
      </div>

      {/* Content */}
      <div className="window-content">
        {children}
        {/* Resize Handle */}
        <div
          className="resize-handle"
          onMouseDown={handleResizeStart}
        />
      </div>
    </motion.div>
  );
}
