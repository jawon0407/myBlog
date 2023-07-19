import Link from 'next/link';
import Image from 'next/image';
import { getCodePosts } from '../service/codeposts';
import CodeCarousel from './CodeCarousel';

const CodeStory = async () => {
    const codePosts = await getCodePosts(); 
    
      return(
        <section className="my-10 w-full">
            <h2 className="text-center text-[44px] font-bold">Code Story</h2>
            <span className="block text-center my-14 text-[36px] text-gray-200">Junior Developer의 개발이야기</span>
            <CodeCarousel>
                {codePosts.map((post, i) => {
                    return <>
                            <Link href={`/codeStory/${post.path}`}>
                                    <div className="code_carousel_post" key={`${post.title}`}>
                                        <div>
                                            <Image src={`/${post.image}`} alt={`${post.title}`} width={200} height={200} className="w-full"/>
                                        </div>
                                        <div className="py-5 px-4 text-center">
                                                <h3 className="post-title">{post.title}</h3>
                                                <p className="post-content">{post.content}</p>
                                                <time className="post-time">{post.date}</time>
                                        </div>
                                    </div>
                            </Link>
                        </>  
                    })
                }
            </CodeCarousel>
        </section>
    )
}

export default CodeStory;