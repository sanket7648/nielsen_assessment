import { Stop } from '../types';
import { Minus, Plus } from 'lucide-react';

interface PassengerSelectProps {
  destination: Stop;
  passengers: number;
  onPassengerChange: (count: number) => void;
  onConfirm: () => void;
  onBack: () => void;
  onBackToHome: () => void;
}

export default function PassengerSelect({
  destination,
  passengers,
  onPassengerChange,
  onConfirm,
  onBack,
  onBackToHome
}: PassengerSelectProps) {
  const quickCounts = [1, 2, 3, 4, 5, 6];
  const totalFare = passengers * destination.fare;

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Fixed Header */}
      <div className="p-4 bg-gradient-to-b from-blue-400 to-blue-500 flex-shrink-0">
        <div className="flex gap-2 mb-2">
          <button
            onClick={onBack}
            className="text-xl font-bold text-white hover:underline"
          >
            ← Destination
          </button>
          <button
            onClick={onBackToHome}
            className="text-xl font-bold text-white hover:underline ml-auto flex items-center gap-1"
          >
            Home ⌂
          </button>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border-2 border-white/40">
          <div className="text-xl font-semibold text-white/90">TO</div>
          <div className="text-3xl font-bold text-white mt-1">{destination.name}</div>
          <div className="text-xl text-white/90 mt-1">₹{destination.fare} per ticket</div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Number of Passengers</h2>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {quickCounts.map((count) => (
            <button
              key={count}
              onClick={() => onPassengerChange(count)}
              className={`py-7 rounded-2xl text-3xl font-bold border-4 transition-all shadow-lg ${
                passengers === count
                  ? 'bg-blue-500 text-white border-blue-700 scale-105'
                  : 'bg-white text-gray-900 border-gray-900 hover:bg-blue-50 active:scale-95'
              }`}
            >
              {count}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 mb-8">
          <button
            onClick={() => onPassengerChange(Math.max(1, passengers - 1))}
            className="w-16 h-16 rounded-full bg-gray-200 hover:bg-gray-300 active:bg-gray-400 flex items-center justify-center border-4 border-gray-900 shadow-lg transition-all active:scale-95"
            disabled={passengers <= 1}
          >
            <Minus size={28} className="text-gray-900" />
          </button>

          <div className="text-5xl font-bold text-gray-900 min-w-[100px] text-center">
            {passengers}
          </div>

          <button
            onClick={() => onPassengerChange(passengers + 1)}
            className="w-16 h-16 rounded-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 flex items-center justify-center border-4 border-blue-700 shadow-lg transition-all active:scale-95"
          >
            <Plus size={28} className="text-white" />
          </button>
        </div>

        <div className="pb-20">
          <div className="bg-gray-900 rounded-3xl p-6 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-lg text-gray-300 font-semibold">TOTAL FARE</div>
                <div className="text-base text-gray-400 mt-1">{passengers} × ₹{destination.fare}</div>
              </div>
              <div className="text-5xl font-bold text-yellow-400">₹{totalFare}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="p-6 bg-white border-t-4 border-gray-200 flex-shrink-0">
        <button
          onClick={onConfirm}
          className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white text-3xl font-bold py-6 rounded-3xl border-4 border-green-700 shadow-xl transition-all active:scale-98"
        >
          ISSUE TICKET
        </button>
      </div>
    </div>
  );
}
