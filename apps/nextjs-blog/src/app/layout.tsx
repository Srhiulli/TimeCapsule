import './globals.css'
import { Roboto_Flex as roboto, Bai_Jamjuree as baiJamjuree, } from 'next/font/google'
import { Hero } from './components/Hero'
import { Profile } from './components/Profile'
import { Signin } from './components/Signin'
import { Copyright } from './components/Copyright'
import { cookies } from 'next/dist/client/components/headers'

const robotoFlex = roboto({ subsets: ['latin'], variable: '--font-roboto' })
const BaiJamjuree = baiJamjuree({ subsets: ['latin'], weight: '700', variable: '--baiJuanjuree' })


export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo contruída com React, Next.js, tailwind e typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticaded = cookies().has('token')

  return (
    <html lang="en">
      <body className={`${robotoFlex.variable} ${BaiJamjuree.variable}font-sans text-gray-100 bg-gray-900`}>
        <main className="grid grid-cols-2 min-h-screen">
          {/* Left column */}
          <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
            {/* Blur*/}
            <div className="absolute right-0 top-1/2 h-[280px] w-[526px] -translate-y-1/2 translate-x-1/2  bg-purple-700 opacity-58 rounded-full blur-full" />
            {/* Stripes */}
            <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />
            {isAuthenticaded ? <Profile /> : <Signin />}
            <Hero />
            <Copyright />
          </div>
          {/* Right column */}
          <div className="overflow-y-scroll max-h-screen flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}

