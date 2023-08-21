"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import 'swiper/css/pagination';
import style from "@/style/Carousel.module.scss";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex(index === 2 ? 0 : (prev) => prev + 1);
  };
  const prevSlide = () => {
    setIndex(index === 0 ? 2 : (prev) => prev - 1);
  };

  return (
    <div className={style.container}>
      <div className={style.main}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true
          }}
          speed={1000}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className={style.images}>
              <Image
                className={style.bigImage}
                src={"/2-01.jpg"}
                alt=""
                width={1800}
                height={850}
                layout="responsive"
              />
              <Image
                className={style.smallImage}
                src={"/hamperSlideSmall1.jpg"}
                alt=""
                width={600}
                height={900}
                layout="responsive"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.images}>
              <Image
                className={style.bigImage}
                src={"/3-01.jpg"}
                alt=""
                width={1800}
                height={850}
                layout="responsive"
              />
              <Image
                className={style.smallImage}
                src={"/hamperSlideSmall2.jpg"}
                alt=""
                width={600}
                height={900}
                layout="responsive"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.images}>
              <Image
                className={style.bigImage}
                src={"/1-01 (1).jpg"}
                alt=""
                width={1800}
                height={850}
                layout="responsive"
              />
              <Image
                className={style.smallImage}
                src={"/hamperSlideSmall3.jpg"}
                alt=""
                width={600}
                height={900}
                layout="responsive"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
