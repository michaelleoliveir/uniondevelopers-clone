"use client";

import React, { FC, useState, useEffect } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const sections = [
    { name: "Sobre", id: "sobre" },
    { name: "Pilares", id: "pilares" },
    { name: "Benefícios", id: "beneficio" },
    { name: "Etapas", id: "passos" },
    { name: "Depoimentos", id: "carrossel" },
    { name: "Dúvidas", id: "perguntas" },
];

const Header: FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>("");

    const toggleMenu = (): void => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: "smooth",
            });
            setMenuOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 z-50 w-full shadow-md bg-slate-950 font-poppins">
            <div className="container flex items-center justify-between p-3 mx-auto lg:justify-center lg:p-4">
                <Link href="/" className="lg:pl-[1rem]">
                    <img
                        src="https://media.graphassets.com/2rObY82rREidExKivdTB"
                        alt="Logo"
                        className="w-[13rem] lg:w-64 h-auto mr-4"
                    />
                </Link>

                <button className="text-2xl text-white lg:hidden" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </button>

                {/* Menu Desktop */}
                <nav className="hidden text-white lg:flex space-x-15">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => handleScrollToSection(section.id)}
                            className="font-bold text-lg pr-[1.4rem] pl-[1.4rem]"
                        >
                            <span
                                className={`${
                                    activeSection === section.id
                                        ? "bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                                        : "text-white"
                                }`}
                            >
                                {section.name}
                            </span>
                        </button>
                    ))}
                </nav>

                <button
                    onClick={() => handleScrollToSection("junte")}
                    className="hidden lg:flex bg-gradient-to-r from-purple-600 to-blue-500 text-white px-[50px] py-4 rounded-lg font-bold shadow-md hover:opacity-80 transition"
                >
                    Junte-se a nós
                </button>
            </div>

            {/* Menu Mobile */}
            <div className={`lg:hidden ${menuOpen ? "block" : "hidden"} bg-slate-950 p-4`}>
                <div className="flex flex-col items-start space-y-6">
                    <nav className="space-y-4 pl-7">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => handleScrollToSection(section.id)}
                                className="block font-bold"
                            >
                                <span
                                    className={`${
                                        activeSection === section.id
                                            ? "bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                                            : "text-white"
                                    }text-left`}
                                >
                                    {section.name}
                                </span>
                            </button>
                        ))}
                    </nav>

                    <button
                        onClick={() => handleScrollToSection("junte")}
                        className="bg-gradient-to-r from-purple-600 to-blue-500 text-white w-[11rem] ml-5 px-5 py-3 rounded-lg font-bold shadow-md hover:opacity-80 transition"
                    >
                        Junte-se a nós
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
