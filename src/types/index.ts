export interface Song {
  id: string;
  title: string;
  artist: string;
  duration: string;
  genre?: string;
  requestCount: number;
}

export interface Band {
  id: string;
  name: string;
  imageUrl: string;
  genre: string;
  isLive: boolean;
}

export interface SongRequest {
  id: string;
  songId: string;
  timestamp: number;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  requesterName: string;
  note?: string;
}