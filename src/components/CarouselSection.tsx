"use client";

import React, { FC, useState } from "react";
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";

const CarouselSection: FC = () => {
    // Estado para armazenar o índice do slide central
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            heading: "Petrus Borges",
            text: "No Union eu consegui desenvolver minhas hard skills, aprendendo novas tecnologias e melhorando a escrita do meu código. Eu percebi o quanto a parte de soft skills é importante para o mercado de tecnologia, como ter inteligência emocional, comunicação efetiva e resolução de problemas.",
            image: "https://avatars.githubusercontent.com/u/105453766?v=4",
        },
        {
            heading: "José Ronaldo",
            text: "O principal benefício do Union é ter uma pessoa mais experiente junto, que vai te direcionando. No Union, você encontra um ambiente muito profissional, onde é cobrado que você tenha padrão de commit, testes e uma alta qualidade de escrita de código, aumentando muita sua qualidade técnica.",
            image: "https://avatars.githubusercontent.com/u/83667469?v=4",
        },
        {
            heading: "Salomão Leal",
            text: "Eu estava preso em cursos e não sabia como que era o fluxo de trabalho de uma empresa, com o Union eu consegui aprender isso e hoje me sinto muito mais preparado para o mercado. Durante a experiência no Union, eu aprendi a como pesquisar e se virar para resolver minhas task.",
            image: "https://avatars.githubusercontent.com/u/90845572?v=4",
        },
        {
            heading: "Luiz Meraki",
            text: "No Union você consegue ter muita evolução em pouco tempo, desenvolvendo tanto sua parte técnica como as habilidades interpessoais. No momento que você entra no Union, você mergulha a fundo nas tecnologias e vai aprendendo e aprimorando durante o dia a dia.",
            image: "https://avatars.githubusercontent.com/u/75648386?v=4",
        },
        {
            heading: "Matheus Oliveira",
            text: "Antes de participar do Union, eu não tinha a mínima ideia de como era trabalhar em equipe e foi muito importante ter essa experiência. Durante a participação, consegui desenvolver soft skills importantes para o mercado de trabalho, como organização, atenção e trabalho em equipe.",
            image: "https://avatars.githubusercontent.com/u/78116908?v=4",
        },
    ];

    return (
        <div className="mx-auto flex items-center justify-center mt-[90px]">
            <div className="relative flex items-center justify-center w-full h-full p-6 bg-fundo rounded-2xl pb-9 font-poppins">
                <div className="absolute left-1/2 transform -translate-x-[50%] top-[30px] flex justify-between w-full lg:px-[30px]">
                    <div className="border-t-4 border-purple-600 w-[36%]"></div>
                    <div className="border-t-4 border-blue-500 w-[36%]"></div>
                </div>
                <div className="flex flex-col">
                    <p className="text-center pt-16 lg:text-2xl font-light w-[60rem] mx-auto">
                        Veja o que quem já passou por essa experiência fala
                    </p>

                    <div className="p-6 mt-6">
                        <Swiper
                            modules={[Virtual]}
                            spaceBetween={40}
                            slidesPerView={3}
                            centeredSlides={true}
                            slideToClickedSlide={true}
                            loop={true}
                            onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            style={{ width: "80rem" }}
                            className="overflow-visible"
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index} virtualIndex={index}>
                                    <div
                                        className={`flex flex-col items-center justify-center transition-all duration-300 ease-in-out p-8 border-2 border-indigo-700 rounded-lg shadow-md h-[35rem]
                                        ${
                                            index === activeIndex
                                                ? "scale-100 shadow-lg"
                                                : "scale-90"
                                        }`}
                                    >
                                        <img
                                            src={slide.image}
                                            alt={`Slide ${index + 1}`}
                                            className="object-cover w-32 h-32 mb-4 border-4 border-indigo-700 rounded-full"
                                        />
                                        <h1 className="pb-2 text-2xl font-bold">{slide.heading}</h1>
                                        <p className={`text-center
                                            ${
                                                index === activeIndex
                                                    ? "scale-100 shadow-lg text-[1.1rem]"
                                                    : "scale-90 text-1xl"
                                            }`}>{slide.text}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselSection;
