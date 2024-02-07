import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>LUXEDRIVE</title>
      
      <meta
          name="description"
          content="This is the meta description for My Page"
        />
  
    <body className={inter.className}>{children}
    




    </body>
    </html>
  )
}