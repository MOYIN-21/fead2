import React from 'react';

 const AboutUs = () => {
  return (
      <div className="py-8 aboutUs">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-900">
              About Us</h2>
          {/*<p className={`text-5xl flex justify-center text-text-900`}>ABOUT US</p>*/}
          <div className="grid border border-blue-400 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 bg-white ">
              <figure
                  className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-blue-400 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e ">
                  {/*<blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 ">*/}
                  <h3 className="text-lg font-semibold text-blue-900">Our Mission</h3>
                  <p className="my-4">To sustainably deliver pure, high-quality water solutions that enhance the
                      well-being of our communities, while pioneering innovative practices in environmental stewardship
                      and resource management.</p>
                  {/*</blockquote>*/}
              </figure>
              <figure
                  className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-blue-400 md:rounded-se-lg ">
                  <blockquote className="max-w-2xl mx-auto mb-4  lg:mb-8 ">
                      <h3 className="text-lg font-semibold text-blue-900">Our Vision</h3>
                      <p className="my-4">To be a global leader in providing sustainable water solutions, ensuring
                          access to clean and safe water for all, and fostering a culture of environmental
                          responsibility.</p>
                  </blockquote>
              </figure>
              <figure
                  className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-blue-400 md:rounded-es-lg md:border-b-0 md:border-e">
                  <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 ">
                      <h3 className="text-lg font-semibold text-blue-900 ">Our Story </h3>
                      <p className="my-4">WILLFEAD Water is processed and packaged under the highest quality of hygenic
                          standard by: EMTUND NIGERIA ENTERPRISES .</p>
                  </blockquote>
              </figure>
              <figure
                  className="flex flex-col items-center justify-center p-8 text-center bg-white border-blue-900 rounded-b-lg md:rounded-se-lg">
                  <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 ">
                      <h3 className="text-lg font-semibold text-blue-900">Our Commitment</h3>
                      <p className="my-4">We believe that access to clean water is a fundamental human right. As such,
                          we are committed to not only providing superior water products but also to engaging
                          in practices that protect our planet. Our sustainability initiatives, community engagement
                          programs, and rigorous quality assurance processes reflect our dedication to making a positive
                          impact.</p>
                      <p>Thank you for choosing WILLFEAD, We look forward to serving you and contributing to a
                          healthier, more sustainable world.</p>
                  </blockquote>
              </figure>
          </div>
      </div>
  );
 };
export default AboutUs;