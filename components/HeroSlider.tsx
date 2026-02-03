'use client';

import React, { useState, useEffect } from 'react';

const SLIDES = [
    'https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80&w=1920', // Craftsmanship (Original)
    'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1920', // Luxury Living Room
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1920', // Modern Wood Detail
    'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1920'  // Elegant Bedroom
];

export const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 6000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 z-0 select-none">
            {SLIDES.map((slide, index) => (
                <div key={slide} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                    <img
                        src={slide}
                        className="w-full h-full object-cover brightness-[0.4] dark:brightness-[0.3]"
                        alt={`Hero Slide ${index + 1}`}
                    />
                </div>
            ))}
            {/* Gradient Overlay for Text Readability - Matching page.tsx design */}
            <div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-transparent to-[#FDFCFB] dark:to-stone-950"></div>
        </div>
    );
};
