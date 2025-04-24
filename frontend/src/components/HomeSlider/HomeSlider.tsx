'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useRef, useState } from 'react';
import Image from 'next/image';

const width=window.innerWidth;
const height=window.innerHeight;

const HomeSlider = () => {

    const [banners, setBanners] = useState([
        {
            imgUrl: 'https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1745409617983_arweb.jpg'
        },
        {
            imgUrl:'https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1744437904535_himeshweb.jpg'
        }
    ]);

  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper h-[300px] w-full"
    >
      {

          banners.map((banner,index) =>  {
              return (
                  <SwiperSlide key={index}>
                   <Image src={banner.imgUrl} alt="banner" width={width} height={height/2} 
                    style={{
                        objectFit: 'cover'  
                    }}
                    />
               </SwiperSlide>
           )
        }       
    )
    } 
    </Swiper>
  );
};

export default HomeSlider;
