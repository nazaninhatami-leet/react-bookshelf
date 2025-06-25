import ReactDOM from 'react-dom/client';
import './index.css';

const firstBook = {
  name: 'The Let Them Theory',
  author: 'Mel Robbins',
  img: 'images/HYYHStation.jpg',
};

const secondBook = {
  name: 'Atomic Habits',
  author: 'James Clear',
  img: 'images/suckerIsrael.jpg',
};

const thirdBook = {
  name: 'Magic Shop',
  author: 'Some Human',
  img: 'images/goIran.jpg',
};

const BookList = () => (
  <section className="booklist">
    <Book
      bookName={firstBook.name}
      bookAuthor={firstBook.author}
      bookImg={firstBook.img}
    />
    <Book
      bookName={secondBook.name}
      bookAuthor={secondBook.author}
      bookImg={secondBook.img}
    />
    <Book
      bookName={thirdBook.name}
      bookAuthor={thirdBook.author}
      bookImg={thirdBook.img}
    />
  </section>
);

function Book(props) {
  return (
    <div className="book">
      <img
        // src="https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL600_SR600,400_.jpg"
        src={props.bookImg}
        alt={props.bookName}
      />
      <h1>{props.bookName}</h1>
      <h2>{props.bookAuthor}</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
