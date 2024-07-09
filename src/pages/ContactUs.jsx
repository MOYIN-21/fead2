"use client"
import React, { useState } from 'react';
// import Email from "../assets/Email.png"
import location from "../assets/location.png"
import workinghour from "../assets/workinghour.png"
import emergency from "../assets/emergency.png"

const ContactUs = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log({ email, subject, message });
    };

    return (
        <section className="bg-white">
            <div className="py-8  px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-900">Contact
                    Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl ">
                    Convenient delivery right to your doorstep? send feedback about our product? quench your thirst with the
                    best!? Let us know.
                </p>
                <div className="flex flex-wrap justify-around mb-6">
                    <div className="flex flex-wrap flex-col items-center w-full sm:w-1/3 mb-6">
                        <div>
                            <img
                                src={emergency}
                                alt="home image"
                                width={50}
                                height={50}
                                placeholder="blur"
                                id="homepageImage1"
                            />
                        </div>
                        <div className="flex flex-wrap flex-col items-center">
                            <p className="text-2xl text-blue-900">Contact Us</p>
                            <p>0806-161-4846</p>
                            <p>emtundngent@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-col items-center w-full sm:w-1/3 mb-6">
                        <div>
                            <img
                                src={location}
                                alt="home image"
                                width={50}
                                height={50}
                                placeholder="blur"
                                id="homepageImage1"
                            />
                        </div>
                        <div className="flex flex-wrap flex-col items-center">
                            <p className="text-2xl text-blue-900">Location</p>
                            <p>Salami Bus Stop, <br/> Arepo Ogbayo Road, <br/> </p>
                            <p className="text-center">Ijoko-Ifo LGA, Ogun State</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-col items-center w-full sm:w-1/3 mb-6">
                        <div>
                            <img
                                src={workinghour}
                                alt="home image"
                                width={50}
                                height={50}
                                placeholder="blur"
                                id="homepageImage1"
                            />
                        </div>
                        <div className="flex flex-wrap flex-col items-center">
                            <p className="text-2xl text-blue-900">Working Hours</p>
                            <p>Mon-Sat 09:00-500</p>
                            <p>Sundays and Thursdays, <br/> </p>
                            <p className="text-center">Emergency only</p>
                        </div>
                    </div>
                </div>


                <form action="mailto:olawamidemoyinoluwamary@gmail.com" method="post" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Your
                            email</label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm border border-blue-400 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-blue-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="name@email.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="subject"
                               className="block mb-2 text-sm font-medium ">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            className="block p-3 w-full text-sm text-gray-900 rounded-lg border border-blue-400 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Let us know how we can help you"
                            required
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium ">Your
                            message</label>
                        <textarea
                            id="message"
                            // rows="6"
                            className="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-blue-400 focus:ring-primary-500 focus:border-primary-500 dark:border-blue-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Leave a comment..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-400 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;