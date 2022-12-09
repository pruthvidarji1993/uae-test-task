import React from 'react';
import Header from '../component/common/Header';
import Footer from '../component/common/footer';

const Mainlayout = ({ children }) => {
  
  return (
    <>
      <div className={`theme-section`}>
        <Header />
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Mainlayout;
