"use client";

import React, { useState, useEffect } from "react";
import { useForm, FieldErrors } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const personalFormSchema = z.object({
    name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
    age: z.string().refine(value => !isNaN(Number(value)), {
        message: "A idade deve ser um número",
    }).transform(value => Number(value)).refine(value => value >= 18, {
        message: "É necessário ter no mínimo 18 anos para participar",
    }),
    email: z.string().email("Digite um e-mail válido"),
    github: z.string().min(1, "Usuário inválido"),
    linkedin: z.string().min(1, "Usuário inválido"),
    tech: z.enum(["front", "back"], {
        errorMap: () => ({ message: "Escolha uma tecnologia para trabalhar" })
    }),
});

const technicalFormSchema = z.object({
    time: z.enum(["1 ano", "2 anos", "3 anos", "Mais"], {
        errorMap: () => ({ message: "Selecione uma opção" })
    }),
    repo: z.string().url("Por favor, insira um link válido para o repositório."),
    description: z.string().min(1, "Por favor, descreva o projeto."),
});

const aboutYouFormSchema = z.object({
    motivation: z.string().min(3, "Por favor, preencha o campo"),
    respons: z.string().min(3, "Por favor, preencha o campo"),
    feedback: z.string().min(3, "Por favor, preencha o campo"),
    union: z.string().min(3, "Por favor, preencha o campo"),
    part: z.string().min(3, "Por favor, preencha o campo"),
    oport: z.string().min(3, "Por favor, preencha o campo"),
    termsAccepted: z.boolean().refine((value) => value === true, {
        message: "Você precisa aceitar os termos para continuar",
    }),
});

type PersonalFormData = z.infer<typeof personalFormSchema>;
type TechnicalFormData = z.infer<typeof technicalFormSchema>;
type AboutYouFormData = z.infer<typeof aboutYouFormSchema>;

