import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

// swiper color n
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles.css';

const DetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [swiperRef, setSwiperRef] = useState(null);
    const appendNumber = useRef(500);
    const prependNumber = useRef(1);
    const [direction, setDirection] = useState(getDirection());
    const [slides, setSlides] = useState(
        Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
    );
    useEffect(() => {
        const handleResize = () => setDirection(getDirection());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function getDirection() {
        return window.innerWidth <= 760 ? "vertical" : "horizontal";
    }


    // const prepend = () => {
    //     setSlides([
    //         `Slide ${prependNumber.current - 2}`,
    //         `Slide ${prependNumber.current - 1}`,
    //         ...slides,
    //     ]);
    //     prependNumber.current = prependNumber.current - 2;
    //     swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
    // };

    // const append = () => {
    //     setSlides([...slides, 'Slide ' + ++appendNumber.current]);
    // };

    // const slideTo = (index) => {
    //     swiperRef.slideTo(index - 1, 0);
    // };

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await fetch(`https://etadoor.up.railway.app/api/doors/${id}`);
                if (!response.ok) {
                    throw new Error(`Server xatosi: ${response.status}`);
                }
                const result = await response.json();

                console.log("API dan kelgan ma'lumot:", result);

                // `data` obyekt ekanligini tekshiramiz
                if (result.success && typeof result.data === "object" && result.data !== null) {
                    setProduct(result.data);
                } else {
                    console.error("Mahsulot topilmadi yoki data obyekt emas!");
                    setProduct(null);
                }

                setLoading(false);
            } catch (error) {
                console.error("API xatolik:", error);
                setLoading(false);
            }
        };

        fetchProductDetail();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#a78b5a] border-t-transparent"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-red-500 text-lg">Mahsulot topilmadi.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{product.name}</h1>
            <div className="flex gap-10">
                <div className="w-1/2">
                    <img
                        src={product.images?.[0] || "/placeholder.jpg"}
                        alt={product.name}
                        className="w-full h-[450px] object-cover rounded-lg shadow-md"
                    />
                    <div className="flex mt-4 gap-2">
                        {product.images?.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Variant ${index}`}
                                className="w-16 h-16 object-cover rounded-md border hover:border-[#a78b5a]"
                            />
                        ))}
                    </div>
                </div>
                <div style={{ width: 570, height: 872 }} className=" space-y-4">
                    <p className="text-lg text-gray-700 flex items-center">
                        <p className="font-circe" style={{ fontSize: 16, fontWeight: 400 }}>Производитель:</p>
                        <hr style={{ color: '#00000040' }} className="flex-grow border-t-2 border-dashed mx-2" />
                        {product.manufacturer || "Noma’lum"}
                    </p>
                    <p className="text-lg text-gray-700 flex items-center">
                        <p style={{ fontSize: 16, fontWeight: 400 }} className="font-circe">Артикул:</p>
                        <hr style={{ color: '#00000040' }} className="flex-grow border-t-2 border-dashed mx-2" />
                        {product.article || "Noma’lum"}
                    </p>
                    <p className="text-lg text-gray-700 flex items-center">
                        <p className="font-circe" style={{ fontSize: 16, fontWeight: 400 }}>цвет:</p>
                        <hr style={{ color: '#00000040' }} className="flex-grow border-t-2 border-dashed mx-2" />
                        {product.color || "Noma’lum"}
                    </p>
                    <p className="text-lg text-gray-700 flex items-center">
                        <p className="font-circe" style={{ fontSize: 16, fontWeight: 400 }}>Странa :</p>
                        <hr style={{ color: '#00000040' }} className="flex-grow border-t-2 border-dashed mx-2" />
                        {product.color || "Noma’lum"}
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                        <label className="flex items-center gap-2">
                            <input type="radio" />
                            200x2000 мм
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" />
                            300x2000 мм
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" />
                            400x2000 мм
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" />
                            500x2000 мм
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" />
                            600x2000 мм
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" />
                            700x2000 мм
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" />
                            800x2000 мм
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" />
                            900x2000 мм
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" />
                            Нестандартный
                        </label>
                    </div>
                    {/* swiper */}
                    <Swiper
                        slidesPerView={3}
                        direction={direction}
                        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>


                        <div className="swiper-button-next">▶</div>
                        <div className="swiper-button-prev">◀</div>
                    </Swiper>
                    <p className="text-2xl font-bold text-[#a78b5a]">
                        {product.finalPrice} р.
                    </p>
                    <div className="flex items-center">
                        <button style={{ width: 277, height: 52 }} className=" bg-custom-red text-white py-3 px-6 transition-colors duration-300 font-medium">
                            Заказать
                        </button>
                        <button style={{ width: 277, height: 52 }} className="border border-custom-brown py-3 px-6 text-custom-black  transition-colors duration-300 font-medium ml-4">
                            Запросить прайс-лист
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
