import React from 'react';
import bg from "../assets/newBg.jpeg";
import TW from "../assets/TW.png";
import SW from "../assets/NSW.png";
const LScreenHero = () => {
    return (
        <div className="bg-cover bg-center relative w-full min-h-screen hidden sm:block" style={{backgroundImage: `url(${bg})`}}>
            <div className="absolute inset-0 z-10 flex flex-col md:flex-row items-center justify-around">
                <div className="flex flex-row gap-0">
                    <div className="ml-8">
                        <img src={TW} className="h-5/6 w-11/12 mt-44 hidden sm:block" alt="Table water"/>
                    </div>
                    <div className="ml-0">
                        <img src={SW} className="h-[800px] w-auto mt-96 hidden sm:block" alt="Sachet water"/>
                    </div>
                </div>
                <div className="mb-44 text-center">
                    <h2 className="mb-4 text-4xl md:text-7xl tracking-tight font-extrabold text-blue-900">WILLFEAD
                        WATER</h2>
                    <p className="text-lg md:text-xl tracking-tight font-extrabold text-blue-900">
                        Water is life's matter and matrix, mother and medium <br/>
                        There is no life without water
                    </p>
                </div>
            </div>
        </div>
    );
}
export default LScreenHero