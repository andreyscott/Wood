import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, User, MapPin } from 'lucide-react';
import { SamLogo } from './SamStandardLogo';
import { BUSINESS_NAME, WHATSAPP_NUMBER, FOCAL_PERSON } from '../constants';

export const Footer = () => (
    <footer className="bg-stone-950 text-stone-300 py-32 px-4 mt-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-orange-900 to-transparent opacity-50">

        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 relative z-10">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-6 mb-10">
                    <SamLogo size={96} />
                    <div className="flex flex-col -space-y-3 ">
                        <h2 className="text-white text-4xl font-black font-serif tracking-tighter pb-2">{BUSINESS_NAME}</h2>
                        <span className="text-sm uppercase tracking-[10px] text-orange-500 font-black">Superior Craft Since 2008</span>
                    </div>
                </div>
                <p className="max-w-md text-stone-400 leading-relaxed text-lg font-light">
                    The home of the best quality and luxurious furniture in Nigeria. We are proud to offer our customers the finest furniture in the world.
                </p>
                <div className="flex space-x-6 mt-12">
                    <a href="#" className="w-14 h-14 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:bg-orange-900 hover:border-orange-900 transition-all duration-300 shadow-2xl"><Phone size={24} /></a>
                    <a href="#" className="w-14 h-14 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:bg-orange-900 hover:border-orange-900 transition-all duration-300 shadow-2xl"><MessageCircle size={24} /></a>
                </div>
            </div>
            <div>
                <h3 className="text-white font-black text-xl mb-10 flex items-center uppercase tracking-widest">
                    <span className="w-10 h-0.5 bg-orange-800 mr-4"></span> Navigation
                </h3>
                <ul className="space-y-5 text-lg">
                    <li><Link href="/categories" className="hover:text-orange-400 transition-colors flex items-center group"><span className="w-0 group-hover:w-4 h-0.5 bg-orange-800 mr-0 group-hover:mr-4 transition-all"></span>Showroom</Link></li>
                    <li><Link href="/custom-order" className="hover:text-orange-400 transition-colors flex items-center group"><span className="w-0 group-hover:w-4 h-0.5 bg-orange-800 mr-0 group-hover:mr-4 transition-all"></span>Custom Design</Link></li>
                    <li><Link href="/about" className="hover:text-orange-400 transition-colors flex items-center group"><span className="w-0 group-hover:w-4 h-0.5 bg-orange-800 mr-0 group-hover:mr-4 transition-all"></span>Our Story</Link></li>
                    <li><Link href="/contact" className="hover:text-orange-400 transition-colors flex items-center group"><span className="w-0 group-hover:w-4 h-0.5 bg-orange-800 mr-0 group-hover:mr-4 transition-all"></span>Contact Us</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="text-white font-black text-xl mb-10 flex items-center uppercase tracking-widest">
                    <span className="w-10 h-0.5 bg-orange-800 mr-4"></span> The Workshop
                </h3>
                <ul className="space-y-8 text-base text-stone-400">
                    <li className="flex items-start space-x-5">
                        <User size={24} className="text-orange-500 mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-white font-black text-xl leading-none mb-1">{FOCAL_PERSON}</p>
                            <p className="text-xs uppercase tracking-widest opacity-60">Managing Director</p>
                        </div>
                    </li>
                    <li className="flex items-start space-x-5">
                        <Phone size={24} className="text-stone-500 mt-1 flex-shrink-0" />
                        <span className="text-lg font-medium tracking-wide">{WHATSAPP_NUMBER}</span>
                    </li>
                    <li className="flex items-start space-x-5">
                        <MapPin size={24} className="text-stone-500 mt-1 flex-shrink-0 hover:text-orange-500 transition-colors" />
                        <span className="text-lg"> 51, Urubi Street, Benin City,Edo State</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-stone-900 text-center text-xs text-stone-500 tracking-[5px] uppercase font-black">
            <p>&copy; {new Date().getFullYear()} {BUSINESS_NAME}. Handcrafted Excellence in Nigeria.</p>
        </div>
    </footer>
);
