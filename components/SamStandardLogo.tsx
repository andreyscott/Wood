import React from 'react';
import Image from 'next/image';

export const SamLogo = ({ size = 72, className = "" }: { size?: number, className?: string }) => (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
        <Image
            src="/images.jpg"
            alt="Sam Standard Furniture Logo"
            fill
            className="object-contain drop-shadow-xl"
            priority
        />
    </div>
);
