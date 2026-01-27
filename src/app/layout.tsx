import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Darin Dimitroff - Digital Designer",
  description:
    "An inter-disciplinary digital designer living in Sofia. Portfolio and writings about design systems, product design, and more.",
  openGraph: {
    title: "Darin Dimitroff - Digital Designer",
    description:
      "An inter-disciplinary digital designer living in Sofia.",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
