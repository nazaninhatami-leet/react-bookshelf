import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => (
  <section className="booklist">
    <Book />
    <Book />
    <Book />
  </section>
);

function Book() {
  return (
    <div className="book">
      <BookImg />
      <BookName />
      <BookAuthor />
    </div>
  );
}

const BookImg = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL600_SR600,400_.jpg"
      alt=""
    />
  );
};
const BookName = () => <h1>The Let Them Theory: A Life-Changing Tool</h1>;
const BookAuthor = () => <h2>Mel Robbins</h2>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
