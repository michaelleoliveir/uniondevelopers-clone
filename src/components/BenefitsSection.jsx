import Item from "./Item.jsx"

const BenefitsSection = () => {
    return (
        <div className="mx-auto flex items-center justify-center mt-[90px] w-auto">
            {/* fundo com cor de bg-fundo */}
            <div className="relative flex items-center justify-center w-full h-full p-6 bg-fundo rounded-2xl pb-9 font-poppins">

                {/* div com background para o texto */}
                <div className="absolute -top-[-17px] lg:-top-[0.01px] left-1/2 transform -translate-x-1/2 px-3 bg-fundo z-10 flex items-center">
                    <span className="text-lg font-bold text-transparent lg:text-4xl bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                        Benefícios
                    </span>
                </div>

                {/* Pseudo-elementos para as linhas */}
                <div className="absolute left-1/2 transform -translate-x-[50%] top-[30px] flex justify-between w-full lg:px-[30px]">
                    <div className="border-t-4 border-purple-600 w-[36%]"></div>
                    <div className="border-t-4 border-blue-500 w-[36%]"></div>
                </div>

                {/* conteúdo da div */}
                <div className="flex flex-col">
                    {/* texto */}
                    <p className="text-center p-10 lg:text-2xl font-light max-w-[40rem] mx-auto">
                    Conheça os benefícios incríveis que o Union proporciona para seus membros!
                    </p>
                    <Item img="https://media.graphassets.com/qssZQEUSEaAQoM6oznCw" titulo="Preparação para o mercado" texto="Os membros são equipados com uma compreensão profunda das práticas de mercado, permitindo-lhes ingressar no setor com confiança e conhecimento." />
                    <Item img="https://media.graphassets.com/tsqge8g9TpyED5o5iVr6" titulo="Aprendizado de novas tecnologias e ferramentas" texto="Os membros são expostos a uma variedade de tecnologias e ferramentas relevantes, expandindo suas habilidades e conhecimentos." reverse />
                    <Item img="https://media.graphassets.com/XH5lk8IJQ1Cz1M2AE1Lu" titulo="Desenvolvimento de hard skills" texto="Através de projetos reais, os membros fortalecem suas habilidades técnicas, aumentando sua capacidade de contribuir de forma eficaz em ambientes profissionais." />
                    <Item img="https://media.graphassets.com/eBMuKBvTLulsEbZySGwt" titulo="Desenvolvimento de soft skills" texto="Além das competências técnicas, os membros aprimoram habilidades interpessoais cruciais, como comunicação eficaz, resolução de conflitos e trabalho em equipe." reverse/>
                    <Item img="https://media.graphassets.com/2S5Pdk5oShOJUlIz8p7X" titulo="Ambiente imersivo" texto="O Union oferece uma oportunidade única de aplicar conhecimentos teóricos em cenários do mundo real, proporcionando uma experiência diferenciada e valiosa." />
                    <Item img="https://media.graphassets.com/WR1yF2qGRmm8jWLCyw0D" titulo="Networking " texto="A participação no Union expande sua rede de contatos, abrindo portas para colaborações futuras e oportunidades profissionais." reverse/>
                    <Item img="https://media.graphassets.com/KHCFnl40RyKQqOx6Bjuz" titulo="Domínio de metodologias ágeis" texto="Através da vivência prática, os membros aprendem a aplicar metodologias ágeis como Scrum, preparando-os para ambientes de trabalho colaborativos." />
                    <Item img="https://media.graphassets.com/sanArFzbQUipTnjRVl78" titulo="Mentoria" texto="Os mentores experientes oferecem orientação valiosa, proporcionando uma trajetória de aprendizado mais suave e eficiente." reverse />
                </div>
            </div>
        </div>
    );
}

export default BenefitsSection;
