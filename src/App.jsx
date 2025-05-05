import {quotes as initialQuotes} from './quotes';
import './App.css';
import {QuoteCard} from './components/QuoteCard';
import {useState, useEffect} from 'react';

function App() {
  const [quotes, setQuotes] = useState(() => {
    const stored = localStorage.getItem("quotes");
    return stored ? JSON.parse(stored) : initialQuotes;
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }, [quotes]);

  function handleNextQuoteClick () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentIndex(randomIndex);
  }

  function handleLikeClick () {
    const updatedQuotes = quotes.map((quote, index) =>
      index === currentIndex
        ? { ...quote, likeCount: quote.likeCount + 1 }
        : quote
    );
    setQuotes(updatedQuotes);
  }

  return (
    <div className="App">
      <QuoteCard
        quote={quotes[currentIndex].quote}
        author={quotes[currentIndex].author}
        likeCount={quotes[currentIndex].likeCount}
      />
      <button onClick={handleNextQuoteClick}>Next Quote</button>
      <button onClick={handleLikeClick}>Like ❤️</button>
    </div>
  );
}
export default App;