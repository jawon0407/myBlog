'use client'

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';
import Image from 'next/image';
import { CodePost } from '../types/types';

import { Swiper , SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/CodeCarouselSwiper.css'


// const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
// }

type Props = {
    posts : CodePost[];
};

const CodeCarousel = ({ posts } : Props) => {
  return(
        // <Carousel autoPlay responsive={responsive} infinite draggable itemClass='m-2'>
        //     {children}
        // </Carousel>
    <Swiper
      breakpoints={{
        1400: { slidesPerView: 4 },
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        320: { slidesPerView: 1 },
      }}
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      navigation
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
    >
        {posts.map((post : CodePost , i : number) => {
            return <>
                <SwiperSlide>
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
                </SwiperSlide>
                </>  
            })
        }
    </Swiper>
  )
}


export default CodeCarousel;

/*
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import { Swiper , SwiperSlide } from 'swiper/react';

import 'swiper/swiper.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/swiperCarousel.css'

const CodeCarousel = () => {
  return(
    <Swiper
      breakpoints={{
        1400: { slidesPerView: 4 },
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        320: { slidesPerView: 1 },
      }}
      moduiles={[Navigation, Pagination, Autoplay]}
      spacebetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      navigation
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
    >
      {children}
    </Swiper>
  )
}

*/