import { Ticket } from '../types';
import { Check } from 'lucide-react';

interface TicketConfirmProps {
  ticket: Ticket;
  onNewTicket: () => void;
}

export default function TicketConfirm({ ticket, onNewTicket }: TicketConfirmProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-green-400 to-green-600">
      <div className="flex-1 flex flex-col items-center justify-start overflow-y-auto p-6 pt-8">
        <div className="bg-white rounded-full p-8 mb-8 shadow-2xl shrink-0">
          <Check size={80} className="text-green-500" strokeWidth={4} />
        </div>

        <h1 className="text-5xl font-bold text-white mb-2 text-center">TICKET ISSUED</h1>
        <p className="text-2xl text-white/90 mb-12">Successfully generated</p>

        <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl border-4 border-green-700 shrink-0">
          <div className="text-center mb-6">
            <div className="text-2xl text-gray-600 font-semibold">TICKET NO.</div>
            <div className="text-5xl font-bold text-gray-900 mt-2 tracking-wider">
              {ticket.ticketNumber}
            </div>
          </div>

          <div className="border-t-4 border-dashed border-gray-300 my-6"></div>

          <div className="space-y-6">
            <div>
              <div className="text-xl text-gray-600 font-semibold">DESTINATION</div>
              <div className="text-3xl font-bold text-gray-900 mt-1">
                {ticket.destination.name}
              </div>
              <div className="text-lg text-gray-600 mt-1">{ticket.destination.code}</div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-xl text-gray-600 font-semibold">PASSENGERS</div>
                <div className="text-4xl font-bold text-gray-900 mt-1">
                  {ticket.passengers}
                </div>
              </div>
              <div>
                <div className="text-xl text-gray-600 font-semibold">FARE</div>
                <div className="text-4xl font-bold text-green-600 mt-1">
                  ₹{ticket.totalFare}
                </div>
              </div>
            </div>

            <div>
              <div className="text-lg text-gray-600 font-semibold">TIME</div>
              <div className="text-2xl font-bold text-gray-900 mt-1">
                {formatTime(ticket.timestamp)}
              </div>
              <div className="text-lg text-gray-600 mt-1">
                {formatDate(ticket.timestamp)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex-shrink-0 bg-gradient-to-br from-green-400 to-green-600">
        <button
          onClick={onNewTicket}
          className="w-full bg-white hover:bg-gray-100 active:bg-gray-200 text-green-600 text-3xl font-bold py-6 rounded-3xl border-4 border-white shadow-xl transition-all active:scale-98"
        >
          NEW TICKET
        </button>
      </div>
    </div>
  );
}
