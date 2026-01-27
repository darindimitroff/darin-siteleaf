"use client";

import { useState, useEffect, useRef } from "react";
import { useWindowStore } from "@/stores/windowStore";

interface MenuItem {
  label: string;
  action?: () => void;
  divider?: boolean;
  disabled?: boolean;
  shortcut?: string;
}

interface Menu {
  label: string;
  items: MenuItem[];
}

export function MenuBar() {
  const [time, setTime] = useState<string>("");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuBarRef = useRef<HTMLDivElement>(null);
  const { openWindow, windows, activeWindowId, closeWindow } = useWindowStore();

  // Update clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 || 12;
      setTime(`${displayHours}:${minutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuBarRef.current && !menuBarRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menus: Menu[] = [
    {
      label: "\uF8FF", // Apple logo character (will show as  on Mac, fallback elsewhere)
      items: [
        { label: "About This Mac...", action: () => openWindow("about-mac", "About This Mac", { size: { width: 300, height: 200 } }) },
        { divider: true, label: "" },
        { label: "About Darin", action: () => openWindow("about", "About Darin") },
      ],
    },
    {
      label: "File",
      items: [
        { label: "Open About", action: () => openWindow("about", "About Darin"), shortcut: "O" },
        { label: "Open Writing", action: () => openWindow("writing", "Writing"), shortcut: "W" },
        { label: "Open Work", action: () => openWindow("work", "Work"), shortcut: "K" },
        { label: "Open Contact", action: () => openWindow("contact", "Contact"), shortcut: "I" },
        { divider: true, label: "" },
        {
          label: "Close Window",
          action: () => activeWindowId && closeWindow(activeWindowId),
          disabled: !activeWindowId,
          shortcut: "W",
        },
      ],
    },
    {
      label: "Edit",
      items: [
        { label: "Undo", disabled: true, shortcut: "Z" },
        { divider: true, label: "" },
        { label: "Cut", disabled: true, shortcut: "X" },
        { label: "Copy", disabled: true, shortcut: "C" },
        { label: "Paste", disabled: true, shortcut: "V" },
        { label: "Select All", disabled: true, shortcut: "A" },
      ],
    },
    {
      label: "View",
      items: [
        { label: "by Icon", disabled: true },
        { label: "by Name", disabled: true },
        { label: "by Date", disabled: true },
      ],
    },
    {
      label: "Special",
      items: [
        { label: "Clean Up Desktop", disabled: true },
        { divider: true, label: "" },
        { label: "Restart", disabled: true },
        { label: "Shut Down", disabled: true },
      ],
    },
  ];

  const handleMenuClick = (menuLabel: string) => {
    setActiveMenu(activeMenu === menuLabel ? null : menuLabel);
  };

  const handleItemClick = (item: MenuItem) => {
    if (item.disabled) return;
    item.action?.();
    setActiveMenu(null);
  };

  return (
    <div className="menu-bar" ref={menuBarRef}>
      {menus.map((menu) => (
        <div key={menu.label} className="relative">
          <div
            className={`menu-item ${activeMenu === menu.label ? "active" : ""}`}
            onClick={() => handleMenuClick(menu.label)}
            onMouseEnter={() => activeMenu && setActiveMenu(menu.label)}
          >
            {menu.label}
          </div>

          {activeMenu === menu.label && (
            <div className="menu-dropdown">
              {menu.items.map((item, index) =>
                item.divider ? (
                  <div key={index} className="menu-dropdown-divider" />
                ) : (
                  <div
                    key={index}
                    className={`menu-dropdown-item ${item.disabled ? "opacity-50 cursor-default" : ""}`}
                    onClick={() => handleItemClick(item)}
                  >
                    <span className="flex-1">{item.label}</span>
                    {item.shortcut && (
                      <span className="text-[10px] opacity-60">⌘{item.shortcut}</span>
                    )}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      ))}

      <div className="menu-clock">{time}</div>
    </div>
  );
}
