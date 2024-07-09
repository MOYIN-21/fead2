import React from 'react';
import bg from "../assets/newBg.jpeg";
import SW from "../assets/SW.png";
import TW from "../assets/TW.png";

const Hero = () => {
    return (
        <div className="relative flex flex-row h-[600px]">
            <div className="absolute inset-0 z-10 flex items-center justify-evenly">
                <div>
                    <img
                        src={TW}
                        alt="Table water"
                    />
                </div>
                <div>
                    <img src={SW} alt="Sachet water"
                    />
                </div>
            </div>
            <div className="relative flex-1">
                <img
                    src={bg}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    alt="Background"
                />
            </div>
        </div>
    );
};

export default Hero;
