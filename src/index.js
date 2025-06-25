import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => (
  <section className="booklist">
    <Book
      bookName="The Let Them Theory: A Life-Changing Tool"
      bookAuthor="Mel Robbins"
    />
    <Book bookName="Atomic Habits" bookAuthor="James Clear" />
  </section>
);

function Book(props) {
  return (
    <div className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL600_SR600,400_.jpg"
        // src="logo192.png"
        alt="Book Image"
      />
      <h1>{props.bookName}</h1>
      <h2>{props.bookAuthor}</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
