"use client"

import React, { FC, useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Header: FC = () => {
    const [menuOpen, setMenuOpen] = useState < boolean > (false);

    const toggleMenu = (): void => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="fixed top-0 left-0 z-50 w-full shadow-md bg-slate-950 font-poppins">
            <div className="container flex items-center justify-between p-3 mx-auto lg:justify-center lg:p-4">
                <Link href="/" className="lg:pl-[1rem]">
                    <img
                        src="https://media.graphassets.com/2rObY82rREidExKivdTB"
                        alt="Logo"
                        className="w-[13rem] lg:w-64 h-auto"
                    />
                </Link>

                <button className="text-2xl text-white lg:hidden" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </button>

                <nav className="hidden text-white lg:flex space-x-15">
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