// SingleBook.js
import React from 'react'; 
import books from '../data/books';  
import { useParams } from 'react-router-dom';

const Book = () => {
  const { slug } = useParams();
  const book = books.find(book => book.slug === slug);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <img className="book_image" src={book.image}/>
    </div>
  );
};

export default Book;
