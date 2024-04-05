import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Spotify - UI',
  description: 'Spotify UI clone using Next.js',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body className="bg-[#000] text-zinc-50">{children}</body>
    </html>
  );
}
