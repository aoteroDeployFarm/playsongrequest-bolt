import React from 'react';
import { type Song } from '../types';
import { Clock, Music, ThumbsUp } from 'lucide-react';

interface SongListProps {
  songs: Song[];
  onRequest: (song: Song) => void;
}

export function SongList({ songs, onRequest }: SongListProps) {
  return (
    <div className="space-y-4">
      {songs.map((song) => (
        <div 
          key={song.id}
          className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">{song.title}</h3>
              <p className="text-gray-600 text-sm">{song.artist}</p>
            </div>
            <button
              onClick={() => onRequest(song)}
              className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors flex items-center space-x-2"
            >
              <Music className="h-4 w-4" />
              <span>Request</span>
            </button>
          </div>
          <div className="flex items-center mt-2 text-sm text-gray-500 space-x-4">
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {song.duration}
            </span>
            <span className="flex items-center">
              <ThumbsUp className="h-4 w-4 mr-1" />
              {song.requestCount} requests
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}