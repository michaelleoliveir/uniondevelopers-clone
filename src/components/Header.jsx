"use client";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="w-full bg-slate-950 shadow-md fixed top-0 left-0 z-50 font-poppins">
            <div className="container mx-auto flex lg:justify-center justify-between items-center p-3 lg:p-4">
                {/* logo */}
                <Link href="/" className="lg:pl-[1rem]">
                    <img
                        src="https://media.graphassets.com/2rObY82rREidExKivdTB"
                        alt="Logo"
                        className="w-[13rem] lg:w-64 h-auto"
                    />
                </Link>

                {/* menu sanduíche */}
                <button className="lg:hidden text-white text-2xl" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </button>

                {/* telas maiores (>= 1300px) */}
                <nav className="hidden lg:flex space-x-15 text-white">
                    <Link href="/" className="font-bold text-lg pr-[2rem] pl-[2rem]">
                        Sobre
                    </Link>
                    <Link href="/sobre" className="font-bold text-lg pr-[2rem]">
                        Pilares
                    </Link>
                    <Link href="/servicos" className="font-bold text-lg pr-[2rem]">
                        Benefícios
                    </Link>
                    <Link href="/contato" className="font-bold text-lg pr-[2rem]">
                        Etapas
                    </Link>
                    <Link href="/contato" className="font-bold text-lg pr-[2rem]">
                        Depoimentos
                    </Link>
                    <Link href="/contato" className="font-bold text-lg pr-[2rem]">
                        Dúvidas
                    </Link>
                </nav>

                <Link
                    href="#"
                    className="hidden lg:flex bg-gradient-to-r from-purple-600 to-blue-500 text-white px-[50px] py-4 rounded-lg font-bold shadow-md hover:opacity-80 transition"
                >
                    Junte-se a nós
                </Link>
            </div>

            {/* menu mobile */}
            <div className={`lg:hidden ${menuOpen ? "block" : "hidden"} bg-slate-950 p-4`}>
                <div className="flex flex-col space-y-6">
                    <nav className="flex flex-col space-y-4 pl-7">
                        <Link href="/" className="block font-bold text-white">
                            Sobre
                        </Link>
                        <Link href="/sobre" className="block font-bold text-white">
                            Pilares
                        </Link>
                        <Link href="/servicos" className="block font-bold text-white">
                            Benefícios
                        </Link>
                        <Link href="/contato" className="block font-bold text-white">
                            Etapas
                        </Link>
                        <Link href="/contato" className="block font-bold text-white">
                            Depoimentos
                        </Link>
                        <Link href="/contato" className="block font-bold text-white">
                            Dúvidas
                        </Link>
                    </nav>

                    <Link
                        href="#"
                        className="bg-gradient-to-r from-purple-600 to-blue-500 text-white w-[11rem] ml-5 px-5 py-3 rounded-lg font-bold shadow-md hover:opacity-80 transition"
                    >
                        Junte-se a nós
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
