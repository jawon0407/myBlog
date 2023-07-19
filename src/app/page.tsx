import Image from 'next/image'
import Link from 'next/link'
import Hobby from './components/Hobby'
import CodeStory from './components/CodeStory'

export default async function Home() {
  return (
    <>
      <div className="flex items-center justify-between">
        <Link href={'/contact'}>
          <div className="relative ProfileImageAfter">
            <Image src={'/me.jpg'} alt="내 사진" width={300} height={300} className="rounded-[50%]"/>
          </div>
        </Link>
      </div>
      <div className="text-3xl text-gray-200 mt-20">꾸준히 성장하는 주니어 개발자 C.J입니다</div>
      {/* @ts-expect-error Async Server Component */}
      <Hobby />
      {/* @ts-expect-error Async Server Component */}
      <CodeStory/>
    </>
  )
}
