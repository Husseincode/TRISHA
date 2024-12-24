/** @format */

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { PageContextAPI } from './context/pageContext';

export const metadata: Metadata = {
  title: 'Trisha',
  description: 'Your exclusive hair is waiting for you...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageContextAPI>
      <html lang='en'>
        <body className={``}>
          {children}
          <Toaster />
        </body>
      </html>
    </PageContextAPI>
  );
}
