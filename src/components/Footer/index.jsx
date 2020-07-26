import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { Div } from './styles';

import Title from '../Title';

const Footer = ({footer}) => {

const history = useHistory();
const currentPage = history.location.pathname;


  return (
    <Div className={footer}>
      {currentPage !== '/' && 
         <Link to='/'>
           <FiArrowLeft size={24} />
           <span>home</span>
        </Link>
      }

      {currentPage !== '/importance-of-reading' && 
        <Link to='/importance-of-reading'>
        
        {window.innerWidth < 768 
          ? <Title 
              title='A importância da leitura'
              size='.95rem'
              color='var(--color1)'
             />
          : <Title 
              title='A importância da leitura'
              size='1.5rem'
              color='var(--color1)'
            />
        } 
        <FiArrowRight size={24} />
        </Link>
      }
  </Div>
  )
}

export default Footer;
