"use client"
import style from '@/style/Carousel.module.scss'
import Image from 'next/image'
import { useState } from 'react'

const Carousel = () => {

    const [index, setIndex] = useState(0)

    const nextSlide = () => {
        setIndex(index === 2 ? 0 : (prev)=>prev+1)
    }
    const prevSlide = () => {
        setIndex(index === 0 ? 2 : (prev)=>prev-1)
    }

    return (
        <div className={style.container}>
            <div className={style.main}>
                <div className={style.carousel}
                    style={{transform: `translateX(-${index *100}vw)`}}
                >
                    <div className={style.slide}>
                        <div className={style.pictureOne}>
                            <Image src={'/hamperSlide1.jpg'} alt='' fill />
                        </div>
                        <div className={style.pictureTwo}>
                            <Image src={'/hamperSlideSmall.jpg'} alt='' fill />
                        </div>
                    </div>
                    <div className={style.slide}>
                        <div className={style.pictureOne}>
                            <Image src={'/hamperSlide1.jpg'} alt='' fill />
                        </div>
                        <div className={style.pictureTwo}>
                            <Image src={'/banner_one_small.jpg'} alt='' fill />
                        </div>
                    </div>
                    <div className={style.slide}>
                        <div className={style.pictureOne}>
                            <Image src={'/hamperSlide1.jpg'} alt='' fill />
                        </div>
                        <div className={style.pictureTwo}>
                            <Image src={'/banner_one_small.jpg'} alt='' fill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel