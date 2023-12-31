import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QueryWrapper from '@/components/QueryWrapper'
import Notification from '@/components/Notification';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BuzzFood',
  description: 'Italian Food',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        


        <div>
       <Notification/>
        <Navbar/>
        {children}
        <Footer/>
        </div>

        
        
        
        </body>
    </html>
  )
}
