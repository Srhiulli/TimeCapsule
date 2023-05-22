import './globals.css'
import { Roboto_Flex as roboto, Bai_Jamjuree as baiJamjuree,} from 'next/font/google'
import { ReactNode } from 'react'

const robotoFlex = roboto({ subsets: ['latin'], variable: '--font-roboto' })
const BaiJamjuree = baiJamjuree({ subsets: ['latin'], weight:'700', variable: '--baiJuanjuree'})


export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo contruída com React, Next.js, tailwind e typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${robotoFlex.variable} ${BaiJamjuree.variable}font-sans text-gray-100 bg-gray-900`}>{children}</body>
    </html>
  )
}

