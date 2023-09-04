import './globals.css'
import { Inter } from 'next/font/google'
import Header from './modules/header/header'
import Footer from './modules/footer/footer'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: "Go Wheels",
  description: '',
  icons: {
    icon: [
      '/favicon.ico?v=4',
    ],
    apple: [
      '/apple.touch-icon.png?v=4',
    ],
    shortcut: [
      '/apple-touch-icon.png'
    ]
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <div className="flex flex-col min-h-screen items-center justify-between bg-rent-grey">
          <Header />
          <div className='w-11/12 lg:px-20'>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
