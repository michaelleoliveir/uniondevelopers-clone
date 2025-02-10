import React, { FC } from 'react';

const IntroductionSection: FC = () => {
    return (
        <div id='sobre' className="flex items-center justify-center mx-auto">
            <div className="relative rounded-2xl bg-gradient-to-r from-purple-600 via-blue-500 to-pink-600 p-1 ml-5 mr-5 lg:ml-[10rem] lg:mr-[10rem] lg:mt-[100px]">
                <div className="relative flex items-center justify-center w-full h-full p-6 bg-fundo rounded-2xl pb-9 font-poppins">
                    <div className="absolute -top-5 left-[120px] lg:left-[200px] transform -translate-x-1/2 px-3 bg-fundo z-10">
                        <span className="text-lg font-bold text-transparent lg:text-4xl bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                            Quem somos?
                        </span>
                    </div>
                    <p className="p-5 font-light text-center lg:text-2xl">
                        O Union é uma oportunidade única para desenvolvedores juniors, nossa missão é proporcionar a você um ambiente prático e imersivo, semelhante ao que você encontrará no mercado. Aqui, você vai vivenciar como é o dia a dia de um desenvolvedor de software, trabalhando lado a lado com líderes experientes e outros talentosos desenvolvedores que estão no mesmo caminho que você. <br />
                        
                        <br />No Union, você não apenas ganhará experiência, mas também estará pronto para enfrentar as demandas do mercado de tecnologia. Nossa abordagem holística enfatiza não apenas o conhecimento técnico, mas também habilidades interpessoais e práticas ágeis.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default IntroductionSection;