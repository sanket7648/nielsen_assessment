import { Ticket } from 'lucide-react';

interface HomeScreenProps {
  onStartTicket: () => void;
  onViewRationale: () => void;
}

export default function HomeScreen({ onStartTicket, onViewRationale }: HomeScreenProps) {
  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500">
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="bg-white/20 backdrop-blur-lg rounded-full p-12 mb-8 border-4 border-white/40 shadow-2xl">
          <Ticket size={100} className="text-white" strokeWidth={3} />
        </div>

        <h1 className="text-5xl font-bold text-white mb-4 text-center tracking-tight">
          Quick Ticket
        </h1>
        <p className="text-xl text-white/90 text-center mb-12 font-medium">
          Fast. Simple. One-Handed.
        </p>

        <div className="w-full max-w-md space-y-4">
          <button
            onClick={onStartTicket}
            className="w-full bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-900 text-3xl font-bold py-6 rounded-3xl border-4 border-gray-900 shadow-2xl transition-all active:scale-98"
          >
            START TICKETING
          </button>

          <button
            onClick={onViewRationale}
            className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 active:bg-white/40 text-white text-2xl font-bold py-5 rounded-3xl border-4 border-white/40 shadow-xl transition-all active:scale-98"
          >
            View Design Rationale
          </button>
        </div>
      </div>

      <div className="p-6 text-center">
        <p className="text-white/80 text-lg font-medium">
          Optimized for conductors on the move
        </p>
      </div>
    </div>
  );
}
