'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ShowroomHero } from '../../components/ShowroomHero';
import { ShowroomList } from '../../components/ShowroomList';
import { Showroom } from '../../types';
import { SHOWROOMS } from '../../constants';

// Dynamic import to prevent SSR issues with Leaflet
const ShowroomMap = dynamic(
    () => import('../../components/ShowroomMap').then(mod => ({ default: mod.ShowroomMap })),
    {
        ssr: false,
        loading: () => (
            <div className="h-full w-full bg-stone-900 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto mb-4"></div>
                    <p className="text-lg font-semibold">Loading map...</p>
                </div>
            </div>
        )
    }
);

export default function ShowroomsPage() {
    const [selectedShowroomId, setSelectedShowroomId] = useState<string | null>(null);

    // Showroom data retrieved from constants
    const showrooms = SHOWROOMS;

    return (
        <div className="flex flex-col">
            {/* Hero Video Section */}
            <ShowroomHero videoUrl={showrooms.find(s => s.id === selectedShowroomId)?.videoUrl} />

            {/* Main Content: Sidebar + Map */}
            <section className="bg-[#FDFCFB] dark:bg-stone-950 py-8 lg:py-0">
                <div className="max-w-[1920px] mx-auto">
                    {/* Desktop: Two Column Layout */}
                    <div className="flex flex-col lg:flex-row lg:h-[600px] xl:h-[700px] gap-6 lg:gap-0 px-4 lg:px-0">
                        {/* Left: Showroom List */}
                        <div className="w-full lg:w-2/5 bg-stone-50 dark:bg-stone-900/50 lg:border-r border-stone-200 dark:border-stone-800 rounded-2xl lg:rounded-none overflow-hidden min-h-[400px] lg:min-h-0">
                            <ShowroomList
                                showrooms={showrooms}
                                selectedId={selectedShowroomId}
                                onSelectShowroom={setSelectedShowroomId}
                            />
                        </div>

                        {/* Right: Map */}
                        <div className="w-full lg:w-3/5 h-[500px] lg:h-full p-0 lg:p-6">
                            <ShowroomMap
                                showrooms={showrooms}
                                selectedId={selectedShowroomId}
                                onSelectShowroom={setSelectedShowroomId}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
