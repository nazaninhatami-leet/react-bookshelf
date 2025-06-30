import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
  {
    title: 'The Let Them Theory',
    author: 'Mel Robbins',
    img: 'images/HYYHStation.jpg',
    id: 1,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    img: 'images/suckerIsrael.jpg',
    id: 2,
  },
  {
    title: 'Magic Shop',
    author: 'Some Human',
    img: 'images/goIran.jpg',
    id: 3,
  },
  // {
  //   title: 'Alice in Wonderland',
  //   author: 'Some Human',
  //   img: 'logo512.png',
  //   id: 4,
  // },
];

const BookList = () => (
  <section className="booklist">
    {books.map((book) => {
      // const { title, author, img, id } = book;
      return (
        // <Book book={book} key={book.id}
        <Book {...book} key={book.id}>
          <p style={{ color: 'red', marginTop: '50px' }}>25% off</p>
        </Book>
      );
    })}
  </section>
);

// function Book({book: { author, title, img }, children}) {
function Book({ author, title, img, children }) {
  return (
    <div className="book">
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h2>{author}</h2>
      {children}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
