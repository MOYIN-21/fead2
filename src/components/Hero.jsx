import React from 'react';
import bg from "../assets/newBg.jpeg";
import SW from "../assets/SW.png";
import TW from "../assets/TW.png";

const Hero = () => {
    return (
        <div className="h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${bg})` }}>
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="flex flex-row space-x-4">
                    <div>
                        <img src={TW} alt="Table water" />
                    </div>
                    <div>
                        <img src={SW} alt="Sachet water" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;







// import React from 'react';
// import bg from "../assets/newBg.jpeg";
// import SW from "../assets/SW.png";
// import TW from "../assets/TW.png";
//
// const Hero = () => {
//     return (
//         <div className="h-screen hero">
//             <img
//                 src={bg}
//             />
//
//         </div>
//         // <div className="relative flex flex-row">
//         //     <div className="absolute inset-0 z-10 flex mt-100 items-center">
//         //         <div>
//         //             <img
//         //                 src={TW}
//         //                 alt="Table water"
//         //             />
//         //         </div>
//         //         <div>
//         //             <img src={SW} alt="Sachet water"
//         //             />
//         //         </div>
//         //     </div>
//         //     <div className="relative flex-1">
//         //         <img
//         //             src={bg}
//         //             style={{ objectFit: 'cover', width: '100%', height: '50%' }}
//         //             alt="Background"
//         //         />
//         //     </div>
//         // </div>
//     );
// };
//
// export default Hero;
