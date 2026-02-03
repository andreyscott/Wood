import React from 'react';

export const ArtisanLogo = ({ size = 64, className = "" }: { size?: number, className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} transition-all duration-500 group-hover:scale-105 drop-shadow-xl`}
    >
        {/* Hexagonal Outer Frame (Stability & Quality) */}
        <path
            d="M50 2L91.5 26V74L50 98L8.5 74V26L50 2Z"
            className="fill-orange-950 dark:fill-orange-800"
        />
        <path
            d="M50 8L86 28.5V71.5L50 92L14 71.5V28.5L50 8Z"
            className="fill-[#FDFCFB] dark:fill-stone-900"
        />

        {/* Wood Log Rings (The Material) */}
        <g opacity="0.15" className="stroke-orange-900 dark:stroke-orange-400">
            <circle cx="50" cy="50" r="35" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="28" strokeWidth="1" strokeDasharray="3 5" />
            <circle cx="50" cy="50" r="20" strokeWidth="0.5" />
            <path d="M50 15L50 20 M50 80L50 85 M15 50H20 M80 50H85" strokeWidth="1" />
        </g>

        {/* The Tools (Mallet, Chisel, Square) */}
        <g transform="translate(50, 48) scale(0.9) translate(-50, -50)">
            {/* Carpenter's Square (Precision) */}
            <path d="M35 30H65V35H40V65H35V30Z" className="fill-stone-300 dark:fill-stone-600 opacity-40" />

            {/* Joiner's Mallet (Force & Build) */}
            <g transform="rotate(-30 50 50)">
                <rect x="47" y="25" width="6" height="55" rx="1" className="fill-orange-950 dark:fill-stone-100" />
                <rect x="35" y="25" width="30" height="18" rx="2" className="fill-orange-900 dark:fill-stone-300" />
                <path d="M35 25H65L62 20H38L35 25Z" className="fill-orange-800 dark:fill-stone-400" />
            </g>

            {/* Detail Chisel (Refinement) */}
            <g transform="rotate(30 50 50)">
                <rect x="47" y="25" width="6" height="55" rx="1" className="fill-orange-950 dark:fill-stone-200" />
                <rect x="44" y="25" width="12" height="15" rx="1" className="fill-stone-500 dark:fill-stone-400" />
                <rect x="45" y="15" width="10" height="10" rx="0.5" className="fill-stone-400 dark:fill-stone-300" />
            </g>
        </g>

        {/* Center Brand Banner */}
        <rect x="10" y="44" width="80" height="12" rx="1" className="fill-orange-950 dark:fill-orange-800" />
        <text x="50" y="53" textAnchor="middle" className="fill-white font-black text-[8px] tracking-[4px] uppercase font-serif">ARTISAN</text>

        {/* Foundation Label */}
        <text x="50" y="65" textAnchor="middle" className="fill-orange-950 dark:fill-orange-400 text-[5px] font-black tracking-widest opacity-80">QUALITY WOODWORKS</text>
    </svg>
);
