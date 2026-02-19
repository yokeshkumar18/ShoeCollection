import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Appscrip Product Listing Task',
  description: 'A premium product listing page built with Next.js 14, Tailwind CSS, and FakeStoreAPI.',
  openGraph: {
    title: 'Appscrip Product Listing Task',
    description: 'Explore our latest collection of premium fashion items.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main style={{minHeight: '100vh'}}>
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
