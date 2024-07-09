"use client"
import React, { useState, useEffect } from 'react';
import oneworker from '../assets/oneWorkerImg.jpeg';
import twoWorker from '../assets/twoWorkerImg.jpeg';
import allWorker from '../assets/AllWorkersImg.jpeg';

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
        <div id="gallery" className="relative mt-10" data-carousel="slide">
            <div className="relative h-96 overflow-hidden rounded-lg md:h-96">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`duration-700 ease-in-out absolute inset-0 transition-opacity ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                        data-carousel-item={index === activeIndex ? "active" : ""}
                    >
                        <div className="absolute inset-0 flex items-center h-96 justify-center">
                            <img
                                src={image}
                                alt={`Machine ${index + 1}`}
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Media;
