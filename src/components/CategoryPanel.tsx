import { Col, Pagination, Row } from 'antd'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from 'swiper';

type Props = {}

const CategoryPanel = (props: Props) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      autoplay={true}
      scrollbar={true}
      navigation={true}
      modules={[Navigation]}
    >
      <SwiperSlide><img src="https://picsum.photos//500/500" alt="" /> 1</SwiperSlide>
      <SwiperSlide><img src="https://picsum.photos//500/500" alt="" /> 2</SwiperSlide>
      <SwiperSlide><img src="https://picsum.photos//500/500" alt="" /> 3</SwiperSlide>

      <SwiperSlide><img src="https://picsum.photos//500/500" alt="" /> 4</SwiperSlide>
      <SwiperSlide><img src="https://picsum.photos//500/500" alt="" /> 5</SwiperSlide>
    </Swiper>
  )
}

export default CategoryPanel