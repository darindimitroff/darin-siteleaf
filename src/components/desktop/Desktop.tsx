"use client";

import { useWindowStore, selectMinimizedWindows } from "@/stores/windowStore";
import { MenuBar } from "./MenuBar";
import { DesktopIcon } from "./DesktopIcon";
import { Window } from "@/components/window/Window";
import { AboutApp } from "@/components/apps/AboutApp";
import { WritingApp } from "@/components/apps/WritingApp";
import { WorkApp } from "@/components/apps/WorkApp";
import { ContactApp } from "@/components/apps/ContactApp";
import { AboutMacApp } from "@/components/apps/AboutMacApp";
import { PostApp } from "@/components/apps/PostApp";
import { ProjectApp } from "@/components/apps/ProjectApp";

const DESKTOP_ICONS = [
  { id: "about", icon: "📋", label: "About Darin" },
  { id: "writing", icon: "📝", label: "Writing" },
  { id: "work", icon: "💼", label: "Work" },
  { id: "contact", icon: "📧", label: "Contact" },
];

export function Desktop() {
  const { windows, openWindow, restoreWindow } = useWindowStore();
  const minimizedWindows = useWindowStore(selectMinimizedWindows);

  const handleIconDoubleClick = (appId: string, label: string) => {
    const sizes: Record<string, { width: number; height: number }> = {
      about: { width: 450, height: 400 },
      writing: { width: 500, height: 450 },
      work: { width: 550, height: 450 },
      contact: { width: 350, height: 300 },
    };

    openWindow(appId, label, { size: sizes[appId] });
  };

  const renderAppContent = (appId: string, contentId?: string) => {
    switch (appId) {
      case "about":
        return <AboutApp />;
      case "about-mac":
        return <AboutMacApp />;
      case "writing":
        return <WritingApp />;
      case "work":
        return <WorkApp />;
      case "contact":
        return <ContactApp />;
      case "post":
        return <PostApp postId={contentId} />;
      case "project":
        return <ProjectApp projectId={contentId} />;
      default:
        return <div className="p-4">Unknown app: {appId}</div>;
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Menu Bar */}
      <MenuBar />

      {/* Desktop Area */}
      <div
        className="absolute inset-0 pt-[21px]"
        style={{ cursor: "default" }}
      >
        {/* Desktop Icons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {DESKTOP_ICONS.map((icon) => (
            <DesktopIcon
              key={icon.id}
              icon={icon.icon}
              label={icon.label}
              onDoubleClick={() => handleIconDoubleClick(icon.id, icon.label)}
            />
          ))}
        </div>

        {/* Windows */}
        {windows.map((win) => (
          <Window key={win.id} window={win}>
            {renderAppContent(win.appId, win.contentId)}
          </Window>
        ))}

        {/* Minimized Windows Tray */}
        {minimizedWindows.length > 0 && (
          <div className="absolute bottom-2 left-2 flex gap-2">
            {minimizedWindows.map((win) => (
              <button
                key={win.id}
                className="mac-button text-[10px] px-2 py-1"
                onClick={() => restoreWindow(win.id)}
                title={win.title}
              >
                {win.title.slice(0, 15)}
                {win.title.length > 15 ? "..." : ""}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
