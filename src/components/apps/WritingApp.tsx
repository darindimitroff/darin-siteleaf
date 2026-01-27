"use client";

import { posts } from "@/data/content";
import { useWindowStore } from "@/stores/windowStore";

export function WritingApp() {
  const { openWindow } = useWindowStore();

  const handlePostClick = (postId: string, title: string) => {
    openWindow("post", title, {
      contentId: postId,
      size: { width: 500, height: 450 },
    });
  };

  return (
    <div className="list-view">
      <div className="px-2 py-1 border-b border-black bg-gray-100 text-[10px] font-bold flex">
        <span className="flex-1">Name</span>
        <span className="w-24 text-right">Date</span>
      </div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="list-item"
          onClick={() => handlePostClick(post.id, post.title)}
          onDoubleClick={() => handlePostClick(post.id, post.title)}
        >
          <span className="list-item-icon">📄</span>
          <span className="list-item-title">{post.title}</span>
          <span className="list-item-meta">{post.date}</span>
        </div>
      ))}
    </div>
  );
}
