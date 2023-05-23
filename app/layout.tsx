import React from 'react';
import './globals.css'
import Footer from '../components/Footer';

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
      <body className='flex flex-col h-screen bg-center bg-no-repeat bg-cover bg-gradient-to-tr from-[#0C0C20] to-[#494099]'>
        {children}
        <Footer />
      </body>
    </html>
  )
}