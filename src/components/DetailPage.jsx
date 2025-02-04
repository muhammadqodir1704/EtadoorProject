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
            <h1 className="font-noto-sans-georgian text-3xl font-bold text-gray-900 mb-6">{product.name}</h1>
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
                        <p style={{fontSize: 16 , fontWeight:700}}> {product.manufacturer || "Noma’lum"}</p>
                    </p>
                    <p className="text-lg text-gray-700 flex items-center">
                        <p style={{ fontSize: 16, fontWeight: 400 }} className="font-circe">Артикул:</p>
                        <hr style={{ color: '#00000040' }} className="flex-grow border-t-2 border-dashed mx-2" />
                        <p style={{fontSize: 16 , fontWeight:700}}> {product.article || "Noma’lum"}</p>
                    </p>
                    <p className="text-lg text-gray-700 flex items-center">
                        <p className="font-circe" style={{ fontSize: 16, fontWeight: 400 }}>цвет:</p>
                        <hr style={{ color: '#00000040' }} className="flex-grow border-t-2 border-dashed mx-2" />
                        <p style={{fontSize: 16 , fontWeight:700}}> {product.color || "Noma’lum"}</p>
                    </p>
                    <p className="text-lg text-gray-700 flex items-center">
                        <p className="font-circe" style={{ fontSize: 16, fontWeight: 400 }}>Странa :</p>
                        <hr style={{ color: '#00000040' }} className="flex-grow border-t-2 border-dashed mx-2" />
                        <p style={{fontSize:16 , fontWeight: 700}}>Россия</p>
                    </p>
                    <p className="text-lg text-gray-700 flex items-center">
                        <p className="font-circe" style={{ fontSize: 16, fontWeight: 400 }}>Наличие:</p>
                        <hr style={{ color: '#00000040' }} className="flex-grow border-t-2 border-dashed mx-2" />
                        <p  style={{color:'#219653' , fontSize: 16 , fontWeight:700}}>В наличии</p>
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                        {[
                            "200x2000 мм",
                            "300x2000 мм",
                            "400x2000 мм",
                            "500x2000 мм",
                            "600x2000 мм",
                            "700x2000 мм",
                            "800x2000 мм",
                            "900x2000 мм",
                            "Нестандартный",
                        ].map((size, index) => (
                            <label key={index} className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="doorSize" className="hidden peer" />
                                <div className="w-6 h-6 border-2 border-gray-400 rounded-lg flex items-center justify-center peer-checked:border-red-500">
                                    <div className="w-3 h-3 bg-transparent rounded-full peer-checked:bg-red-500"></div>
                                </div>
                                {size}
                            </label>
                        ))}
                    </div>
                    {/* swiper */}
                    <Swiper
                        slidesPerView={3}
                        direction={direction}
                        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <button
                                style={{ width: 80, height: 80 }}
                                className=" bg-red-400 rounded-full border-2 border-gray-300"
                            ></button>
                        </SwiperSlide>
                        <SwiperSlide>  <button
                            style={{ width: 80, height: 80 }}
                            className="bg-red-300 rounded-full border-2 border-gray-300"
                        ></button></SwiperSlide>
                        <SwiperSlide>
                            <button
                                style={{ width: 80, height: 80 }}
                                className=" bg-purple-600 rounded-full border-2 border-gray-300"
                            ></button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button
                                style={{ width: 80, height: 80 }}
                                className=" bg-blue-400 rounded-full border-2 border-gray-300"
                            ></button>
                        </SwiperSlide>

                        <div style={{ color: '#A08961' }} className="swiper-button-next"></div>
                        <div style={{ color: '#A08961' }} className="swiper-button-prev"></div>
                    </Swiper>

                    <div style={{ widht: 570, height: 42, backgroundColor: '#ece7e7' }} className="flex items-center justify-center">
                        <p style={{ fontSize: 16, fontWeight: 700, color: '#FF3C38' }} className="font-circe">
                            Работаем только с юридическими лицами.
                        </p>
                    </div>
                    <p style={{ fontSize: 30, fontWeight: 700, color: '#FF3C38', color: '#000' }} className="font-circe">
                        {product.finalPrice} руб.

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
