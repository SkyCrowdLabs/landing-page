import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import HorizontalLogo from '../components/HorizontalLogo';

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['100', '300', '400', '700', '900'],
});

export const metadata: Metadata = {
  title: 'SkyCrowd Labs | Bespoke web development services',
  description: 'Bespoke web development services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable} font-sans`}>
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <header className="absolute inset-x-0 top-0 z-50 bg-gradient-to-r from-dark-indigo from-10% via-mid-indigo via-60% to-light-indigo to-90%">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <HorizontalLogo />
            </div>
            <div className="hidden tracking-wide text-white md:flex md:flex-1 md:justify-end">
              Bespoke web development services
            </div>
          </nav>
        </header>
        <div className="bg-white pt-[92px]">{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-028P296CF8" />
    </html>
  );
}
