"use client"
import Image from 'next/image'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import style from '@/style/Carousel.module.scss'

const Carousel = () => {

    const [index, setIndex] = useState(0)

    const nextSlide = () => {
        setIndex(index === 2 ? 0 : (prev) => prev + 1)
    }
    const prevSlide = () => {
        setIndex(index === 0 ? 2 : (prev) => prev - 1)
    }

    return (
        <div className={style.container}>
            <div className={style.main}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className={style.images}>
                            <Image className={style.bigImage} src={'/1-01 (1).jpg'} alt='' width={2000} height={1333} layout='responsive' />
                            <Image className={style.smallImage} src={'/hamperSlideSmall3.jpg'} alt='' width={5555} height={8334} layout='responsive' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.images}>
                            <Image className={style.bigImage} src={'/2-01.jpg'} alt='' width={2000} height={1333} layout='responsive' />
                            <Image className={style.smallImage} src={'/hamperSlideSmall1.jpg'} alt='' width={5555} height={8334} layout='responsive' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.images}>
                            <Image className={style.bigImage} src={'/3-01.jpg'} alt='' width={2000} height={1333} layout='responsive' />
                            <Image className={style.smallImage} src={'/hamperSlideSmall2.jpg'} alt='' width={5555} height={8334} layout='responsive' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Carousel