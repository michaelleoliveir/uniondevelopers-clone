"use client";

import React, { FC, useState } from "react";
import { Virtual, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarouselSection: FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            heading: "Petrus Borges",
            text: "No Union eu consegui desenvolver minhas hard skills, aprendendo novas tecnologias e melhorando a escrita do meu código. Eu percebi o quanto a parte de soft skills é importante para o mercado de tecnologia, como ter inteligência emocional, comunicação efetiva e resolução de problemas.",
            image: "https://avatars.githubusercontent.com/u/105453766?v=4",
            linkedin: "https://www.linkedin.com/in/petrusborgesmachado/",
            github: "https://github.com/PetrusBorges"
        },
        {
            heading: "José Ronaldo",
            text: "O principal benefício do Union é ter uma pessoa mais experiente junto, que vai te direcionando. No Union, você encontra um ambiente muito profissional, onde é cobrado que você tenha padrão de commit, testes e uma alta qualidade de escrita de código, aumentando muita sua qualidade técnica.",
            image: "https://avatars.githubusercontent.com/u/83667469?v=4",
            linkedin: "https://www.linkedin.com/in/devjoseronaldo",
            github: "https://github.com/Dev-JoseRonaldo"
        },
        {
            heading: "Salomão Leal",
            text: "Eu estava preso em cursos e não sabia como que era o fluxo de trabalho de uma empresa, com o Union eu consegui aprender isso e hoje me sinto muito mais preparado para o mercado. Durante a experiência no Union, eu aprendi a como pesquisar e se virar para resolver minhas task.",
            image: "https://avatars.githubusercontent.com/u/90845572?v=4",
            linkedin: "https://www.linkedin.com/in/salomaosilval/",
            github: "https://github.com/salomaosilval"
        },
        {
            heading: "Luiz Meraki",
            text: "No Union você consegue ter muita evolução em pouco tempo, desenvolvendo tanto sua parte técnica como as habilidades interpessoais. No momento que você entra no Union, você mergulha a fundo nas tecnologias e vai aprendendo e aprimorando durante o dia a dia.",
            image: "https://avatars.githubusercontent.com/u/75648386?v=4",
            linkedin: "https://www.linkedin.com/in/luizmeraki/",
            github: "https://github.com/LuizMeraki"
        },
        {
            heading: "Matheus Oliveira",
            text: "Antes de participar do Union, eu não tinha a mínima ideia de como era trabalhar em equipe e foi muito importante ter essa experiência. Durante a participação, consegui desenvolver soft skills importantes para o mercado de trabalho, como organização, atenção e trabalho em equipe.",
            image: "https://avatars.githubusercontent.com/u/78116908?v=4",
            linkedin: "https://www.linkedin.com/in/matheushenrioliveira/",
            github: "https://github.com/matheusOliv23"
        },
    ];

    return (
        <section id="carrossel" className="flex flex-col items-center px-6 py-16 font-poppins">
            {/* Título */}
            <div className="flex items-center justify-center w-full mb-6">
                <span className="hidden md:block absolute left-0 w-[32%] h-[3px] rounded-[20px] bg-gradient-to-bl from-[rgb(0,72,254)] to-[rgb(133,29,134)]"></span>
                <h2 className="text-[32px] md:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)] mx-4">
                    Depoimentos
                </h2>
                <span className="hidden md:block absolute right-0 w-[32%] h-[3px] rounded-[20px] bg-gradient-to-bl from-[rgb(133,29,134)] to-[rgb(0,72,254)]"></span>
            </div>

            <p className="text-[18px] md:text-[24px] text-white font-400 text-center max-w-2xl mb-8">
                Veja o que quem já passou por essa experiência fala
            </p>

            {/* 🔹 Carousel */}
            <div className="relative w-full max-w-[1200px]">
                <Swiper
                    modules={[Virtual, Navigation]}
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    spaceBetween={35}
                    initialSlide={Math.floor(slides.length / 2)}
                    loop={true}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="relative"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center mt-10">
                            <div
                                className={`relative max-w-md rounded-lg bg-gradient-to-tr from-[rgb(133,29,134)] to-[rgb(0,72,254)] p-0.5 shadow-lg transition-all duration-300 mx-auto
                            ${index === activeIndex ? "w-[240px] lg:w-[398px] lg:h-[732px] mt-0" : "w-[280px] h-[630px] mt-[50px]"}`}
                            >
                                <div className="flex flex-col items-center justify-between h-full rounded-lg bg-[#1F1D2B] text-white p-6">
                                    <div className="flex justify-center mt-10">
                                        <img
                                            src={slide.image}
                                            alt={slide.heading}
                                            className="object-cover w-32 h-32 rounded-full"
                                        />
                                    </div>
                                    <h3 className="text-[20px] md:text-[24px] font-bold text-center mt-4">{slide.heading}</h3>
                                    <p className={`text-gray-300 text-center mt-2 ${index === activeIndex ? "lg:text-[1.3rem] text-[0.9rem] w-[12rem] lg:w-[22rem]" : "text-sm"}`}>{slide.text}</p>
                                    <div className="flex items-center justify-center mt-4 space-x-4 text-gray-400">
                                        <a href={slide.linkedin} target="_blank" rel="noopener noreferrer">
                                            <img
                                                src="https://media.graphassets.com/y4KMQdygSH6uZx46pxjU"
                                                alt="LinkedIn"
                                                className="h-11 w-11"
                                            />
                                            <p className="text-xs">LinkedIn</p>
                                        </a>
                                        <a href={slide.github} target="_blank" rel="noopener noreferrer">
                                            <img
                                                src="https://media.graphassets.com/4lDgbi8FQpq8QYSiranx"
                                                alt="GitHub"
                                                className="h-11 w-11"
                                            />
                                            <p className="text-xs">GitHub</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>

                {/* 🔹 Botões de Navegação */}
                <button className="swiper-button-prev absolute left-[-70px] top-1/2 transform -translate-y-1/2 z-20 text-purple-400 hover:text-white">
                    <ChevronLeft size={32} />
                </button>
                <button className="swiper-button-next absolute right-[-60px] top-1/2 transform -translate-y-1/2 z-20 text-purple-400 hover:text-white">
                    <ChevronRight size={32} />
                </button>
            </div>
        </section>
    );
};

export default CarouselSection;