import { useState } from 'react';
import { Stop } from '../types';
import { Search } from 'lucide-react';

interface DestinationSelectProps {
  stops: Stop[];
  onSelect: (stop: Stop) => void;
  onBackToHome: () => void;
}

export default function DestinationSelect({ stops, onSelect, onBackToHome }: DestinationSelectProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const favorites = stops.filter(s => s.isFavorite);
  const filteredStops = stops.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayStops = searchTerm ? filteredStops : favorites;

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="p-4 bg-gradient-to-b from-yellow-400 to-yellow-500 flex-shrink-0">
        <button
          onClick={onBackToHome}
          className="text-lg font-bold text-gray-900 mb-2 hover:underline"
        >
          ← Home
        </button>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Select Destination</h1>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={24} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search stop name or code..."
            className="w-full pl-16 pr-4 py-4 text-xl rounded-2xl border-4 border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-900 shadow-lg font-medium"
            autoFocus
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-32">
        {!searchTerm && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-700 mb-3 px-2">FAVORITES</h2>
          </div>
        )}

        <div className="grid grid-cols-1 gap-3">
          {displayStops.map((stop) => (
            <button
              key={stop.id}
              onClick={() => onSelect(stop)}
              className="bg-white border-4 border-gray-900 rounded-2xl p-6 text-left hover:bg-yellow-50 active:bg-yellow-100 transition-all shadow-lg hover:shadow-xl active:scale-98"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stop.name}</div>
                  <div className="text-lg text-gray-600 font-semibold mt-1">{stop.code}</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">₹{stop.fare}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {searchTerm && filteredStops.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-500 font-medium">No stops found</p>
          </div>
        )}
      </div>
    </div>
  );
}
