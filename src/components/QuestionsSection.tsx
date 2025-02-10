"use client";

import React, { FC, useState, MouseEvent } from "react";

interface AccordionItemProps {
    header: string;
    text: React.ReactNode;
}

// criando os cards expansivos
const AccordionItem: FC<AccordionItemProps> = ({ header, text }) => {
    const [active, setActive] = useState<boolean>(false);

    const handleToggle = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setActive((prev) => !prev);
    };

    return (
        <div className="w-full mb-4 rounded-lg shadow-md">
            {/* cabeçalho */}
            <button
                className="flex items-center justify-between w-full p-6 text-white transition-all duration-200 rounded-t-lg bg-gradient-to-r from-fuchsia-600 to-blue-600"
                onClick={handleToggle}
            >
                <h4 className="text-lg font-bold text-left lg:text-2xl">{header}</h4>

                <div className="flex items-center justify-center w-10 h-10 text-4xl font-bold">
                    {active ? "-" : "+"}
                </div>
            </button>

            {/* conteúdo expansivo */}
            <div className={`overflow-hidden transition-all duration-200 ${active ? "bg-white p-4 rounded-b-lg" : "hidden"}`}>
                <p className="text-base leading-relaxed text-black text-body-color">{text}</p>
            </div>
        </div>
    );
};

const QuestionsSection: FC = () => {
    return (
        <div id="perguntas" className="mx-auto flex items-center justify-center mt-[50px] lg:w-[80rem]">
            <div className="relative flex flex-col items-center justify-center w-full h-full p-6 bg-fundo rounded-2xl pb-9 font-poppins">
                {/* título */}
                <div className="absolute -top-[-17px] lg:-top-[0.01px] left-1/2 transform -translate-x-1/2 px-3 bg-fundo z-10 flex items-center">
                    <span className="text-lg font-bold text-transparent lg:text-4xl bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                        Dúvidas
                    </span>
                </div>

                {/* linhas decorativas */}
                <div className="absolute left-1/2 transform -translate-x-[50%] top-[30px] flex justify-between w-full lg:px-[30px]">
                    <div className="border-t-4 border-purple-600 w-[36%]"></div>
                    <div className="border-t-4 border-blue-500 w-[36%]"></div>
                </div>

                {/* cards expansivos */}
                <div className="w-full mt-12 lg:space-y-9">
                    <AccordionItem header="O que é a Union?" text={
                        <>
                            O Union é um ambiente prático e imersivo que busca simular o mais próximo do que você vai encontrar nas empresas, desafiando seus membros a resolver problemas reais, com cronogramas e prazos de entrega.
                            <br /><br />
                            No Union, você desenvolve as skills mais procuradas pelo mercado, trabalha com ferramentas e metodologias utilizada pelas empresas, além de ganhar experiência trabalhando com outras pessoas de diferentes partes do Brasil.
                            <br /><br />
                            Você vivência na prática como é o dia a dia de um desenvolver em uma empresa e fica mais preparado para conquistar uma vaga.
                        </>
                    } />
                    <AccordionItem header="Quanto custa para fazer parte do Union?" text={
                        <>
                            Nada! O Union é 100% gratuito. 
                        </>
                    } />
                    <AccordionItem header="Quem pode participar?" text={
                        <>
                            Pessoas que ainda não trabalham na área e que não participem de bootcamps ou plataformas de capacitação.
                        </>
                    } />
                    <AccordionItem header="Preciso ter experiência na área?" text={
                        <>
                            Sim. Você precisa ter no mínimo 1 ano de estudo em programação, além disso é necessário que já tenha criado algum projeto sozinho, sem que seja projetos guiados, como de cursos e eventos.
                        </>
                    } />
                    <AccordionItem header="Qual a idade mínima para fazer parte do Union?" text={
                        <>
                            Você precisa ter no mínimo 18 anos.
                        </>
                    } />
                    <AccordionItem header="Como me inscrevo?" text={
                        <>
                            Se você se encaixa nos requisitos obrigatórios basta preencher o nosso formulário e fazer sua pré-inscrição.
                        </>
                    } />
                    <AccordionItem header="Existe algum processo seletivo? Como funciona?" text={
                        <>
                            Nosso processo seletivo consiste em algumas etapas, que são: pré-inscrição pelo formulário da página, análise de suas informações no formulário, desafio técnico e uma entrevista com nosso time.
                            <br /><br />
                            Nosso objetivo é entender seu momento profissional e avaliar se você tem o perfil que buscamos para o Union.
                        </>
                    } />
                    <AccordionItem header="O que vou aprender?" text={
                        <>
                            Você aprenderá como trabalhar com metodologias e ferramentas utilizadas pelas empresas, desenvolver hard e soft skills, tudo de forma prática e mão na massa!
                        </>
                    } />
                    <AccordionItem header="Quanto tempo por dia preciso me dedicar aos projetos?" text={
                        <>
                            Você precisa ter disponibilidade de trabalhar no mínimo 1 hora por dia no projeto, é importante também ter disponibilidade para participar das reuniões do time, que acontecem diariamente e aos finais de semana.
                        </>
                    } />
                </div>
            </div>
        </div>
    );
};

export default QuestionsSection;
