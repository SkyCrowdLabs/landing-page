import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['100', '300', '400', '700', '900'],
});

export const metadata: Metadata = {
  title: 'SkyCrowd Labs',
  description: 'Bespoke web development services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable} font-sans`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
