import React, { FC } from 'react';
import Cards from "./Cards";

const PilarsSection: FC = () => {
    return (
        <div id='pilares' className="flex items-center justify-center mx-auto mt-10">
            <div className="relative rounded-2xl bg-gradient-to-r from-purple-600 via-blue-500 to-pink-600 p-1 ml-5 mr-5 lg:ml-[10rem] lg:mr-[10rem] lg:mt-[100px]">
                <div className="relative flex items-center justify-center w-full h-full p-6 bg-fundo rounded-2xl pb-9 font-poppins">
                    <div className="absolute z-10 px-3 transform -translate-x-1/2 -top-5 left-1/2 bg-fundo">
                        <span className="text-lg font-bold text-transparent lg:text-4xl bg-clip-text bg-gradient-to-r from-purple-900 to-blue-500">
                            Pilares
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <p className="p-5 mb-10 font-light text-center lg:text-2xl">
                            Os pilares que sustentam o formato inovador de aprendizagem do Union é a junção de incríveis metodologias!
                        </p>
                        <div className="grid w-full max-w-screen-lg grid-cols-1 gap-6 px-5 mt-10 sm:grid-cols-2 lg:grid-cols-3">
                            <Cards titulo={"Ativa"} texto={"Metodologia ativa é uma abordagem educacional que coloca o aluno como protagonista, onde ele é o responsável por ir atrás dos conhecimentos necessários, ficando o professor como um mentor, que vai mostrar o caminho para que ele possa ter sucesso no aprendizado."}/>
                            <Cards titulo={"Andragogia"} texto={"É uma metodologia de ensino para adultos, que tem mais liberdade e colaboração, permitindo que o aluno decida quando, como e o que estudar, tornando o processo de aprendizagem mais sólido e eficaz, a andragogia valoriza a autonomia e a experiência dos adultos como base para a aprendizagem."}/>
                            <Cards titulo={"Ágil"} texto={"A metodologia ágil é uma metodologia que estimula a colaboração entre o time, permitindo que tenha uma visão mais transparente, liberdade para fazer escolhas e tomar decisões, buscando a melhora continua entre os membros, os processos e a qualidade geral do trabalho."} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PilarsSection;