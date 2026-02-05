'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Sparkles, Star } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export const HeroVideo = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [shouldPlayVideo, setShouldPlayVideo] = useState(false);

    useEffect(() => {
        // connection check logic
        const checkConnection = () => {
            if (typeof navigator !== 'undefined') {
                const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
                if (connection) {
                    const slowConnections = ['slow-2g', '2g', '3g'];
                    if (slowConnections.includes(connection.effectiveType) || connection.saveData) {
                        return false;
                    }
                }
                // Also check for mobile (simple logic, or rely on Tailwind md prefix essentially handling layout)
                // However, for video autoplay, we often want to be careful on mobile data.
                // Modern browsers handle autoplay=muted well.
                // The prompt asks: "If the user is on a slow connection or mobile, ensure the poster image loads first."
                // effectively, we can delay video loading or skip it.
                // Let's check for mobile user agent to be conservative if desired, or just screen width.
                if (window.innerWidth < 768) {
                    // Start with false, but we can set to true if we trust purely connection speed.
                    // "ensure the poster image loads first" -> this is handled by the video poster attribute anyway.
                    // But to save data, we might choose NOT to render the video src.
                }
            }
            return true;
        };

        const canPlay = checkConnection();
        setShouldPlayVideo(canPlay);
    }, []);

    return (
        <section className="relative h-[90vh] flex items-center overflow-hidden bg-stone-900">
            {/* Background Video Container */}
            <div className="absolute inset-0 z-0">
                <div className={`absolute inset-0 z-10 bg-black/20 transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-100'}`}></div>

                {/* Poster / Fallback Image - Always visible underneath or if video doesn't load */}
                <img
                    src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80&w=1920"
                    alt="Hero Background"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
                />

                {shouldPlayVideo && (
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        poster="https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80&w=1920"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoadedData={() => setVideoLoaded(true)}
                    >
                        <source src="https://cdn.media.amplience.net/v/boconcept/a3bc902a-c3ac-4d31-a2c1-b39f00bcdfe9/mp4_720p" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 z-20 bg-gradient-to-b from-stone-950/30 via-transparent to-[#FDFCFB] dark:to-stone-950 pointer-events-none"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
                <div className="animate-fade-in-up max-w-3xl">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white/90 text-xs font-bold uppercase tracking-widest mb-6 border border-white/20 shadow-lg">
                        <Sparkles size={14} />
                        <span>Premium Furniture Since 2012</span>
                    </div>

                    {/* Glassmorphism Title Container */}
                    <div className="relative mb-6">
                        <h1 className="text-5xl md:text-8xl font-black leading-[1.1] font-serif tracking-tight drop-shadow-lg">
                            Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-amber-100">Luxury</span> Meets <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-amber-100">Craftsmanship</span>
                        </h1>
                    </div>

                    <p className="text-base md:text-xl mb-10 text-stone-100 leading-relaxed font-light drop-shadow-md max-w-2xl bg-black/10 backdrop-blur-sm p-4 rounded-xl border border-white/5">
                        Where heritage meets modernity. We craft timeless furniture that tells a story, tailored to your vision and built for generations.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <a
                            href={WHATSAPP_LINK}
                            className="group relative bg-orange-900/90 hover:bg-orange-800 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-black text-center transition-all duration-300 flex items-center justify-center space-x-2 overflow-hidden shadow-2xl shadow-orange-950/30 border border-orange-700/50"
                        >
                            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                            <MessageCircle size={24} />
                            <span>Get Free Consultation</span>
                        </a>
                        <Link
                            href="/categories"
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-black text-center transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-white/10"
                        >
                            <span>Explore Showroom</span>
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Floating Decorative Elements - Hidden on mobile, visible on desktop */}
            <div className="absolute bottom-20 right-[10%] hidden lg:block animate-float z-30">
                <div className="glass bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] w-72 shadow-2xl relative border border-white/20">
                    <div className="flex -space-x-4 mb-5">
                        {[1, 2, 3, 4].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-white/10 bg-stone-200 overflow-hidden shadow-lg"><img src={`https://i.pravatar.cc/100?u=${i}`} alt="" /></div>)}
                        <div className="w-12 h-12 rounded-full border-4 border-white/10 bg-orange-900 flex items-center justify-center text-white text-xs font-black shadow-lg">+99</div>
                    </div>
                    <p className="text-white text-base font-black">500+ Custom Projects Delivered</p>
                    <div className="mt-3 flex items-center text-orange-400 space-x-1.5">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                </div>
            </div>
        </section>
    );
};
