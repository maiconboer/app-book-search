import React, { useState, useRef } from 'react';


import { apiAllBooks } from '../../services/api';
import pagination from '../../utils/pagination';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Book from '../../components/Book';
import { Container, Content, Books } from './styles';
import searchImg from '../../assets/search.svg';

const Search = () => {

  const [books, setBooks] = useState([]);
  const [totalBooks, setTotalBooks] = useState(null);
  const [input, setInput] = useState('');
  const [term, setTerm] = useState('');
  const inputElement = useRef()
  
  const maxResults = 21;

  // TRABALHANDO NA PÁGINAÇÃO

  async function handleSearchBooks(event) {
    
    try {
      event.preventDefault();
      sessionStorage.clear();
 
      const { data } = await apiAllBooks.get(`${input}&startIndex=0&maxResults=${maxResults}`)

      
      setBooks([data.items]);
      setTotalBooks(data.totalItems);
      setTerm(input);
      setInput('');
      inputElement.current.focus();

    } catch (error) {
      console.log(error)
    }
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
                ref={inputElement}
                value={input}
                onChange={({ target }) => setInput(target.value)}
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
            {totalBooks ? <p className='quantity'>Termo da pesquisa: <strong>{term}</strong> <br/> Cerca de {totalBooks} livros encontrados</p>: ''}

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
 
           <div className="controls">
              <div className="first">&#171;</div>
              <div className="prev">&lt;</div>
              <div className="numbers">
                <div>1</div>
              </div>
              <div className="next">&gt;</div>
              <div className="last">&#187;</div>
            </div>
             
        {books[0] 
          ?  pagination(totalBooks, maxResults)
          : ''
        }

      <Footer footer='footer' />
    </Container>
  </>
  )
}

export default Search;
