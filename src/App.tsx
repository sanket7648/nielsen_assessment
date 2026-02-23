import { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import DestinationSelect from './components/DestinationSelect';
import PassengerSelect from './components/PassengerSelect';
import TicketConfirm from './components/TicketConfirm';
import DesignRationale from './components/DesignRationale';
import { stops } from './data/stops';
import { Stop, Ticket, Screen } from './types';

function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [selectedDestination, setSelectedDestination] = useState<Stop | null>(null);
  const [passengers, setPassengers] = useState(1);
  const [currentTicket, setCurrentTicket] = useState<Ticket | null>(null);

  const handleDestinationSelect = (stop: Stop) => {
    setSelectedDestination(stop);
    setScreen('passengers');
  };

  const handleIssueTicket = () => {
    if (!selectedDestination) return;

    const ticket: Ticket = {
      id: Date.now().toString(),
      destination: selectedDestination,
      passengers,
      totalFare: passengers * selectedDestination.fare,
      timestamp: new Date(),
      ticketNumber: `TKT${Date.now().toString().slice(-6)}`,
    };

    setCurrentTicket(ticket);
    setScreen('confirm');
  };

  const handleNewTicket = () => {
    setSelectedDestination(null);
    setPassengers(1);
    setCurrentTicket(null);
    setScreen('destination');
  };

  const handleStartTicket = () => {
    setScreen('destination');
  };

  const handleViewRationale = () => {
    setScreen('rationale');
  };

  const handleBackToHome = () => {
    setScreen('home');
  };

  const handleBackToDestination = () => {
    setScreen('destination');
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      {screen === 'home' && (
        <HomeScreen onStartTicket={handleStartTicket} onViewRationale={handleViewRationale} />
      )}

      {screen === 'destination' && (
        <DestinationSelect stops={stops} onSelect={handleDestinationSelect} onBackToHome={handleBackToHome} />
      )}

      {screen === 'passengers' && selectedDestination && (
        <PassengerSelect
          destination={selectedDestination}
          passengers={passengers}
          onPassengerChange={setPassengers}
          onConfirm={handleIssueTicket}
          onBack={handleBackToDestination}
          onBackToHome={handleBackToHome}
        />
      )}

      {screen === 'confirm' && currentTicket && (
        <TicketConfirm ticket={currentTicket} onNewTicket={handleNewTicket} />
      )}

      {screen === 'rationale' && (
        <DesignRationale onBack={handleBackToHome} />
      )}
    </div>
  );
}

export default App;
