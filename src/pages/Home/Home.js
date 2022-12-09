import React from 'react';
import { Helmet } from 'react-helmet-async';
import MoviesList from '../../component/movies/MoviesList';

function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Popular Movies | Test App</title>
      </Helmet>
      <section className='mid-section'>
        <h4 className='mb-0 text-center'>Popular Movies</h4>
        <MoviesList />
      </section>
    </>
  );
}

export default Dashboard;
