import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
  {
    title: 'The Let Them Theory',
    author: 'Mel Robbins',
    img: 'images/HYYHStation.jpg',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    img: 'images/suckerIsrael.jpg',
  },
  {
    title: 'Magic Shop',
    author: 'Some Human',
    img: 'images/goIran.jpg',
  },
  {
    title: 'Alice in Wonderland',
    author: 'Some Human',
    img: 'logo512.png',
  },
];

const BookList = () => (
  <section className="booklist">
    {books.map((book) => {
      const { title, author, img } = book;
      return <Book title={title} author={author} img={img} />;
    })}
  </section>
);

function Book({ author, title, img, children }) {
  // const { bookAuthor, bookName, bookImg } = props;
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
