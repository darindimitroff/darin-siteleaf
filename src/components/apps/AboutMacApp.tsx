"use client";

export function AboutMacApp() {
  return (
    <div className="p-4 text-center">
      <div className="text-6xl mb-4">🖥️</div>
      <h1 className="text-sm font-bold mb-2">Darin&apos;s Desktop</h1>
      <p className="text-[10px] mb-4">Version 1.0</p>

      <div className="border-t border-black pt-4 text-[10px]">
        <p className="mb-1">Built with Next.js, Tailwind, and Zustand</p>
        <p className="mb-1">Inspired by classic Macintosh System 7</p>
        <p className="mb-4">and ryOS by Ryo Lu</p>

        <p className="text-[9px] opacity-60">
          © 2024 Darin Dimitroff
          <br />
          All rights reserved
        </p>
      </div>
    </div>
  );
}
