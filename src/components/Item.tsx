import React, { FC } from 'react';

interface ItemProps {
    img: string;
    titulo: string;
    texto: string;
    reverse?: boolean;
}

const Item: FC<ItemProps> = ({ img, titulo, texto, reverse = false }) => {
    return (
        <div className={`mt-5 flex flex-col sm:flex-row items-center text-center w-full gap-4 ${reverse ? "sm:flex-row-reverse sm:justify-end lg:ml-[15rem]" : "sm:justify-start lg:mr-[10rem]"}`}>
            {/* Imagem */}
            <img src={img} alt="" className="w-30 lg:w-[6.8rem]" />

            {/* Textos */}
            <div className={`flex flex-col items-center m-3 ${reverse ? "sm:items-end sm:text-right" : "sm:items-start sm:text-left"}`}>
                <h3 className="text-xl font-bold lg:text-2xl">{titulo}</h3>
                <p className="text-white text-lg font-light lg:w-[38rem] pt-2 p-4">{texto}</p>
            </div>
        </div>
    );
};

export default Item;