import { Montserrat, Open_Sans } from 'next/font/google';
import { MainNav } from "@/components/layout/main-nav"
import "./globals.css"

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat'
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="font-opensans">
        <div className="flex min-h-screen flex-col bg-soft-white">
          <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-16 items-center">
              <MainNav />
            </div>
          </header>
          <main className="flex-1">
            <div className="container">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
