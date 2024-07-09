"use client"
import React, { useState, useEffect } from 'react';
import oneworker from '../assets/oneWorkerImg.jpeg';
import twoWorker from '../assets/twoWorkerImg.jpeg';
import allWorker from '../assets/AllWorkersImg.jpeg';
// import machine4 from '../assets/machine4.jpeg';

const Media = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        oneworker,
        twoWorker,
        allWorker,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 

        return () => clearInterval(interval); 
    }, [images.length]);

    return (
        <div id="gallery" className="relative" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`duration-700 ease-in-out absolute inset-0 transition-opacity ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                        data-carousel-item={index === activeIndex ? "active" : ""}
                    >
                        <div className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <img 
                            src={image} 
                            alt={`Machine ${index + 1}`} 
                            // layout="fill" 
                            objectFit="contain"
                            height={500}
                            width={500}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Media;