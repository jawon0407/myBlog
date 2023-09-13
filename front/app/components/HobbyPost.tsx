'use client'

import Image from 'next/image';
import Link from 'next/link';
import { HobbyPost } from '../types/types';

interface Props{
    posts : HobbyPost[];
}

const HobbyPost = ({ posts } : Props) => {
    return(
        <ul className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {
                posts.map((post : HobbyPost , i : number) => {
                    const {title , path, image} = post;
                    return (
                        <li key={title}>
                            <Link href={`/hobby/${path}`}>
                                <div className={`hobby_carousel_item`}>
                                    <dl className="w-full">
                                        <dt>
                                            <Image src={`/${image}`} alt={'사진'} width={300} height={300} className="w-full" />
                                        </dt>
                                        <dd className="py-5 text-center">{title}</dd>
                                    </dl>
                                </div>
                            </Link>
                        </li>
                    )
                }
            )}
        </ul>
        )
}


export default HobbyPost;

{/* <ul className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
{
    hobbyPost.map((post , i) => {
        return <HobbyPost posts={post} />
    })
} */}