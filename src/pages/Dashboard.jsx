import React from 'react';
import { Link } from 'react-router-dom';
import books from '../data/books';
import { GoIssueClosed } from 'react-icons/go'
import { IoIosCloseCircleOutline } from 'react-icons/io'

import '../styles/dashboard.css'

const Dashboard = () => {
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
        {books.map((book, index) => (
          <tbody key={index}>
            <tr>
              <td><Link to={`/book/${book.slug}`}>
              <img
                className='book-image'
                src={book.image}
                alt="image"
              />
            </Link>
              </td>
                  <td className='book_title'>{book.title}</td>
                    <td>{book.author}</td>
                  <td>{book.read === true ? <GoIssueClosed/> : <IoIosCloseCircleOutline/>}</td>
              </tr>
            </tbody>
        ))}
      </table>
      <div>
      </div>
    </div>
  );
};

export default Dashboard;