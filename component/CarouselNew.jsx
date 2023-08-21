"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import style from "@/style/CarouselNew.module.scss";

const CarouselNew = () => {
  const [index, setIndex] = useState(0);
  const [touched, setTouched] = useState(false);

  const nextSlide = () => {
    setIndex(index === 2 ? 0 : (prev) => prev + 1);
    console.log(index);
  };

  const prevSlide = () => {
    setIndex(index === 0 ? 2 : (prev) => prev - 1);
    console.log(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      {
        !touched && nextSlide();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={style.container}>
      <div className={style.main}>
        <div
          className={style.carousel}
          style={{ transform: `translateX(-${index * 100}vw)` }}
        >
          <div className={style.slide}>
            <Image
              src={"/2-01.jpg"}
              alt=""
              width={1800}
              height={850}
              layout="responsive"
            />
            <Image
              src={"/hamperSlideSmall1.jpg"}
              alt=""
              width={600}
              height={900}
              layout="responsive"
            />
          </div>
          <div className={style.slide}>
            <Image
              src={"/3-01.jpg"}
              alt=""
              width={1800}
              height={850}
              layout="responsive"
            />
            <Image
              src={"/hamperSlideSmall2.jpg"}
              alt=""
              width={600}
              height={900}
              layout="responsive"
            />
          </div>
          <div className={style.slide}>
            <Image
              src={"/1-01 (1).jpg"}
              alt=""
              width={1800}
              height={850}
              layout="responsive"
            />
            <Image
              src={"/hamperSlideSmall3.jpg"}
              alt=""
              width={600}
              height={900}
              layout="responsive"
            />
          </div>
        </div>
        <div className={style.buttons}>
          <button onClick={() => setIndex(0) & setTouched(true)}>
            <div
              className={`${style.innerDiv} ${index === 0 ? style.active : ""}`}
            ></div>
          </button>
          <button onClick={() => setIndex(1) & setTouched(true)}>
            <div
              className={`${style.innerDiv} ${index === 1 ? style.active : ""}`}
            ></div>
          </button>
          <button onClick={() => setIndex(2) & setTouched(true)}>
            <div
              className={`${style.innerDiv} ${index === 2 ? style.active : ""}`}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselNew;
