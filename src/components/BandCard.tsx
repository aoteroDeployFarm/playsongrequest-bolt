import React from 'react';
import { type Band } from '../types';
import { Music, Users } from 'lucide-react';

interface BandCardProps {
  band: Band;
  onSelect: (band: Band) => void;
}

export function BandCard({ band, onSelect }: BandCardProps) {
  return (
    <div 
      onClick={() => onSelect(band)}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer"
    >
      <img 
        src={band.imageUrl} 
        alt={band.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{band.name}</h3>
          {band.isLive && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
              LIVE NOW
            </span>
          )}
        </div>
        <div className="flex items-center mt-2 text-gray-600">
          <Music className="h-4 w-4 mr-1" />
          <span className="text-sm">{band.genre}</span>
        </div>
      </div>
    </div>
  );
}