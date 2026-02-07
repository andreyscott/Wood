'use client';

import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Showroom } from '../types';

// Fix for default marker icon issue with webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom marker icon
const customIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0C7.163 0 0 7.163 0 16C0 28 16 42 16 42C16 42 32 28 32 16C32 7.163 24.837 0 16 0Z" fill="#EA580C"/>
      <circle cx="16" cy="16" r="6" fill="white"/>
    </svg>
  `),
    iconSize: [32, 42],
    iconAnchor: [16, 42],
    popupAnchor: [0, -42],
});

interface MapControllerProps {
    selectedCoords: [number, number] | null;
}

// Component to handle map zoom/fly-to
function MapController({ selectedCoords }: MapControllerProps) {
    const map = useMap();

    useEffect(() => {
        if (selectedCoords) {
            map.flyTo(selectedCoords, 15, {
                duration: 1.5,
                easeLinearity: 0.5,
            });
        }
    }, [selectedCoords, map]);

    return null;
}

interface ShowroomMapProps {
    showrooms: Showroom[];
    selectedId: string | null;
    onSelectShowroom: (id: string) => void;
}

export const ShowroomMap = ({ showrooms, selectedId, onSelectShowroom }: ShowroomMapProps) => {
    // Calculate center point (average of all coordinates)
    const centerLat = showrooms.reduce((sum, s) => sum + s.coords[0], 0) / showrooms.length;
    const centerLng = showrooms.reduce((sum, s) => sum + s.coords[1], 0) / showrooms.length;
    const center: [number, number] = [centerLat, centerLng];

    const selectedShowroom = showrooms.find(s => s.id === selectedId);
    const selectedCoords = selectedShowroom?.coords || null;

    return (
        <div className="h-full w-full">
            <MapContainer
                center={center}
                zoom={12}
                style={{ height: '100%', width: '100%' }}
                className="z-0 rounded-2xl overflow-hidden"
            >
                {/* Dark/Greyscale Map Tiles - Using CartoDB Dark Matter */}
                {/* <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                /> */}

                {/* Alternative: Stadia Maps (uncomment if preferred) */}
                <TileLayer
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />

                {showrooms.map((showroom) => (
                    <Marker
                        key={showroom.id}
                        position={showroom.coords}
                        icon={customIcon}
                        eventHandlers={{
                            click: () => onSelectShowroom(showroom.id),
                        }}
                    >
                        <Popup>
                            <div className="p-2">
                                <h3 className="font-black text-lg mb-1">{showroom.name}</h3>
                                <p className="text-sm text-stone-600">{showroom.address}</p>
                                <p className="text-sm text-stone-600">{showroom.city}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}

                <MapController selectedCoords={selectedCoords} />
            </MapContainer>
        </div>
    );
};
