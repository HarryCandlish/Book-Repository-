import React from 'react';
import { Link } from 'react-router-dom';
import { Books } from '../data/Books';

import '../styles/dashboard.css'

const Dashboard = () => {
  return (
    <div>
      <table className='row-container'>
        <thead>
          <th></th>
          <th>Title</th>
          <th>Author</th>
          <th>Read</th>
        </thead>
        {Books.map((book, index) => (
          <tbody key={index}>
              <td><Link to={`book/${book.id}`}>
              <img
                className='book-image'
                src={book.image}
                alt="image"
              />
            </Link>
              </td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.read}</td>
            </tbody>
        ))}
      </table>
      <div>
      </div>
    </div>
  );
};

export default Dashboard;