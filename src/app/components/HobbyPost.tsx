'use client'

import Image from 'next/image';
import Link from 'next/link';
import { HobbyPost } from '../types/types';

interface Props{
    posts : HobbyPost
}

const HobbyPost = ({ posts : { title , image , path }} : Props) => {
    return(
        <li>
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

export default HobbyPost;
