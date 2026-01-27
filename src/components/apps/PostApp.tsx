"use client";

import { posts } from "@/data/content";

interface PostAppProps {
  postId?: string;
}

export function PostApp({ postId }: PostAppProps) {
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="prose">
        <p>Post not found.</p>
      </div>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeContent: string[] = [];

    lines.forEach((line, index) => {
      // Code block
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          elements.push(
            <pre key={index} className="bg-black text-white p-3 overflow-x-auto text-[10px] mb-3">
              <code>{codeContent.join("\n")}</code>
            </pre>
          );
          codeContent = [];
        }
        inCodeBlock = !inCodeBlock;
        return;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        return;
      }

      // H2
      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={index} className="text-sm font-bold mt-4 mb-2">
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
        <h1 className="text-sm font-bold mb-1">{post.title}</h1>
        <p className="text-[10px] opacity-60 m-0">{post.date}</p>
      </div>
      <div>{renderContent(post.content)}</div>
    </div>
  );
}
