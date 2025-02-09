"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
    age: z.string().refine(value => !isNaN(Number(value)), {
        message: "A idade deve ser um número",
    }).transform(value => Number(value)).refine(value => value >= 18, {
        message: "É necessário ter no mínimo 18 anos para participar",
    }),
    email: z.string().email("Digite um e-mail válido"),
    github: z.string().min(1, "Usuário inválido"),
    linkedin: z.string().min(1, "Usuário inválido"),
    reason: z.string().min(10, "Explique com pelo menos 10 caracteres"),
    tech: z.enum(["front", "back"], {
        errorMap: () => ({ message: "Escolha uma tecnologia para trabalhar" })
    })
});

type FormData = z.infer<typeof formSchema>;

const JoinUsSection = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [step, setStep] = useState(1);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        trigger
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
    });

    useEffect(() => {
        const savedData = localStorage.getItem("joinUsData");
        if (savedData) {
            setIsFormVisible(true);
        }
    }, []);

    const onSubmit = (data: FormData) => {
        localStorage.setItem("joinUsData", JSON.stringify(data));
        setStep(2);
    };

    const handleNextStep = async (): Promise<void> => {
        const valid = await trigger();
        if (valid) {
            setStep(2);
        }
    };

    return (
        <div className="flex items-center justify-center mx-auto mt-10 font-poppins">
            <div className="relative w-[94%] lg:w-[68rem] h-auto lg:h-auto bg-gradient-to-tr from-purple-900 from-0% to-[#06063a] to-100% p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
                <div className="text-center">
                    <h2 className="mt-4 mb-4 text-2xl font-bold lg:text-4xl">
                        Junte-se ao time!
                    </h2>
                    <p className="mb-6 text-center text-[0.9rem] lg:text-[1.2rem] lg:w-[30rem] mx-auto">
                        {isFormVisible
                            ? "Ficamos felizes em saber que você tem interesse em fazer parte do Union! Agora é só responder o nosso formulário"
                            : "Tem interesse em participar do Union? Confira abaixo os requisitos para participar:"}
                    </p>

                    {!isFormVisible ? (
                        <div>
                            <ul className="space-y-4 mb-6 ml-5 text-left list-none text-[0.8rem] lg:text-[1.2rem]">
                                {[
                                    "Ter mais que 18 anos",
                                    "Ter 1 ano ou mais de estudo em programação",
                                    "Ainda não trabalhar na área",
                                    "Já ter criado projetos sozinho que não sejam de cursos ou eventos",
                                    "Não participar de bootcamps ou programas de capacitação",
                                    "Ter disponibilidade para trabalhar no mínimo 1 hora por dia no projeto",
                                    "Ter disponibilidade para participar das reuniões do time",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center mt-4">
                                        <img
                                            src="https://media.graphassets.com/9YpETKdFREqKQa2wztob"
                                            alt=""
                                            className="pr-2"
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => setIsFormVisible(true)}
                                className="lg:mt-5 pl-[9rem] pr-[9rem] lg:pl-[20rem] lg:pr-[20rem] lg:text-2xl py-3 lg:py-5 font-bold text-white transition duration-300 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg hover:bg-purple-700 shadow-xl"
                            >
                                Inscrever-se
                            </button>
                        </div>
                    ) : (
                        <div>
                            {step === 1 ? (
                                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center text-left space-x-0-y-4">
                                    <h3 className="mb-4 text-xl font-semibold text-center">Formulário de Inscrição</h3>

                                    <label className="flex flex-col">
                                        Nome Completo
                                        <input
                                            type="text"
                                            placeholder="Seu nome completo"
                                            {...register("name")}
                                            className="w-[20rem] lg:w-[62rem] mt-3 px-2 py-2 text-black border border-gray-300 rounded-lg lg:py-2 lg:px-4"
                                        />
                                        {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>}
                                    </label>

                                    <label className="flex flex-col mt-5">
                                        Idade
                                        <input
                                            type="number"
                                            placeholder="Qual sua idade?"
                                            {...register("age")}
                                            className="w-[20rem] lg:w-[62rem] mt-3 px-2 py-2 text-black border border-gray-300 rounded-lg lg:py-2 lg:px-4"
                                        />
                                        {errors.age && <p className="text-sm text-red-500">{errors.age.message}</p>}
                                    </label>

                                    <label className="flex flex-col mt-5">
                                        Email
                                        <input
                                            type="email"
                                            placeholder="Seu email"
                                            {...register("email")}
                                            className="w-[20rem] lg:w-[62rem] mt-3 px-2 py-2 text-black border border-gray-300 rounded-lg lg:py-2 lg:px-4"
                                        />
                                        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                                    </label>

                                    <label className="flex flex-col mt-5">
                                        Github
                                        <input
                                            type="text"
                                            placeholder="Qual seu Github?"
                                            {...register("github")}
                                            className="w-[20rem] lg:w-[62rem] mt-3 px-2 py-2 text-black border border-gray-300 rounded-lg lg:py-2 lg:px-4"
                                        />
                                        {errors.github && <p className="text-sm text-red-500">{errors.github.message}</p>}
                                    </label>

                                    <label className="flex flex-col mt-5">
                                        Linkedin
                                        <input
                                            type="text"
                                            placeholder="Qual seu Linkedin?"
                                            {...register("linkedin")}
                                            className="w-[20rem] lg:w-[62rem] mt-3 px-2 py-2 text-black border border-gray-300 rounded-lg lg:py-2 lg:px-4"
                                        />
                                        {errors.linkedin && <p className="text-sm text-red-500">{errors.linkedin.message}</p>}
                                    </label>

                                    <div className="flex flex-col !items-start mt-5">
                                        <label>Onde você gosta mais de trabalhar?</label>
                                        <div>
                                            <input
                                                type="radio"
                                                id="front"
                                                value="front"
                                                {...register("tech")}
                                            />
                                            <label htmlFor="front">Frontend</label>
                                        </div>
                                        <div>
                                            <input
                                                type="radio"
                                                id="back"
                                                value="back"
                                                {...register("tech")}
                                            />
                                            <label htmlFor="back">Backend</label>
                                        </div>
                                        {errors.tech && <p className="text-sm text-red-500">{errors.tech.message}</p>}
                                    </div>

                                    <div className="mt-10">
                                        <button
                                            type="button"
                                            onClick={() => setIsFormVisible(false)}
                                            className={`bg-gradient-to-r from-purple-600 to-blue-500 lg:px-[12rem] px-16 py-4 ml-7 lg:text-2xl font-semibold text-white transition duration-300 rounded-lg`}
                                        >
                                            Voltar
                                        </button>

                                        <button
                                            onClick={handleNextStep}
                                            type="button"
                                            disabled={isValid}
                                            className={` lg:px-[12rem] lg:text-2xl px-16 py-4 ml-7 font-semibold text-white transition duration-300 rounded-lg ${isValid ? "bg-gradient-to-r from-purple-600 to-blue-500" : "cursor-not-allowed bg-gray-400"}`}
                                        >
                                            Próximo
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div>
                                    <h3 className="mb-4 text-xl font-semibold">Perguntas Adicionais</h3>
                                    <p className="text-white">Aqui estarão as novas perguntas...</p>
                                    <button
                                        onClick={() => setIsFormVisible(false)}
                                        className="px-6 py-2 mt-4 font-semibold text-white transition duration-300 bg-gray-500 rounded-lg hover:bg-gray-600"
                                    >
                                        Fechar
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JoinUsSection;
