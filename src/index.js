import ReactDOM from 'react-dom/client';
import './index.css';

import {books} from './books'
import Book from './book'

const BookList = () => (
  <section className="booklist">
    {books.map((book) => {
      return (
        <Book {...book} key={book.id}>
          <p style={{ color: 'red', marginTop: '50px', padding:'6px', backgroundColor:'#eee', width:'40%', borderRadius:'4px', fontWeight:'bold'}}>25% off</p>
        </Book>
      );
    })}
  </section>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
