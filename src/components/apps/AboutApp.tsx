"use client";

import { aboutContent } from "@/data/content";

export function AboutApp() {
  return (
    <div className="prose">
      <h1>{aboutContent.intro.greeting}</h1>
      <p>{aboutContent.intro.bio}</p>

      <div className="mt-4 grid grid-cols-2 gap-4">
        {aboutContent.sections.map((section) => (
          <div key={section.name} className="mb-4">
            <h3 className="text-[11px] font-bold mb-2 inline-block px-2 py-0.5 border border-black">
              {section.name}
            </h3>
            <ul className="list-none p-0 m-0">
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className="text-[11px] mb-1 pl-2 border-l border-dotted border-gray-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
