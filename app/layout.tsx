import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Harshvardhan Singh Negi | Software Developer & Cybersecurity Portfolio",
  description: "Personal Portfolio of Harshvardhan Singh Negi, B.Tech CSE student at Lloyd Institute of Engineering & Technology. Software Developer Intern at NexusCzar & former Cybersecurity Intern at IBM-PBEL.",
  keywords: [
    "Harshvardhan Singh Negi",
    "Harshvardhan Portfolio",
    "Software Developer Intern",
    "Cybersecurity Intern",
    "Full-Stack Developer",
    "Lloyd Institute of Engineering & Technology",
    "NexusCzar",
    "IBM-PBEL",
    "React",
    "TypeScript",
    "Node.js",
    "AttendEase"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@600;700;800;900&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
