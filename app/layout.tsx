import './globals.css'
import NavBar from '@/app/components/navBar'

export default function RootLayout({
  children,
}: {children: React.ReactNode}
) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
