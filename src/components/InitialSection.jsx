const InitialSection = () => {
    return (
        <div className="relative flex items-top justify-left bg-fundo font-poppins lg:justify-center mb-20">

            {/* escrita */}
            <div className="pt-[60px] lg:pt-[130px]">
                <div className="flex flex-col lg:flex-row">
                    <div className="text-left ml-[1rem] lg:ml-[2rem] max-w-[40rem] lg:pt-[70px] lg:mr-[190px] mr-[100px]">
                        <h1 className="text-2xl font-bold mb-4 lg:leading-relaxed lg:text-5xl">
                            Ganhe <span className="bg-gradient-to-r from-purple-600 to-blue-500 inline-block text-transparent bg-clip-text">experiência</span> como desenvolvedor júnior
                        </h1>
                        <p className="text-base lg:text-xl xl:text-xl mb-6">
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