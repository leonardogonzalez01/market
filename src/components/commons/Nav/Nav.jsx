import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div style={{width: 250}} className='d-flex justify-content-between'>
      <Link to={'/admin'}>Administrator</Link>
      <Link to={'/'}>Home</Link>
      <Link to={'/checkout'}>Checkout</Link>
    </div>
  );
};

export default Nav;