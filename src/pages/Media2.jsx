import React from 'react';
import machine1 from '../assets/machine1.jpeg'
import machine2 from '../assets/machine2.jpeg'
import machine3 from '../assets/machine3.jpeg'
import machine4 from '../assets/machine4.jpeg'
import machine5 from '../assets/machine5.jpeg'
import machine6 from '../assets/machine6.jpeg'

 const Media2 = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
                <img
                    className="h-auto max-w-full rounded-lg"
                    src={machine3}
                    alt="Gallery Image 5"
                    style={{ height: '500px', width:"700px" }}
                />
            </div>
            <div>
                <img
                    className="h-auto max-w-full rounded-lg"
                    src={machine4}
                    width={500} 
                    height={500}
                    alt="Gallery Image 5"
                    style={{ height: '500px', width:"700px" }}
                />
            </div>
            <div>
                <img
                    className="h-auto max-w-full rounded-lg"
                    src={machine5}
                    alt="Gallery Image 5"
                    style={{ height: '500px', width:"800px" }}
                />
            </div>
            <div>
                <img
                    className="h-auto max-w-full rounded-lg"
                    src={machine2}
                    alt="Gallery Image 5"
                    style={{ height: '500px', width:"800px" }}
                />
            </div>
            <div>
                <img
                    className="h-auto max-w-full rounded-lg"
                    src={machine6}
                    alt="Gallery Image 5"
                    style={{ height: '500px', width:"800px" }}
                />
            </div>
            <div>
                <img
                    className="h-auto max-w-full rounded-lg"
                    src={machine1}
                    alt="Gallery Image 5"
                    style={{ height: '500px', width:"800px" }}
                />
            </div>
        </div>
    );
};
export default Media2;