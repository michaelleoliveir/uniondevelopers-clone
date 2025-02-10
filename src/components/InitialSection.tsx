import React, { FC } from 'react';

const InitialSection: FC = () => {
    return (
        <div style={{ backgroundImage: "url('https://media.graphassets.com/iGXpg7LOQaCPkzm6iOgs')", backgroundSize:"cover" }} className="relative flex mb-20 items-top justify-left font-poppins lg:justify-center">

            {/* escrita */}
            <div className="pt-[60px] lg:pt-[230px]">
                <div className="flex flex-col lg:flex-row">
                    <div className="text-left ml-[1rem] lg:ml-[2rem] max-w-[40rem] lg:pt-[70px] lg:mr-[190px] mr-[100px]">
                        <h1 className="mb-4 text-white text-2xl font-bold lg:leading-relaxed lg:text-5xl">
                            Ganhe <span className="inline-block text-transparent bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text">experiência</span> como desenvolvedor júnior
                        </h1>
                        <p className="mb-6 text-base text-white lg:text-xl xl:text-xl">
                            Descubra como o Union oferece um ambiente prático e imersivo para desenvolvedores juniors ganharem
                            experiência de mercado, mesmo sem estar em uma empresa. Participe dessa experiência única e impulsione
                            sua carreira como desenvolvedor!
                        </p>
                        <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-[110px] lg:px-14 py-5 rounded-lg font-bold lg:text-2xl whitespace-nowrap align-center">
                            Quero participar
                        </button>
                    </div>
                    {/* imagem (tela grande) */}
                    <div className="hidden lg:block">
                        <img
                            src="https://media.graphassets.com/zRjyxnD5RyGdG8xVpll8"
                            alt="Imagem relacionada"
                            className="ml-[50px] w-[350px] lg:w-[450px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InitialSection