import React from 'react';
import bg from "../assets/newBg.jpeg";
import TW from "../assets/TW.png";
import SW from "../assets/new-removebg-preview.png";

const MobileHero = () => {
    return (
        <div className="relative h-screen bg-cover bg-center block "
             style={{backgroundImage: `url(${bg})`}}>
            <div className="absolute inset-0 opacity-50"></div>
            <div className="relative z-10 flex items-center justify-around h-full">
                <div>
                    <h2 className="mb-4 text-6xl tracking-tight font-sans text-center text-blue-900">WILLFEAD
                        WATER</h2>
                    <p className="tracking-tight font-sans text-center text-blue-900">Water is life's matter and
                        matrix, mother and medium. <br/>
                        There is no life without water
                    </p>
                    {/*<h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold">Your Text Here</h1>*/}
                </div>

            </div>
        </div>
    )
}

export default MobileHero;

// <div className="relative h-screen bg-cover bg-no-repeat bg-center"
//      style={{backgroundImage: `url(${bg})`}}>
//     <div className="absolute inset-0 opacity-50"></div>
//     <div className="relative z-10 flex items-center justify-around h-full">
//         <div className="flex">
//             <img src={TW} alt={`table water`}/>
//             <img src={SW} alt={`sachet water`} className="w-46"/>
//         </div>
//         <div>
//             <h2 className="mb-4 text-8xl tracking-tight font-sans text-center text-blue-900">WILLFEAD
//                 WATER</h2>
//             <p className="tracking-tight font-sans text-center text-blue-900">Water is life's matter and
//                 matrix, mother and medium. <br/>
//                 There is no life without water
//             </p>
//         </div>
//
//     </div>
// </div>