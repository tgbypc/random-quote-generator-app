import { createContext, useContext, useState } from "react";
import { quotes as initialQuotes } from "../quotes";

const QuoteContext = createContext();

export function QuoteProvider({ children }) {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextQuote = () => {
    const nextIndex = Math.floor(Math.random() * quotes.length);
    setCurrentIndex(nextIndex);
  };

  const handleLike = () => {
    const updatedQuotes = quotes.map((quote, index) =>
      index === currentIndex
        ? { ...quote, likeCount: quote.likeCount + 1 }
        : quote,
    );
    setQuotes(updatedQuotes);
  };

  return (
    <QuoteContext.Provider
      value={{
        quotes,
        currentIndex,
        currentQuote: quotes[currentIndex],
        handleNextQuote,
        handleLike,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  return useContext(QuoteContext);
}
