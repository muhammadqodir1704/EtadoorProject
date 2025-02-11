import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "../styles.css";
import { Image } from "antd";

// import required modules
import { Pagination } from 'swiper/modules';
export default function Sertifikati() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <h1 className='font-noto-sans-georgian' style={{fontSize:35 , paddingBottom: 40 , fontWeight:700}}>Паспорта и сертификаты</h1>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src="https://etadoor.ru/uploads/images/2022-04-04-syvpot.jpg" alt="sertifikat" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://etadoor.ru/uploads/images/2022-04-04-nqg6lj.jpg" alt="sertifikat" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://etadoor.ru/uploads/images/2022-04-04-9qzd8x.jpg" alt="sertifikat" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://etadoor.ru/uploads/images/2022-04-04-cvn91y.jpg" alt="sertifikat" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://etadoor.ru/uploads/images/2022-04-04-rg4ep2.jpg" alt="sertifikat" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://etadoor.ru/uploads/images/2022-04-04-nm1k4g.jpg" alt="sertifikat" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://etadoor.ru/uploads/images/2022-04-04-7693hq.jpg" alt="sertifikat" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://etadoor.ru/uploads/images/2022-04-04-5einju.jpg" alt="sertifikat" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
