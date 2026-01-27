"use client";

import dynamic from "next/dynamic";

const Desktop = dynamic(
  () => import("@/components/desktop/Desktop").then((mod) => mod.Desktop),
  { ssr: false }
);

export function DesktopWrapper() {
  return <Desktop />;
}
