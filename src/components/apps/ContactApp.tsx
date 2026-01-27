"use client";

import { socialLinks } from "@/data/content";

export function ContactApp() {
  return (
    <div className="prose">
      <h1>Contact</h1>

      <div className="border border-black p-4 mb-4">
        <div className="flex gap-4 items-start">
          <div className="text-4xl">👤</div>
          <div>
            <h2 className="m-0 mb-2">Darin Dimitroff</h2>
            <p className="m-0 text-[11px]">Digital Designer</p>
            <p className="m-0 text-[11px]">Sofia, Bulgaria</p>
          </div>
        </div>
      </div>

      <h3>Email</h3>
      <p>
        <a href="mailto:hello@darindimitroff.com" className="font-bold">
          hello@darindimitroff.com
        </a>
      </p>

      <h3>Social</h3>
      <ul className="list-none p-0">
        {socialLinks.map((link) => (
          <li key={link.name} className="mb-2">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span className="text-sm">→</span>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
