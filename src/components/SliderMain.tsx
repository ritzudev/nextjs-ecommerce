'use client'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from 'swiper/modules'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="aspect-video"
      navigation
      autoplay
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src="https://picsum.photos/id/10/2500/1667" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/11/2500/1667" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/12/2500/1667" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/13/2500/1667" alt="" />
      </SwiperSlide>
    </Swiper>
  )
}
