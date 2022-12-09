import React from 'react';
import { Container, Spinner } from 'reactstrap';

const Loader = () => {
  return (
    <section className='loader'>
      <Container fluid='lg'>
        <div className='loader-data'>
          <Spinner className='spinner' color='light' />
        </div>
      </Container>
    </section>
  );
};

export default Loader;
