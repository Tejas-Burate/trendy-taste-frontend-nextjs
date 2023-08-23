import './globals.css'
import { Inter } from 'next/font/google'
import CustomNavbar from '../components/CustomNavbar'
import Footer from '../components/Footer.jsx'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <CustomNavbar /> */}
       <div className="mt-5 mb-1"> {children} </div>
        <Footer />
        </body>
    </html>
  )
}
