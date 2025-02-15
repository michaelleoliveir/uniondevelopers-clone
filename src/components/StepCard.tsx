import React from "react";

interface StepCardProps {
    number: number;
    title: string;
    description: string;
    isLeft?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, isLeft = false }) => {
    return (
        <div
            className={`relative flex w-full my-10 items-center 
        ${isLeft ? "justify-start" : "justify-end"} 
        md:flex-row flex-col-reverse`}
        >
            <div className="relative flex items-center">
                <span
                    className={`absolute z-10 font-bold text-transparent -translate-y-1/2 
                    text-[7rem] lg:text-[11rem] bg-clip-text bg-gradient-to-b from-blue-500 to-purple-500 top-1/2
                    ${isLeft ? "left-9 lg:left-1" : "-left-6 lg:-left-18"}`}
                >
                    {number}
                </span>

                <div
                    className={`bg-black p-7 z-0 lg:p-16 lg:pl-[6rem] pl-12 rounded-lg w-[17rem] lg:w-96 relative flex flex-col items-center
            ${isLeft ? "ml-16 lg:ml-10 shadow-[0px_2px_20px_-4px_#b956e8]" : "mr-16 lg:mr-0 shadow-[0px_2px_33px_-4px_#486efa]"} 
            md:static`}
                >
                    <h3 className="text-xl font-bold text-center text-white">{title}</h3>
                    <p className="mt-2 text-xl text-center text-gray-300">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default StepCard;
