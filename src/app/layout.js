import './globals.css'
import 'typeface-roboto';

import Navbar from './components/Navbar/Navbar.component';
import Footer from './components/Footer/Footer.component';

import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'Dealer/Showroom Subaru Batam',
  description: 'Subaru Sales Car Batam',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className='main-container'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
