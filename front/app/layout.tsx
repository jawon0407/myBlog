import './globals.css'
import Image from 'next/image'
import { Open_Sans } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: "C.J의 잡다한 블로그",
  description: '주니어 개발자의 이모저모',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sans.className}`} >
        <Image src={`/bg.jpg`} alt='배경 이미지' width={2000} height={600}/>
        <Header/>
        <section className="flex flex-col justify-center items-center mt-10">
          {children}
        </section>
        <Footer />
      </body>
    </html>
  )
}
