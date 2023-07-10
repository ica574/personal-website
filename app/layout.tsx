import React from 'react';
import './globals.css';
import Footer from '../components/Footer';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Isaac Cilia Attard',
  description: 'I am a computer science student who is passionate about manifesting order from chaos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='h-screen bg-center bg-no-repeat bg-cover bg-gradient-to-tr from-[#000000] to-[#24104F]'>
        {/*<Navbar />*/}
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}