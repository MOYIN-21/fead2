import React from 'react';
import bg from "../assets/newBg.jpeg";
import TW from "../assets/TW.png";
import SW from "../assets/NSW.png";
const LScreenHero = () => {
    return (
        <div className="relative h-screen bg-cover bg-center hidden sm:block"
             style={{backgroundImage: `url(${bg})`}}>
            <div className="absolute inset-0 opacity-50"></div>
            <div className="relative z-10 flex items-center justify-around h-full">
                <div>
                    <h2 className="mb-4 text-8xl tracking-tight font-sans text-center text-blue-900">WILLFEAD
                         WATER</h2>
                     <p className="tracking-tight font-sans text-center text-blue-900">Water is life's matter and
                     matrix, mother and medium. <br/>
                     There is no life without water
                     </p>
                    {/*<h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold">Your Text Here</h1>*/}
                </div>

            </div>
        </div>
        // <div className="h-full LScreenHero">
        //     <div className="bg-cover relative hidden bg-no-repeat z-800 sm:block" style={{backgroundImage: `url(${bg})`}}>
        //         <div className="grid grid-cols-2">
        //             <div className="flex flex-row justify-center items-center ">
        //                 {/*<div className="mt-20"> /!* Adjusted margin *!/*/}
        //                     <img src={TW} className="" alt="Table water"/>
        //                     <img src={SW} className="w-72" alt="Sachet water"/>
        //                 {/*</div>*/}
        //                 {/*<div className=""> /!* Adjusted margin *!/*/}
        //                 {/*</div>*/}
        //             </div>
        //             <div>
        //                 <h2 className="mb-4 text-8xl tracking-tight font-sans text-center text-blue-900">WILLFEAD
        //                     WATER</h2>
        //                 <p className="tracking-tight font-sans text-center text-blue-900">Water is life's matter and
        //                     matrix, mother and medium. <br/>
        //                     There is no life without water
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // <>
        //     <div className="">
        //         <img src={bg} alt="LScreenHero" className={'bg-cover bg-no-repeat w-full'}/>
        //         <div className="flex text-center">
        //             <div className="gap-22">
        //                 <img src={TW} alt="table water" className="absolute top-20 " />
        //             </div>
        //             <div>
        //                 <img src={SW} alt="sachet water" className="absolute"/>
        //             </div>
        //         </div>
        //     </div>
        // </>
        // <div className="bg-cover bg-center relative w-full max-h-screen hidden sm:block" style={{backgroundImage: `url(${bg})`}}>
        //     <div className="absolute inset-0 z-10 flex flex-col md:flex-row items-center justify-around">
        //         <div className="flex flex-row gap-0">
        //             <div className="ml-8">
        //                 <img src={TW} className="h-5/6 w-11/12 mt-44 hidden sm:block" alt="Table water"/>
        //             </div>
        //             <div className="ml-0">
        //                 <img src={SW} className="h-[800px] w-auto mt-96 hidden sm:block" alt="Sachet water"/>
        //             </div>
        //         </div>
        //         <div className="mb-44 text-center">
        //             <h2 className="mb-4 text-4xl md:text-7xl tracking-tight font-extrabold text-blue-900">WILLFEAD
        //                 WATER</h2>
        //             <p className="text-lg md:text-xl tracking-tight font-extrabold text-blue-900">
        //                 Water is life's matter and matrix, mother and medium <br/>
        //                 There is no life without water
        //             </p>
        //         </div>
        //     </div>
        // </div>
    );
}
export default LScreenHero