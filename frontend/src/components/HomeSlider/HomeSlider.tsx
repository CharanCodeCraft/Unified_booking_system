'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay , Navigation} from 'swiper/modules';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import 'swiper/css/navigation';


const HomeSlider = () => {

  const [width, setWidth] = useState(1200); // fallback default
  const [height, setHeight] = useState(600);

  useEffect(() => {
    // Only runs on client
    setWidth(window.innerWidth);
    setHeight(window.innerHeight / 2);
  }, []);

    const [banners, setBanners] = useState([
        {
            imgUrl: 'https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1745409617983_arweb.jpg'
        },
        {
            imgUrl:'https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1744437904535_himeshweb.jpg'
        },
        {
            imgUrl:'https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1745316441727_indiainternationalcoffeefestivalweb.jpg'
        }
    ]);

  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Pagination,Autoplay,Navigation]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
      // navigation={true}
      className="mySwiper h-[300px] w-full max-[900px]:h-[30%] max-[900px]:w-full"
    >
       {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <Image
            src={banner.imgUrl}
            alt={`Banner ${index + 1}`}
            width={width}
            height={height}
            style={{ objectFit: 'cover' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;
