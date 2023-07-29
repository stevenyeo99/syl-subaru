import App from './app';

export const metadata = {
  title: 'Dealer/Showroom Subaru Batam',
  description: 'Subaru Sales Car CROSSTREK | FORESTER | WRX | WRX WAGON | BRZ untuk daerah Batam',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <App>
          {children}
        </App>
      </body>
    </html>
  )
}
