"use client";

import { workItems } from "@/data/content";

interface ProjectAppProps {
  projectId?: string;
}

export function ProjectApp({ projectId }: ProjectAppProps) {
  const project = workItems.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="prose">
        <p>Project not found.</p>
      </div>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];

    lines.forEach((line, index) => {
      // H2
      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={index} className="text-sm font-bold mt-4 mb-2 border-b border-dotted border-gray-400 pb-1">
            {line.replace("## ", "")}
          </h2>
        );
        return;
      }

      // H3
      if (line.startsWith("### ")) {
        elements.push(
          <h3 key={index} className="text-xs font-bold mt-3 mb-1">
            {line.replace("### ", "")}
          </h3>
        );
        return;
      }

      // List item
      if (line.startsWith("- ") || line.match(/^\d+\. /)) {
        const text = line.replace(/^[-\d]+\.?\s*/, "");
        elements.push(
          <li key={index} className="text-[11px] mb-1 ml-4">
            {text}
          </li>
        );
        return;
      }

      // Empty line
      if (line.trim() === "") {
        return;
      }

      // Regular paragraph
      elements.push(
        <p key={index} className="text-[11px] mb-2">
          {line}
        </p>
      );
    });

    return elements;
  };

  return (
    <div className="prose">
      <div className="border-b border-black pb-2 mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">📁</span>
          <div>
            <h1 className="text-sm font-bold m-0">{project.title}</h1>
            <p className="text-[10px] opacity-60 m-0 mt-1">{project.excerpt}</p>
          </div>
        </div>
      </div>
      <div>{renderContent(project.content)}</div>
    </div>
  );
}
