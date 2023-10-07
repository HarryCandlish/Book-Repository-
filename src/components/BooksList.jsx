import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { GoIssueClosed } from 'react-icons/go'
import { IoIosCloseCircleOutline } from 'react-icons/io'

import '../styles/bookslist.css'

import {client} from '../client'

const BooksList = () => {
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    const getBooksList = async () => {
      try {
        await client.getEntries().then((entries) => {
          setBooksList(entries)
        })
      } catch (error) {
        console.log('error')
      }
    };
    getBooksList()
  }, []
)

console.log(booksList)

return (
    <div>
      <table className='row-container'>
        <thead>
          <tr>
          <th></th>
            <th>TITLE</th>
            <th>AUTHOR</th>
            <th>READ</th>
          </tr>
        </thead>
        {booksList?.items?.map((book) => (
          <tbody>
            <tr>
              <td><Link to={`/book/${book.slug}`}>
              <img
                className='book-image'
                src={book.fields.image.fields.file.url}
                alt="image"
              />
            </Link>
              </td>
                  <td className='book_title'>{book.fields.title}</td>
                    <td>{book.fields.author}</td>
                  <td>{book.fields.read === true ? <GoIssueClosed/> : <IoIosCloseCircleOutline/>}</td>
              </tr>
            </tbody>
        ))}
      </table>
      <div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default BooksList;