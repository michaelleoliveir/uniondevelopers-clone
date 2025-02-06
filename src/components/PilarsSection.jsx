import Cards from "./Cards.jsx"

const PilarsSection = () => {
    return (
        <div className="mx-auto flex items-center justify-center mt-10">
            {/* borda gradiente */}
            <div className="relative rounded-2xl bg-gradient-to-r from-purple-600 via-blue-500 to-pink-600 p-1 ml-5 mr-5 lg:ml-[10rem] lg:mr-[10rem] lg:mt-[100px]">
                {/* fundo com cor de bg-fundo */}
                <div className="flex h-full w-full items-center justify-center bg-fundo rounded-2xl p-6 pb-9 font-poppins relative">

                    {/* div com background para o texto */}
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 px-3 bg-fundo z-10">
                        <span className="text-lg font-bold lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                            Pilares
                        </span>
                    </div>

                    {/* conteúdo da div */}
                    <div className="flex flex-col">

                        {/* texto */}
                        <p className="text-center p-5 lg:text-2xl font-light">
                            Os pilares que sustentam o formato inovador de aprendizagem do Union é a junção de incríveis metodologias!
                        </p>
                        
                        {/* cards */}
                        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-screen-lg px-5">
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

export default PilarsSection