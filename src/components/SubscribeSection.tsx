import React, { FC } from 'react';

const SubscribeSection: FC = () => {
    return (
        <div className='flex flex-col items-center justify-center lg:flex-row font-poppins'>
            <img 
                src="https://media.graphassets.com/WayysMB8RQyrgcahBMQs" 
                alt="" 
                className="w-[17rem] lg:w-[29rem] mr-6" 
            />

            <div className='flex flex-col items-center justify-center text-center m-7'>
                <h1 className='text-3xl font-bold w-[20rem] lg:w-[35rem]'>
                    Vivência na prática, ambiente imersivo, desafios e muito mais!
                </h1>
                <p className='w-[16rem] pt-6 text-3xl font-bold text-red-500'>
                    Inscreva-se já! Vagas limitadas
                </p>

                <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white lg:px-[100px] px-[80px] lg:px-15 lg:py-5 py-3 rounded-lg font-bold lg:text-2xl mt-6">
                    Inscrever-se agora
                </button>
            </div>
        </div>
    );
}

export default SubscribeSection;
