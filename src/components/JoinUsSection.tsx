"use client"

import React, { useState } from "react";

const JoinUsSection = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleButtonClick = () => {
        setIsFormVisible(true);
    };

    return (
        <div className="flex items-center justify-center mx-auto mt-10 font-poppins">
            <div className="relative w-[89%] lg:w-[68rem] lg:h-[38rem] bg-gradient-to-tr from-purple-900 from-0% to-[#06063a] to-100% via- p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
                <div className="text-center">
                    <h2 className="mt-4 mb-4 text-2xl font-bold lg:text-4xl">
                        Junte-se ao time!
                    </h2>
                    <p className="mb-6 text-center lg:text-[1.2rem] lg:w-[30rem] mx-auto">
                        Tem interesse em participar do Union? Confira abaixo os requisitos para participar:
                    </p>
                    {!isFormVisible ? (
                        <div>
                            <ul className="space-y-4 mb-6 ml-5 text-left list-none lg:text-[1.2rem]">
                                <li className="flex items-center mt-6">
                                    <img src="https://media.graphassets.com/9YpETKdFREqKQa2wztob" alt="" className="pr-2" />
                                    Ter mais que 18 anos
                                </li>
                                <li className="flex items-center mt-4">
                                    <img src="https://media.graphassets.com/9YpETKdFREqKQa2wztob" alt="" className="pr-2" />
                                    Ter 1 ano ou mais de estudo em programação
                                </li>
                                <li className="flex items-center mt-4">
                                    <img src="https://media.graphassets.com/9YpETKdFREqKQa2wztob" alt="" className="pr-2" />
                                    Ainda não trabalhar na área
                                </li>
                                <li className="flex items-center mt-4">
                                    <img src="https://media.graphassets.com/9YpETKdFREqKQa2wztob" alt="" className="pr-2" />
                                    Já ter criado projetos sozinho que não sejam de cursos ou eventos
                                </li>
                                <li className="flex items-center mt-4">
                                    <img src="https://media.graphassets.com/9YpETKdFREqKQa2wztob" alt="" className="pr-2" />
                                    Não participar de bootcamps ou programas de capacitação
                                </li>
                                <li className="flex items-center mt-4">
                                    <img src="https://media.graphassets.com/9YpETKdFREqKQa2wztob" alt="" className="pr-2" />
                                    Ter disponibilidade para trabalhar no mínimo 1 hora por dia no projeto
                                </li>
                                <li className="flex items-center mt-4">
                                    <img src="https://media.graphassets.com/9YpETKdFREqKQa2wztob" alt="" className="pr-2" />
                                    Ter disponibilidade para participar das reuniões do time, durante a semana e finais de semana
                                </li>
                            </ul>
                            <button
                                onClick={handleButtonClick}
                                className="mt-5 lg:px-[20rem] py-5 font-semibold text-white transition duration-300 bg-purple-600 rounded-lg hover:bg-purple-700"
                            >
                                Inscreva-se
                            </button>
                        </div>
                    ) : (
                        <div>
                            <h3 className="mb-4 text-xl font-semibold">Formulário de Inscrição</h3>
                            <form className="flex flex-col space-y-4">
                                <input
                                    type="text"
                                    placeholder="Seu nome completo"
                                    className="px-4 py-2 border border-gray-300 rounded-lg"
                                />
                                <input
                                    type="email"
                                    placeholder="Seu email"
                                    className="px-4 py-2 border border-gray-300 rounded-lg"
                                />
                                <textarea
                                    placeholder="Por que você quer participar?"
                                    className="px-4 py-2 border border-gray-300 rounded-lg"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-2 font-semibold text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
                                >
                                    Enviar Inscrição
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JoinUsSection;