const JoinUsSection = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<PersonalFormData | TechnicalFormData | AboutYouFormData | null>(null);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    // Usando useForm e passando o esquema correto de acordo com a etapa
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        trigger,
        reset,
    } = useForm<PersonalFormData | TechnicalFormData | AboutYouFormData>({
        resolver: zodResolver(step === 1 ? personalFormSchema : (step === 2 ? technicalFormSchema : aboutYouFormSchema)),
        mode: "all",
    });

    useEffect(() => {
    }, [errors, isValid]);

    useEffect(() => {
        const savedData = localStorage.getItem("joinUsData");
        if (savedData) {
            setIsFormVisible(true);
        }
    }, []);

    const updateData = (data: PersonalFormData | TechnicalFormData | AboutYouFormData) => {
        setFormData(prev => ({ ...prev, ...data }));
        
        setStep(step + 1);
    };

    useEffect(() => {
        if (step === 4) {
            localStorage.setItem("joinUsData", JSON.stringify(formData));
            const savedData = localStorage.getItem("joinUsData");

            const parsedData = JSON.parse(savedData ?? "");
            setNome(parsedData.name)
            setEmail(parsedData.email)
        }
    }, [formData, step]);

    // voltando no formulário
    const handlePrevStep = () => {
        setStep(prev => prev - 1);
    };

    const [isTermOpen, setIsTermOpen] = useState(false);

    if (typeof window !== "undefined") {
        document.body.style.overflow = isTermOpen ? "hidden" : "auto";
    }

    return (
        <div className="flex items-center justify-center mx-auto mt-10 font-poppins">
            <div className="relative w-[94%] lg:w-[68rem] h-auto lg:h-auto bg-gradient-to-tr from-purple-900 from-0% to-[#06063a] to-100% p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
                <div className="text-center">
                    <h2 className="mt-4 mb-4 text-2xl font-bold lg:text-4xl">
                        Junte-se ao time!
                    </h2>
                    <p className="mb-6 text-center text-[0.9rem] lg:text-[1.2rem] w-[20rem] lg:w-[30rem] mx-auto">
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
                                className="lg:mt-5 pl-[5rem] pr-[5rem] lg:pl-[20rem] lg:pr-[20rem] lg:text-2xl py-3 lg:py-5 font-bold text-white transition duration-300 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg hover:bg-purple-700 shadow-xl"
                            >
                                Inscrever-se
                            </button>
                        </div>
                    ) : (
                        <div>
                            {step === 1 ? (
                                <form onSubmit={handleSubmit(updateData)} className="flex flex-col items-center justify-center text-left space-x-0-y-4">
                                    <h3 className="mb-4 text-xl font-semibold text-center">Formulário de Inscrição</h3>

                                    <label className="flex flex-col text-[1.1rem]">
                                        Nome Completo
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            placeholder="Seu nome completo"
                                            {...register("name")}
                                            className="w-[20rem] lg:w-[62rem] mt-3 px-2 py-2 text-black border border-gray-300 rounded-lg lg:py-2 lg:px-4"
                                        />
                                        {(errors as Partial<FieldErrors<PersonalFormData>>).name && (
                                            <p className="mt-2 text-sm text-red-500">
                                                {(errors as Partial<FieldErrors<PersonalFormData>>).name?.message}
                                            </p>
                                        )}
                                    </label>

                                    <label className="flex flex-col mt-5 text-[1.1rem]">
                                        Idade
                                        <input
                                            type="number"
                                            placeholder="Qual sua idade?"
                                            {...register("age")}
                                            className="w-[20rem] lg:w-[62rem] mt-3 px-2 py-2 text-black border border-gray-300 rounded-lg lg:py-2 lg:px-4"
                                        />
                                        {(errors as Partial<FieldErrors<PersonalFormData>>).age && (
                                            <p className="mt-2 text-sm text-red-500">
                                                {(errors as Partial<FieldErrors<PersonalFormData>>).age?.message}
                                            </p>
                                        )}
                                    </label>

                                    <label className="flex flex-col mt-5 text-[1.1rem]">
                                        Email
                                        <input
                                            autoComplete="off"
                                            type="email"
                                            placeholder="Seu email"
                                            {...register("email")}
                                            className="w-[20rem] lg:w-[62rem] mt-3 px-2 py-2 text-black border border-gray-300 rounded-lg lg:py-2 lg:px-4"
                                        />
                                        {(errors as Partial<FieldErrors<PersonalFormData>>).email && (
                                            <p className="mt-2 text-sm text-red-500">
                                                {(errors as Partial<FieldErrors<PersonalFormData>>).email?.message}
                                            </p>
                                        )}
                                    </label>

                                    <label className="flex flex-col mt-5 text-[1.1rem]">
                                        Github
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            placeholder="Qual seu Github?"
                                            {...register("github")}
                                            className="w-[20rem] lg:w-[62rem] mt-3 px-2 py-2 text-black border border-gray-300 rounded-lg lg:py-2 lg:px-4"
                                        />
                                        {(errors as Partial<FieldErrors<PersonalFormData>>).github && (
                                            <p className="mt-2 text-sm text-red-500">
                                                {(errors as Partial<FieldErrors<PersonalFormData>>).github?.message}
                                            </p>
                                        )}
                                    </label>

                                    <label className="flex flex-col mt-5 text-[1.1rem]">
                                        Linkedin
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            placeholder="Qual seu Linkedin?"
                                            {...register("linkedin")}
                                            className="w-[20rem] lg:w-[62rem] mt-3 px-2 py-2 text-black border border-gray-300 rounded-lg lg:py-2 lg:px-4"
                                        />
                                        {(errors as Partial<FieldErrors<PersonalFormData>>).linkedin && (
                                            <p className="mt-2 text-sm text-red-500">
                                                {(errors as Partial<FieldErrors<PersonalFormData>>).linkedin?.message}
                                            </p>
                                        )}
                                    </label>

                                    <div className="text-[1.1rem] flex flex-col items-start ml-12 mt-5 w-[100%]">
                                        <label>Onde você gosta mais de trabalhar?</label>
                                        <div>
                                            <input
                                                type="radio"
                                                id="front"
                                                value="front"
                                                {...register("tech")}
                                            />
                                            <label htmlFor="front" className="ml-2">Frontend</label>
                                        </div>
                                        <div className="mt-1">
                                            <input
                                                type="radio"
                                                id="back"
                                                value="back"
                                                {...register("tech")}
                                            />
                                            <label htmlFor="back" className="ml-2">Backend</label>
                                        </div>
                                        {(errors as Partial<FieldErrors<PersonalFormData>>).tech && (
                                            <p className="mt-2 text-sm text-red-500">
                                                {(errors as Partial<FieldErrors<PersonalFormData>>).tech?.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="mt-10">
                                        <button
                                            type="button"
                                            onClick={() => setIsFormVisible(false)}
                                            className={`bg-gradient-to-r from-purple-600 to-blue-500 lg:px-[12rem] px-10 py-4 mr-3 lg:text-2xl font-semibold text-white transition duration-300 rounded-lg`}
                                        >
                                            Voltar
                                        </button>

                                        <button
                                            type="submit"
                                            className={` bg-gradient-to-r from-purple-600 to-blue-500 lg:px-[12rem] lg:text-2xl px-10 py-4 p-3 ml-3 font-semibold text-white transition duration-300 rounded-lg ${isValid ? "" : "cursor-not-allowed"}`}
                                        >
                                            Próximo
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div>
                                    {step === 2 ? (
                                        <form onSubmit={handleSubmit(updateData)} className="flex flex-col items-center justify-center text-left space-x-0-y-4">
                                            <h3 className="mb-4 text-xl font-semibold text-center">Informações Técnicas</h3>

                                            <div className="items-start ml-3 lg:ml-5">
                                                <div className="text-sm lg:text-[1.1rem] flex flex-col mt-5 w-[100%]">
                                                    <label>Quanto tempo você estuda programação?</label>
                                                    <div>
                                                        <input
                                                            type="radio"
                                                            id="one"
                                                            value="1 ano"
                                                            {...register("time")}
                                                        />
                                                        <label htmlFor="one" className="ml-2">1 ano</label>
                                                    </div>
                                                    <div className="mt-1">
                                                        <input
                                                            type="radio"
                                                            id="two"
                                                            value="2 anos"
                                                            {...register("time")}
                                                        />
                                                        <label htmlFor="two" className="ml-2">2 anos</label>
                                                    </div>
                                                    <div className="mt-1">
                                                        <input
                                                            type="radio"
                                                            id="three"
                                                            value="3 anos"
                                                            {...register("time")}
                                                        />
                                                        <label htmlFor="three" className="ml-2">3 anos</label>
                                                    </div>
                                                    <div className="mt-1">
                                                        <input
                                                            type="radio"
                                                            id="more"
                                                            value="Mais"
                                                            {...register("time")}
                                                        />
                                                        <label htmlFor="more" className="ml-2">Mais de 3 anos</label>
                                                    </div>
                                                    {(errors as Partial<FieldErrors<TechnicalFormData>>).time && (
                                                        <p className="mt-2 text-sm text-red-500">
                                                            {(errors as Partial<FieldErrors<TechnicalFormData>>).time?.message}
                                                        </p>
                                                    )}
                                                </div>
                                                <label className="flex flex-col items-start mt-5 text-[1.1rem]">
                                                    Link do repositório do seu melhor projeto
                                                    <input
                                                        autoComplete="off"
                                                        type="text"
                                                        placeholder="Qual o link do repositório do seu melhor projeto?"
                                                        {...register("repo")}
                                                        className="lg:w-[62rem] mt-3 px-2 py-2 text-black border border-gray-300 rounded-lg lg:py-2 lg:px-4 w-[100%]"
                                                    />
                                                    {(errors as Partial<FieldErrors<TechnicalFormData>>).repo && (
                                                        <p className="mt-2 text-sm text-red-500">
                                                            {(errors as Partial<FieldErrors<TechnicalFormData>>).repo?.message}
                                                        </p>
                                                    )}
                                                </label>
                                                <label className="flex flex-col mt-5 text-[1.1rem]">
                                                    Fale sobre como foi construir esse projeto? Quais foram os aprendizados e dificuldades que teve durante o desenvolvimento?
                                                    <textarea
                                                        autoComplete="off"
                                                        placeholder="Fale sobre o seu melhor projeto, nos conte como foi trabalhar nesse projeto"
                                                        {...register("description")}
                                                        className="w-[100%] lg:w-[62rem] mt-3 px-2 py-2 text-black border border-gray-300 rounded-lg lg:py-2 lg:px-4 min-h-[9rem]"
                                                    />
                                                    {(errors as Partial<FieldErrors<TechnicalFormData>>).description && (
                                                        <p className="mt-2 text-sm text-red-500">
                                                            {(errors as Partial<FieldErrors<TechnicalFormData>>).description?.message}
                                                        </p>
                                                    )}
                                                </label>
                                            </div>

                                            <div className="mt-10">
                                                <button
                                                    type="button"
                                                    onClick={() => handlePrevStep()}
                                                    className={`bg-gradient-to-r from-purple-600 to-blue-500 lg:px-[12rem] px-10 py-4 mr-3 lg:text-2xl font-semibold text-white transition duration-300 rounded-lg`}
                                                >
                                                    Voltar
                                                </button>

                                                <button
                                                    type="submit"
                                                    className={`bg-gradient-to-r from-purple-600 to-blue-500 lg:px-[12rem] px-10 py-4 mr-3 lg:text-2xl font-semibold text-white transition duration-300 rounded-lg`}
                                                >
                                                    Próximo
                                                </button>
                                            </div>
                                        </form>
                                    ) : (
                                        <div>
                                            {step === 3 ? (
                                                <form onSubmit={handleSubmit(updateData)} className="flex flex-col items-center justify-center text-left space-x-0-y-4">
                                                    <h3 className="mb-4 text-xl font-semibold text-center">Sobre você</h3>

                                                    <div className="items-start ml-3 lg:ml-5">
                                                        <label className="flex flex-col items-start mt-5 text-sm lg:text-[1.1rem]">
                                                            Por que você gosta de programar? Qual sua maior motivação?
                                                            <textarea
                                                                autoComplete="off"
                                                                placeholder="Qual é a sua maior motivação para fazer o que faz?"
                                                                {...register("motivation")}
                                                                className="lg:w-[62rem] mt-3 px-2 py-2 text-black border border-gray-300 rounded-lg lg:py-2 lg:px-4 w-[100%] min-h-[9rem] resize-none"
                                                            />
                                                            {(errors as Partial<FieldErrors<AboutYouFormData>>).motivation && (
                                                                <p className="mt-2 text-sm text-red-500">
                                                                    {(errors as Partial<FieldErrors<AboutYouFormData>>).motivation?.message}
                                                                </p>
                                                            )}
                                                        </label>
                                                        <label className="flex flex-col items-start mt-5 text-sm lg:text-[1.1rem]">
                                                            Como você faz para conseguir cumprir todos as suas responsabilidades do dia a dia?
                                                            <textarea
                                                                autoComplete="off"
                                                                placeholder="Como você faz para conseguir cumprir todos as suas responsabilidades do dia a dia?"
                                                                {...register("respons")}
                                                                className="lg:w-[62rem] mt-3 px-2 py-2 text-black border border-gray-300 rounded-lg lg:py-2 lg:px-4 w-[100%] min-h-[9rem] resize-none"
                                                            />
                                                            {(errors as Partial<FieldErrors<AboutYouFormData>>).respons && (
                                                                <p className="mt-2 text-sm text-red-500">
                                                                    {(errors as Partial<FieldErrors<AboutYouFormData>>).respons?.message}
                                                                </p>
                                                            )}
                                                        </label>
                                                        <label className="flex flex-col items-start mt-5 text-sm lg:text-[1.1rem]">
                                                            Quando você recebe um feedback, como é para você?
                                                            <textarea
                                                                autoComplete="off"
                                                                placeholder="Nos conte como é para você receber feedback?"
                                                                {...register("feedback")}
                                                                className="lg:w-[62rem] mt-3 px-2 py-2 text-black border border-gray-300 rounded-lg lg:py-2 lg:px-4 w-[100%] min-h-[9rem] resize-none"
                                                            />
                                                            {(errors as Partial<FieldErrors<AboutYouFormData>>).feedback && (
                                                                <p className="mt-2 text-sm text-red-500">
                                                                    {(errors as Partial<FieldErrors<AboutYouFormData>>).feedback?.message}
                                                                </p>
                                                            )}
                                                        </label>
                                                        <label className="flex flex-col items-start mt-5 text-sm lg:text-[1.1rem]">
                                                            Como você ficou sabendo sobre o Union?
                                                            <textarea
                                                                autoComplete="off"
                                                                placeholder="Como você ficou sabendo sobre o Union?"
                                                                {...register("union")}
                                                                className="lg:w-[62rem] mt-3 px-2 py-2 text-black border border-gray-300 rounded-lg lg:py-2 lg:px-4 w-[100%] min-h-[9rem] resize-none"
                                                            />
                                                            {(errors as Partial<FieldErrors<AboutYouFormData>>).union && (
                                                                <p className="mt-2 text-sm text-red-500">
                                                                    {(errors as Partial<FieldErrors<AboutYouFormData>>).union?.message}
                                                                </p>
                                                            )}
                                                        </label>
                                                        <label className="flex flex-col items-start mt-5 text-sm lg:text-[1.1rem]">
                                                            Por que você quer fazer parte do Union?
                                                            <textarea
                                                                autoComplete="off"
                                                                placeholder="Por que você quer fazer parte do Union?"
                                                                {...register("part")}
                                                                className="lg:w-[62rem] mt-3 px-2 py-2 text-black border border-gray-300 rounded-lg lg:py-2 lg:px-4 w-[100%] min-h-[9rem] resize-none"
                                                            />
                                                            {(errors as Partial<FieldErrors<AboutYouFormData>>).part && (
                                                                <p className="mt-2 text-sm text-red-500">
                                                                    {(errors as Partial<FieldErrors<AboutYouFormData>>).part?.message}
                                                                </p>
                                                            )}
                                                        </label>
                                                        <label className="flex flex-col items-start mt-5 text-sm lg:text-[1.1rem]">
                                                            Por que você deveria fazer parte do pequeno grupo que vai ter a oportunidade de participar do Union?
                                                            <textarea
                                                                autoComplete="off"
                                                                placeholder="Por que você deveria fazer parte do pequeno grupo que vai ter a oportunidade de participar do Union?"
                                                                {...register("oport")}
                                                                className="lg:w-[62rem] mt-3 px-2 py-2 text-black border border-gray-300 rounded-lg lg:py-2 lg:px-4 w-[100%] min-h-[9rem] resize-none"
                                                            />
                                                            {(errors as Partial<FieldErrors<AboutYouFormData>>).oport && (
                                                                <p className="mt-2 text-sm text-red-500">
                                                                    {(errors as Partial<FieldErrors<AboutYouFormData>>).oport?.message}
                                                                </p>
                                                            )}
                                                        </label>

                                                        <div className="flex items-center gap-2 mt-5">
                                                            <input type="checkbox" {...register("termsAccepted")} />
                                                            <h1 className="text-2xl">Li e concordo com os
                                                                <button className="ml-1 border-b-4" onClick={() => setIsTermOpen(true)}>
                                                                    termos
                                                                </button>
                                                            </h1>
                                                        </div>
                                                        {(errors as Partial<FieldErrors<AboutYouFormData>>).termsAccepted && (
                                                            <p className="mt-2 text-sm text-red-500">
                                                                {(errors as Partial<FieldErrors<AboutYouFormData>>).termsAccepted?.message}
                                                            </p>
                                                        )}

                                                    </div>

                                                    <div className="mt-10">
                                                        <button
                                                            type="button"
                                                            onClick={() => handlePrevStep()}
                                                            className={`bg-gradient-to-r from-purple-600 to-blue-500 lg:px-[12rem] px-10 py-4 mr-3 lg:text-2xl font-semibold text-white transition duration-300 rounded-lg`}
                                                        >
                                                            Voltar
                                                        </button>

                                                        <button
                                                            type="submit"
                                                            className={`bg-gradient-to-r from-purple-600 to-blue-500 lg:px-[12rem] px-10 py-4 mr-3 lg:text-2xl font-semibold text-white transition duration-300 rounded-lg`}
                                                        >
                                                            Próximo
                                                        </button>
                                                    </div>
                                                </form>
                                            ) : (
                                                <div>
                                                    <img src="https://media.graphassets.com/05PPTFLdTGWFD091Jes1" alt="Ícone de positivo, representando que a inscrição foi realizada com sucesso"></img>
                                                    <h1>Inscrição realizada com sucesso!</h1>
                                                    <p>Obrigado {nome} por querer fazer parte do Union, em breve nossa equipe vai entrar em contato pelo seu email {email}, fique atento.</p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {isTermOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-[95%] lg:w-[60%] max-h-[80vh] p-6 rounded-lg shadow-lg bg-gradient-to-br from-[#0048FE] to-[#851D86] overflow-y-auto">
                        <button className="absolute" onClick={() => setIsTermOpen(false)}>
                            <img src="https://media.graphassets.com/2b1hfUteQ6ufV3b1dkRf" />
                        </button>

                        <div>
                            <h2 className="pt-10 pb-4 mb-4 text-3xl font-bold text-center border-b-2">
                                Termos e condições
                            </h2>
                        </div>

                        <div>
                            <p className="text-[1.2rem] font-bold mb-4">
                                Ao prosseguir com o preenchimento do formulário de inscrição, você concorda com os seguintes termos e condições do Union:
                            </p>
                        </div>

                        <div className="max-h-[50vh] p-2">
                            <ol className="pb-8 space-y-4 list-decimal">
                                <li>
                                    <h4 className="font-bold text-[1.2rem]">Autorização para coleta de informações:</h4>
                                    Ao fornecer suas informações pessoais no formulário de inscrição, você autoriza o Union a coletar, armazenar e utilizar os dados fornecidos para fins de avaliação de inscrição e para a organização das atividades no âmbito do programa. Comprometemo-nos a proteger a privacidade e confidencialidade dos seus dados, em conformidade com as leis aplicáveis de proteção de dados.
                                </li>
                                <li>
                                    <h4 className="font-bold text-[1.2rem]">Idade mínima:</h4>
                                    Todos os membros do Union devem ter 18 anos de idade ou mais para participar do programa.
                                </li>
                                <li>
                                    <h4 className="font-bold text-[1.2rem]">Utilização de webcam:</h4>
                                    Os membros do Union devem possuir uma webcam para participar de entrevistas, reuniões e atividades do programa. A utilização de webcam é fundamental para promover um ambiente de interação e colaboração entre os membros.
                                </li>
                                <li>
                                    <h4 className="font-bold text-[1.2rem]">Gravação de entrevistas e reuniões:</h4>
                                    Você concorda que todas as entrevistas e reuniões realizadas no âmbito do Union poderão ser gravadas para fins de registro e acompanhamento das atividades do programa. Essas gravações poderão ser utilizadas internamente pelo Union para fins de análise, feedback e melhoria contínua do programa. Além disso, o Union poderá utilizar essas gravações de forma selecionada para divulgar em suas redes sociais ou outros meios de comunicação, sempre com o objetivo de promover a transparência e compartilhar a experiência do programa.
                                </li>
                                <li>
                                    <h4 className="font-bold text-[1.2rem]">Remoção de membros:</h4>
                                    O Union se reserva o direito de remover membros do programa caso seja identificado algum comportamento inadequado ou em desacordo com as regras e valores estabelecidos. Nossa intenção é manter um ambiente colaborativo e respeitoso para todos os participantes do Union.
                                </li>
                                <li>
                                    <h4 className="font-bold text-[1.2rem]">Uso das informações para fins de divulgação:</h4>
                                    Ao participar do Union, você concorda que poderemos utilizar seu nome e depoimentos para fins de divulgação, tais como posts em redes sociais, artigos no blog, e outras formas de comunicação sobre o programa. No entanto, qualquer informação pessoal sensível será mantida em sigilo e não será divulgada publicamente sem sua autorização prévia.
                                </li>
                                <li>
                                    <h4 className="font-bold text-[1.2rem]">Atualização dos termos e condições:</h4>
                                    Os termos e condições do Union podem ser atualizados periodicamente. Quaisquer alterações serão comunicadas aos membros e publicadas na landing page do Union. Ao continuar participando do programa após a atualização dos termos, você estará concordando com as novas condições.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default JoinUsSection;
