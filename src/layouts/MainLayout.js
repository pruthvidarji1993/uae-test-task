import React from 'react';
import Header from '../component/common/Header';
import { FaChevronUp } from 'react-icons/fa';
import { Button } from 'reactstrap';

const Mainlayout = ({ children }) => {
  const scrollToTop = () => {
    let element = document.getElementById('divId');
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div id='divId' className={`theme-section`}>
        <Header />
        {children}
        <Button
          className='scroll-top-btn'
          color='primary'
          onClick={scrollToTop}
        >
          <FaChevronUp size={12} />
        </Button>
      </div>
    </>
  );
};

export default Mainlayout;
