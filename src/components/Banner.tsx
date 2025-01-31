import React from 'react';

const Banner = () => {
    return (
        <div className='p-10'>

            <div className="flex flex-col lg:flex-row items-center justify-between bg-blue-500 text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <div className="bg-white p-4 rounded-full">
                        <svg width="50" height="50" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="72" height="72" rx="12" fill="white" />
                            <path d="M57 26.6667C59.5774 26.6667 61.6666 28.756 61.6666 31.3334V40.6667C61.6666 43.2441 59.5774 45.3334 57 45.3334H54.5222C53.374 54.5414 45.519 61.6667 36 61.6667V57C43.7319 57 50 50.732 50 43V29C50 21.2681 43.7319 15 36 15C28.268 15 22 21.2681 22 29V45.3334H15C12.4226 45.3334 10.3333 43.2441 10.3333 40.6667V31.3334C10.3333 28.756 12.4226 26.6667 15 26.6667H17.4777C18.626 17.4587 26.4809 10.3334 36 10.3334C45.519 10.3334 53.374 17.4587 54.5222 26.6667H57ZM26.1053 44.8315L28.579 40.8737C30.7304 42.2212 33.2742 43 36 43C38.7258 43 41.2696 42.2212 43.4209 40.8737L45.8947 44.8315C43.0261 46.6281 39.6344 47.6667 36 47.6667C32.3656 47.6667 28.9739 46.6281 26.1053 44.8315Z" fill="#1A73E8" />
                        </svg>

                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Want to delve deeper into the program?</h2>
                        <p className="text-sm">Share your details to receive expert insights from our program team!</p>
                    </div>
                </div>
                <button className="bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100">
                    Get in touch &rarr;
                </button>
            </div>
        </div>
    );
};

export default Banner;
