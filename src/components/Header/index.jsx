import React from 'react';
import { Link } from 'react-router-dom';

import Title from '../Title';

const Header = () => {

  return (
    <Link to='/'>
      <Title 
        title='App Book Search'
        size='1.5rem'
        color='var(--color1)'
      />
    </Link>
  )
}

export default Header;
