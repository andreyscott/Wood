'use client';

import React, { useState } from 'react';

interface ShowroomHeroProps {
    videoUrl?: string;
}

export const ShowroomHero = ({ videoUrl = "https://cdn.media.amplience.net/v/boconcept/a3bc902a-c3ac-4d31-a2c1-b39f00bcdfe9/mp4_720p" }: ShowroomHeroProps) => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    return (
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-stone-900">
            {/* Background Video Container */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 z-10 bg-black/40"></div>

                {/* Poster / Fallback Image */}
                <img
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1920"
                    alt="Showroom Background"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
                />

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1920"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoadedData={() => setVideoLoaded(true)}
                >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-20 bg-gradient-to-b from-stone-950/50 via-transparent to-stone-950/30 pointer-events-none"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-30 text-center px-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white font-serif tracking-tight drop-shadow-2xl">
                    Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-amber-100">Showrooms</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-stone-200 font-light max-w-2xl mx-auto drop-shadow-md">
                    Experience the luxury of our handcrafted furniture collections in person
                </p>
            </div>
        </section>
    );
};
