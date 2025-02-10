import React, { FC } from 'react';
import StepCard from './StepCard';

const StepsSection: FC = () => {
    return (
        <div id='passos' className="mx-auto flex items-center justify-center mt-[50px] w-auto">
            <div className="relative flex items-center justify-center w-full h-full p-6 bg-fundo rounded-2xl pb-9 font-poppins">
                {/* título */}
                <div className="absolute -top-[-17px] lg:-top-[0.01px] left-1/2 transform -translate-x-1/2 px-3 bg-fundo z-10 flex items-center">
                    <span className="text-lg font-bold text-transparent lg:text-4xl bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                        Etapas
                    </span>
                </div>

                {/* linhas */}
                <div className="absolute left-1/2 transform -translate-x-[50%] top-[30px] flex justify-between w-full lg:px-[30px]">
                    <div className="border-t-4 border-purple-600 w-[36%]"></div>
                    <div className="border-t-4 border-blue-500 w-[36%]"></div>
                </div>

                {/* conteúdo */}
                <div className="flex flex-col">
                    <p className="text-center p-12 lg:text-2xl max-w-[50rem] mx-auto">
                        Conheça as etapas do nosso processo seletivo
                    </p>

                    <StepCard number={1} title="Pré-inscrição" description="Inicie a sua inscrição preenchendo o nosso formulário" isLeft />
                    <StepCard number={2} title="Análise do formulário" description="O nosso time irá analisar suas informações" />
                    <StepCard number={3} title="Entrevista" description="Se aprovado, você passará por uma entrevista técnica" isLeft />
                    <StepCard number={4} title="Aprovação" description="Após a entrevista, você será aprovado para o programa" />
                </div>
            </div>
        </div>
    )
}

export default StepsSection