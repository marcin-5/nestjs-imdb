import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import Providers from './Providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'IMDb clone',
  description: 'A movie database clone',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
