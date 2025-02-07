import React, { FC } from 'react';

const Footer: FC = () => {
    return (
        <div>
            <div className="bg-[#121119] text-white font-poppins mt-10">
                <div className="flex flex-col p-9 lg:flex-row lg:justify-between lg:items-start">
                    
                    {/* logo com a descrição */}
                    <div className="flex flex-col justify-center text-center lg:mt-8 lg:items-start lg:ml-8 lg:text-left">
                        <img 
                            src="https://media.graphassets.com/2rObY82rREidExKivdTB" 
                            alt="Logo Union Developers" 
                            className="w-[15rem] lg:w-[22rem] mx-auto lg:mx-0"
                        />
                        <p className="lg:w-[25rem] lg:text-xl pt-2">
                            O Union proporciona experiência para desenvolvedores juniors, transformando-os em profissionais preparados para o mercado.
                        </p>
                    </div>

                    {/* links da página */}
                    <div className="flex flex-row justify-center gap-10 pt-5 lg:mr-[10rem] text-left lg:mt-14 mt-3">
                        <div>
                            <h1 className="text-xl font-bold lg:text-2xl">Saiba mais</h1>
                            <p className="mt-2 cursor-pointer hover:text-gray-400">Sobre</p>
                            <p className="cursor-pointer hover:text-gray-400">Depoimentos</p>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold lg:text-2xl">Dúvidas</h1>
                            <p className="mt-2 cursor-pointer hover:text-gray-400">FAQ</p>
                            <p className="cursor-pointer hover:text-gray-400">Como funciona</p>
                        </div>
                    </div>

                    {/* logos de redes */}
                    <div className="flex justify-center gap-5 lg:mr-10 lg:flex-col lg:items-start pt-9">
                        <a href="#" className="flex flex-col items-center gap-2 cursor-pointer hover:text-gray-400">
                            <img src="https://media.graphassets.com/4AjPcOSSuK4kIKUv8Mdg" alt="" />
                            <p>Email</p>
                        </a>
                        <a href="#" className="flex flex-col items-center gap-2 cursor-pointer hover:text-gray-400">
                            <img src="https://media.graphassets.com/y4KMQdygSH6uZx46pxjU" alt="" />
                            <p>Linkedin</p>
                        </a>
                        <a href="#" className="flex flex-col items-center gap-2 cursor-pointer hover:text-gray-400">
                            <img src="https://media.graphassets.com/4lDgbi8FQpq8QYSiranx" alt="" />
                            <p>Github</p>
                        </a>
                    </div>
                </div>
            </div>

            {/* direitos autorais fora da div */}
            <p className="p-4 text-center text-gray-400">© Union Developers - 2025</p>
        </div>
    );
};

export default Footer;
