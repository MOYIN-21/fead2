import React from 'react'
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
      <footer className="bg-blue-300 ">
          <div className="max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                  <a href="https://flowbite.com/"
                     className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="willfead Logo"/>
                      <span
                          className="self-center text-2xl font-semibold whitespace-nowrap dark:text-blue-900">WILLFEAD</span>
                  </a>
                  <ul className="flex flex-wrap gap-5 items-center mb-6 text-sm font-medium text-blue-900 sm:mb-0 ">
                      <li>
                          <Link to="/aboutUs" className="hover:underline me-4 md:me-6">About</Link>
                      </li>
                      <li>
                          < Link to="#" className="hover:underline me-4 md:me-6">Terms and Conditions</Link>
                      </li>
                      <li>
                          <Link to="/faqs" className="hover:underline me-4 md:me-6">Faqs</Link>
                      </li>
                      <li>
                          <Link to="/contact" className="hover:underline">Contact</Link>
                      </li>
                  </ul>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
              <span className="block text-sm text-blue-900 sm:text-center ">© 2023 <a
                  href="#" className="hover:underline">Willfead™</a>. All Rights Reserved.</span>
          </div>
      </footer>
      // <footer className="sticky bg-blue-300 z-50 px-4 h">
      //     <div className="w-full max-w-screen-xl mx-auto md:py-20">
      //         <div className="sm:flex sm:items-center sm:justify-between">
      //             <Link to="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
      //                 <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
      //                 <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-900">Willfead</span>
      //             </Link>
      //             <ul className="flex flex-wrap gap-5 items-center mb-6 text-sm font-medium text-blue-900 sm:mb-0">
      //                 <li>
      //                     <Link to="/aboutUs" className="hover:underline me-4 md:me-6">About</Link>
      //                 </li>
      //                 <li>
      //                     < Link to="#" className="hover:underline me-4 md:me-6">Terms and Conditions</Link>
      //                 </li>
      //                 <li>
      //                     <Link to="/faqs" className="hover:underline me-4 md:me-6">Faqs</Link>
      //                 </li>
      //                 <li>
      //                     <Link to="/contact" className="hover:underline">Contact</Link>
      //                 </li>
      //             </ul>
      //         </div>
      //         <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
      //         <span className="block text-sm text-blue-900 sm:text-center">© 2024 <Link href="#"
      //                                                                                   className="text-white hover:underline">Willfead</Link>. All Rights Reserved.</span>
      //     </div>
      // </footer>

  )
}