import React from "react";
// Assuming you have react-icons installed for visual appeal
// import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaCode } from 'react-icons/fa';
// import { MdMovie } from 'react-icons/md';

/**
 * SCDB.jsx - Refactored to About Us & Contact Us Page
 * * This component provides information about the SCDB project (About Us)
 * * and provides details for user inquiries (Contact Us) in a visually attractive manner.
 */

const SCDB = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-[#1F1E24] text-white p-8">
            
            <div className="max-w-4xl w-full bg-[#141519] rounded-xl shadow-2xl overflow-hidden">
                
                {/* Header Section */}
                <div className="bg-red-600 p-8 text-center">
                    <h1 className="text-5xl font-extrabold tracking-wider">
                        SCDB
                    </h1>
                    <p className="text-xl mt-2 font-light">
                        Super Cinema Data Base
                    </p>
                </div>

                <div className="p-10 grid md:grid-cols-2 gap-10">
                    
                    {/* 1. About Us Section */}
                    <section className="border-r border-gray-700 pr-5 md:pr-10">
                        <h2 className="text-3xl font-bold mb-4 flex items-center text-red-500">
                            {/* <MdMovie className="mr-2" /> */}
                            🎬 About Our Project
                        </h2>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            **SCDB** is a passion project built to provide users with a clean, fast, and comprehensive platform for exploring the world of cinema. We leverage the power of **The Movie Database (TMDB) API** to bring you up-to-date information on trending films, popular shows, cast details, and more.
                        </p>
                        <p className="text-gray-400 leading-relaxed text-sm italic">
                            Our dashboard features include real-time search, dynamic genre filtering, popularity sorting, and responsive movie cards, all powered by **React** and styled with **Tailwind CSS**. We aim to be your go-to source for movie discovery.
                        </p>

                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-white flex items-center">
                                {/* <FaCode className="mr-2" /> */}
                                Technology Stack
                            </h3>
                            <ul className="list-disc list-inside text-sm text-gray-400 ml-4 mt-2 space-y-1">
                                <li>Frontend: **React** (Hooks, Router)</li>
                                <li>Styling: **Tailwind CSS** (for responsive design)</li>
                                <li>Data Fetching: **Axios** / Fetch API</li>
                                <li>API: **TMDB** (The Movie Database)</li>
                            </ul>
                        </div>
                    </section>

                    {/* 2. Contact Us Section */}
                    <section>
                        <h2 className="text-3xl font-bold mb-4 flex items-center text-red-500">
                            {/* <FaEnvelope className="mr-2" /> */}
                            📞 Get In Touch
                        </h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Have a question, feedback, or found a bug? We'd love to hear from you! Reach out to us via any of the methods below.
                        </p>

                        <div className="space-y-4">
                            {/* Email */}
                            <div className="flex items-start">
                                <span className="text-red-500 text-xl mt-1 mr-3">
                                    {/* <FaEnvelope /> */}
                                    📧
                                </span>
                                <div>
                                    <p className="font-semibold text-white">Email Support</p>
                                    <a href="mailto:support@scdbapp.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                                        support@scdbapp.com
                                    </a>
                                </div>
                            </div>
                            
                            {/* Phone */}
                            <div className="flex items-start">
                                <span className="text-red-500 text-xl mt-1 mr-3">
                                    {/* <FaPhoneAlt /> */}
                                    📱
                                </span>
                                <div>
                                    <p className="font-semibold text-white">Developer Hotline</p>
                                    <p className="text-gray-400">+918475849889</p>
                                </div>
                            </div>

                            {/* Location (Optional) */}
                            <div className="flex items-start">
                                <span className="text-red-500 text-xl mt-1 mr-3">
                                    {/* <FaMapMarkerAlt /> */}
                                    📍
                                </span>
                                <div>
                                    <p className="font-semibold text-white">Development Headquarters</p>
                                    <p className="text-gray-400">Mathura</p>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                {/* Footer / Copyright */}
                <div className="p-4 text-center border-t border-gray-800 bg-[#1F1E24]">
                    <p className="text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} SCDB Project. All rights reserved. Data powered by TMDB.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SCDB;