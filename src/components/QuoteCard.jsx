import "./styles.css";
// export const QuoteCard = (props) => {

//   return (
//     <section>
//       <p>{props.quote}</p>
//       <p>{props.author}</p>
//     </section>
//   );
// };

export const QuoteCard = ({ quote, author, likeCount }) => {
  return (
    <section className="QuoteCard">
      <p>{quote}</p>
      <p>{author}</p>
      <p>❤️ Likes: {likeCount}</p>
    </section>
  );
};
