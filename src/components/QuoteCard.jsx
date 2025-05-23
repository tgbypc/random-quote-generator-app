import "./styles.css";
import { useQuote } from "../contexts/QuoteContext";

export const QuoteCard = () => {
  const { currentQuote } = useQuote();

  return (
    <section className="QuoteCard">
      <p>{currentQuote.quote}</p>
      <p>{currentQuote.author}</p>
      <p>❤️ Likes: {currentQuote.likeCount}</p>
    </section>
  );
};
