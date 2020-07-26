import React, { useState } from 'react';

import { apiAllBooks } from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Book from '../../components/Book';
import { Container, Content, Books } from './styles';
import searchImg from '../../assets/search.svg';

const Search = () => {

  const [books, setBooks] = useState([]);
  const [quantity, setQuantity] = useState(null);

  async function handleSearchBooks(event) {
    event.preventDefault();
  
    const value = document.querySelector('input').value  
    const { data } = await apiAllBooks.get(`${value}&maxResults=12`)
    
    setBooks([data.items]);
    setQuantity(data.totalItems);
  }

  return (
    <>
    <Container>
      <Header />
        <Content>    
          <div className='wrapper-input-btn'>
            <div>
              <label htmlFor="search">Pesquisar</label>
              <input
                type='text' 
                name='search' 
                id='search'
                placeholder='Autor, nome do livro ou palavra chave...'
              />
            </div>
          
            <button 
              className='btn-search' 
              onClick={handleSearchBooks}
            >
              Pesquisar
            </button>
          </div>

          <Books>
            {quantity ? <p className='quantity'>Cerca de {quantity} livros encontrados</p>: ''}

            {books[0] 
              ? '' 
              : <img className='search-image' src={searchImg} alt='search' />}

            <ul>
              {books[0] 
                ? <Book books={books[0]} /> 
                : ''
              }
            </ul>
          </Books>
          
        </Content>  
      <Footer footer='footer' />
    </Container>
  </>
  )
}

export default Search;
