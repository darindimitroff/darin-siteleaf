"use client";

import { workItems } from "@/data/content";
import { useWindowStore } from "@/stores/windowStore";

export function WorkApp() {
  const { openWindow } = useWindowStore();

  const handleProjectClick = (projectId: string, title: string) => {
    openWindow("project", title, {
      contentId: projectId,
      size: { width: 500, height: 450 },
    });
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        {workItems.map((project) => (
          <div
            key={project.id}
            className="desktop-icon"
            onClick={() => handleProjectClick(project.id, project.title)}
            onDoubleClick={() => handleProjectClick(project.id, project.title)}
          >
            <div className="icon-image text-2xl">📁</div>
            <div className="icon-label text-[10px]">{project.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
