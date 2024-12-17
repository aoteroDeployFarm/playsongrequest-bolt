import React, { useState } from 'react';
import { Header } from './components/Header';
import { BandCard } from './components/BandCard';
import { SongList } from './components/SongList';
import { RequestForm } from './components/RequestForm';
import { type Band, type Song } from './types';

// Mock data
const MOCK_BANDS: Band[] = [
  {
    id: '1',
    name: 'The Midnight Echoes',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000',
    genre: 'Alternative Rock',
    isLive: true,
  },
  {
    id: '2',
    name: 'Jazz Fusion Collective',
    imageUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=1000',
    genre: 'Jazz Fusion',
    isLive: false,
  },
];

const MOCK_SONGS: Song[] = [
  {
    id: '1',
    title: 'Midnight Dreams',
    artist: 'The Midnight Echoes',
    duration: '4:35',
    genre: 'Alternative Rock',
    requestCount: 12,
  },
  {
    id: '2',
    title: 'Urban Symphony',
    artist: 'The Midnight Echoes',
    duration: '3:45',
    genre: 'Alternative Rock',
    requestCount: 8,
  },
];

function App() {
  const [selectedBand, setSelectedBand] = useState<Band | null>(null);
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  const handleSongRequest = (song: Song) => {
    setSelectedSong(song);
  };

  const handleRequestSubmit = (name: string, note: string) => {
    // Here you would typically make an API call to submit the request
    console.log('Request submitted:', { song: selectedSong, name, note });
    setSelectedSong(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {!selectedBand ? (
          <div>
            <h2 className="text-3xl font-bold mb-6">Live Performances</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_BANDS.map((band) => (
                <BandCard
                  key={band.id}
                  band={band}
                  onSelect={setSelectedBand}
                />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => setSelectedBand(null)}
              className="mb-6 text-purple-600 hover:text-purple-700 flex items-center"
            >
              ← Back to Bands
            </button>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">{selectedBand.name}</h2>
                  <p className="text-gray-600">{selectedBand.genre}</p>
                </div>
                {selectedBand.isLive && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full">
                    LIVE NOW
                  </span>
                )}
              </div>
              <SongList
                songs={MOCK_SONGS}
                onRequest={handleSongRequest}
              />
            </div>
          </div>
        )}
      </main>

      {selectedSong && (
        <RequestForm
          song={selectedSong}
          onSubmit={handleRequestSubmit}
          onClose={() => setSelectedSong(null)}
        />
      )}
    </div>
  );
}

export default App;