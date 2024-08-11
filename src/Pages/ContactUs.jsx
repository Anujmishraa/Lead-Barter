import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_xkt3ay8', 'template_5u66tgg', form.current, {
                publicKey: 'V-N-xtfo8VmKD0nDw',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <>
            <section className="text-gray-600 body-font relative bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                        <p className="lg:w-1/3  mx-auto leading-relaxed text-base">We’d love to hear from you! Whether you have a question, feedback, or need support, reaching out to us is easy.</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <form ref={form} onSubmit={sendEmail} className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="user_name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="user_name" name="user_name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="user_email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="user_email" name="user_email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className='h-8'>
                                    <button type='submit' className="button2 flex mx-auto text-white bg-[#213e94] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
