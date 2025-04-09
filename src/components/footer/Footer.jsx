import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black mt-6 lg:mt-48'>
            <div className='container mx-auto px-2 py-12 lg:py-0 relative'>
                <div className="hidden md:block absolute -top-32 container mx-auto bg-gradient-to-r from-[#e0f7ff] via-white to-[#fff3cc] p-20 rounded-3xl shadow-xl relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
                        Subscribe to our <span className="text-black">Newsletter</span>
                    </h2>
                    <p className="text-center text-gray-600 mb-6">
                        Get the latest updates and news right in your inbox!
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-5 py-3 rounded-xl border border-gray-300 shadow-sm w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-yellow-200"
                        />
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-pink-300 to-yellow-300 text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition-all duration-300"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
                <img className='mx-auto' src={'images/logo-white.svg'} alt="" />
                <div className='mt-4 pb-4'>
                    <footer className="footer sm:footer-horizontal text-white p-10">
                        <nav className='text-base'>
                            <h6 className="footer-title">Services</h6>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Hire Players</a>
                            <a className="link link-hover">Manage Team</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav>
                        <nav className='text-base'>
                            <h6 className="footer-title">Quick Links</h6>
                            <a className="link link-hover">Home</a>
                            <a className="link link-hover">Services</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Contact</a>
                        </nav>

                        <div className='text-base'>
                            <h6 className="footer-title">Newsletter</h6>
                            <fieldset className="md:w-80">
                                <label>Enter your email address</label>
                                <div className="join mt-4">
                                    <input
                                        type="text"
                                        placeholder="Enter Your Email Here"
                                        className="input rounded-xl rounded-r-none input-bordered join-item text-black" />
                                    <button
                                        type="submit"
                                        className="btn join-item bg-gradient-to-r from-pink-300 to-yellow-300 text-black font-semibold px-6 py-3 rounded-l-none rounded-xl shadow-md hover:opacity-90 transition-all duration-300"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </fieldset>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Footer;