import React from 'react';
import bg from "../assets/newBg.jpeg";
import SW from "../assets/NSW.png";
import TW from "../assets/TW.png";
import MobileHero from "./MobileHero";
import LScreenHero from "./LScreenHero";

const Hero = () => {
    return (
        <div>
               <MobileHero/>
               <LScreenHero/>
        </div>
    );
};

export default Hero;
//
// export const MobileHero = () => {
//     return (
//         <div
//             className="bg-cover bg-center relative block lg:hidden"
//             style={{ backgroundImage: `url(${bg})`, height: '96' }}
//         >
//             <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
//                 <h2 className="text-4xl font-extrabold text-blue-900 text-center mb-4">WILLFEAD WATER</h2>
//                 <p className="text-lg font-extrabold text-blue-900 text-center">
//                     Water is life's matter and matrix, mother and medium <br/>
//                     There is no life without water
//                 </p>
//             </div>
//         </div>
//     );
// };
