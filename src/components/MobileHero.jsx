import React from 'react';
import bg from "../assets/newBg.jpeg";
import TW from "../assets/TW.png";
import SW from "../assets/new-removebg-preview.png";

const MobileHero = () => {
    return (
        <div className="bg-cover bg-center relative min-h-screen block lg:hidden" style={{ backgroundImage: `url(${bg})` }}>
            <div className="absolute inset-0 z-10 flex flex-col justfy-center center items-center">
                <div className="mb-44 text-center">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-900">WILLFEAD WATER</h2>
                    <p className="text-lg md:text-xl tracking-tight font-extrabold text-blue-900 px-3">
                        Water is life's matter and matrix, mother and medium <br />
                        There is no life without water
                    </p>
                </div>
                <div className="flex flex-row gap-0">
                    <div className="ml-8">
                        {/*<img src={SW} className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 mt-44" alt="Table water" />*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileHero;
