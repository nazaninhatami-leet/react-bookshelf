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
    >
      <p style={{ color: 'red', marginTop: '2.6rem' }}>25% OFF</p>
    </Book>
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

function Book({ bookAuthor, bookName, bookImg, children }) {
  // const { bookAuthor, bookName, bookImg } = props;
  return (
    <div className="book">
      <img src={bookImg} alt={bookName} />
      <h1>{bookName}</h1>
      <h2>{bookAuthor}</h2>
      {children}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
