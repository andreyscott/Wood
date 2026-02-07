'use client';

import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Showroom } from '../types';

interface ShowroomListProps {
    showrooms: Showroom[];
    selectedId: string | null;
    onSelectShowroom: (id: string) => void;
}

export const ShowroomList = ({ showrooms, selectedId, onSelectShowroom }: ShowroomListProps) => {
    return (
        <div className="h-full overflow-y-auto px-6 py-8 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-stone-950 dark:text-white font-serif mb-8">
                Our Locations
            </h2>

            {showrooms.map((showroom) => (
                <div
                    key={showroom.id}
                    onClick={() => onSelectShowroom(showroom.id)}
                    className={`
                        cursor-pointer p-6 rounded-3xl border-2 transition-all duration-300
                        ${selectedId === showroom.id
                            ? 'bg-orange-50 dark:bg-orange-950/30 border-orange-500 shadow-lg shadow-orange-500/20'
                            : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-md'
                        }
                    `}
                >
                    <h3 className="text-2xl font-black text-stone-950 dark:text-white mb-4">
                        {showroom.name}
                    </h3>

                    <div className="space-y-3 text-stone-600 dark:text-stone-400">
                        <div className="flex items-start space-x-3">
                            <MapPin size={20} className="mt-1 flex-shrink-0 text-orange-600 dark:text-orange-400" />
                            <div>
                                <p className="font-semibold">{showroom.address}</p>
                                <p className="text-sm">{showroom.city}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <Phone size={20} className="flex-shrink-0 text-orange-600 dark:text-orange-400" />
                            <a href={`tel:${showroom.phone}`} className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                                {showroom.phone}
                            </a>
                        </div>

                        <div className="flex items-start space-x-3">
                            <Clock size={20} className="mt-0.5 flex-shrink-0 text-orange-600 dark:text-orange-400" />
                            <p className="text-sm leading-relaxed">{showroom.hours}</p>
                        </div>
                    </div>

                    {selectedId === showroom.id && (
                        <div className="mt-4 pt-4 border-t border-orange-200 dark:border-orange-800">
                            <span className="text-sm font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                                Selected Location
                            </span>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
