import './globals.css'
import 'typeface-roboto';

import Navbar from './components/Navbar/Navbar.component';
import Footer from './components/Footer/Footer.component';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import ChatButton from './components/ChatButton/ChatButton.component';

export const metadata = {
  title: 'Dealer/Showroom Subaru Batam',
  description: 'Subaru Sales Car CROSSTREK | FORESTER | WRX | WRX WAGON | BRZ untuk daerah Batam',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className='container mt-5 mb-5'>
          {children}
        </main>
        <Footer />
        {/** Sticky Button */}
        <ChatButton />
        <ScrollToTop />
      </body>
    </html>
  )
}
