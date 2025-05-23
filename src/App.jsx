import './App.css';
import { QuoteCard } from './components/QuoteCard';
import { QuoteProvider, useQuote } from './contexts/QuoteContext';

function AppContent() {
  const { handleNextQuote, handleLike } = useQuote();

  return (
    <div className="App">
      <QuoteCard />
      <button onClick={handleNextQuote}>Next Quote</button>
      <button onClick={handleLike}>Like ❤️</button>
    </div>
  );
}

export default function App() {
  return (
    <QuoteProvider>
      <AppContent />
    </QuoteProvider>
  );
}