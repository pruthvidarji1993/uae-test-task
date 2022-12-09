import React from 'react';

const FullLayout = ({ children }) => {
  return (
    <section className='mid-section full border-0'>
      <div className='full-height'>{children}</div>
    </section>
  );
};

export default FullLayout;
