import React, { useState, useRef, useEffect } from 'react';

import { apiAllBooks } from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Book from '../../components/Book';
import Pagination from '../../components/Pagination';
import { Container, Content, Books } from './styles';
import searchImg from '../../assets/search.svg';

const Search = () => {

  const [books, setBooks] = useState([]);
  const [totalBooks, setTotalBooks] = useState(null);
  const [input, setInput] = useState('');
  const [term, setTerm] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const inputElement = useRef()
  const maxResults = 39;

  useEffect(() => {

    async function handleSearchBooksPerPage() {
    
      if(currentPage !== null && term !== null) {
        try {  
          let showStartIndex = (currentPage - 1) * maxResults

          const { data } = await apiAllBooks.get(`${term}&startIndex=${showStartIndex}&maxResults=${maxResults}`)
        
          setBooks([data.items]);
          inputElement.current.focus();
          setCurrentPage(null)

        } catch (error) {
          console.log(error)
        }
      }
    }

    handleSearchBooksPerPage()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  async function handleSearchBooks(event) {
    
    try {
      event.preventDefault();
     
      const { data } = await apiAllBooks.get(`${input}&startIndex=0&maxResults=${maxResults}`)
      
       /* calculo realizado para não mostrar a quantidade total de    
       * livros, exemplo: pesquisando por Javascript a API retorna informação
       * de que há cerca de 488 livros, na verdade há apenas 280, esta 
       * diferença de número retornado e quanto há de fato, quebra a paginação
       * portanto calculo realizado para buscar menos livros
       * */
      setBooks([data.items]);
      setTotalBooks(Math.ceil(data.totalItems / 1.5));
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
            {totalBooks 
              ? 
              <>
                <p className='quantity'>Termo da pesquisa: <strong>{term}</strong>
                </p>
                <p>Cerca de {totalBooks} livros encontrados</p>
              </>
              : ''}

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
            <div className="numbers" onClick={(event) => (setCurrentPage(event.target.textContent))}>
              <div>1</div>
            </div>
            <div className="next">&gt;</div>
            <div className="last">&#187;</div>
          </div>

          {books[0] 
            ? <Pagination 
                totalBooks={totalBooks} 
                maxResults={maxResults} 
              />
            : ''
          }
      <Footer footer='footer' />
    </Container>
  </>
  )
}

export default Search;
