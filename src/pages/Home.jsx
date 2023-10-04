import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <div>
        <Link to='/dashboard'>Dashboard</Link>
    </div>
  );
};

export default Home;