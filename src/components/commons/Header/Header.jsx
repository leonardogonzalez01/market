import React from 'react';
import Logo from "../Logo/Logo";
import Title from "../Title/Title";
import Nav from "../Nav/Nav";
import './Header.css';

const Header = () => {
  return (
    <header
      className='d-flex pr-3 pl-3 justify-content-between my-marketplace-header'>
      <Logo/>
      <Title/>
      <Nav/>
    </header>
  );
};

export default Header;