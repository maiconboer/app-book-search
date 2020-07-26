import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { apiDetailBook } from '../../services/api';
import { formatDate } from '../../utils/formatDate';

import { Container, Content } from './styles';
import error404Img from '../../assets/404.svg';

const BookDetails = () => {

    const history = useHistory()
    const [book, setBook] = useState(null);
    const [averageRating, setAverageRating] = useState(null);

    useEffect(() => {
      async function loadBook() {
        const id = history.location.pathname.replace('/book/', '')
        const { data } = await apiDetailBook.get(`${id}`);
      
        setBook(data);

        if(data.volumeInfo.averageRating){
          setAverageRating(data.volumeInfo.averageRating)
        }
      }
      
      loadBook();
    },[history.location.pathname])

    function handleAddAverageRating() {
      let arrayAverageRating = [];      
      for (let i = 0; i < averageRating; i++) {
        arrayAverageRating.push(<FaStar key={i} color='#E1776A'/>)    
      }
      
      return (
        <p className='averageRating'><span>Classificação média: </span> {arrayAverageRating}</p>
      ) 
    }

  return (
    <>
      <Container>
        <Header />

        {book && 

          <Content>

            <div className='box-title-and-image'>

              <p className='title'>{book.volumeInfo.title}</p>
              {book.volumeInfo.subtitle !== undefined 
                ? <p className='subtitle'>{book.volumeInfo.subtitle}</p>
                : ''
              }

              {book.volumeInfo.imageLinks !== undefined
                ? <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
                : <img src={error404Img} alt="img not found"/>
              }

            </div>

            <div className='box-description'>
              <p className='author'><span>Autores: </span>{book.volumeInfo.authors}</p>

              {book.volumeInfo.publisher !== undefined 
                ? <p className='publisher'><span>Editora: </span>{book.volumeInfo.publisher}</p>
                : <p className='publisher'><span>Editora: </span>Não informado</p>
              }

              {book.volumeInfo.pageCount !== undefined
                ? <p className='pages'><span>Páginas:
                    </span> {book.volumeInfo.pageCount}</p>
                : <p className='pages'><span>Páginas: 
                    </span> Não informado</p>
              }

              {book.volumeInfo.language !== undefined
                ? <p className='language'><span>Idioma:
                    </span> {book.volumeInfo.language}</p>
                : <p className='language'><span>Idioma: 
                    </span> Não informado</p>
              }

              {book.volumeInfo.publishedDate !== undefined
                ? <p className='publishedDate'><span>Publicação:
                    </span> {formatDate(book.volumeInfo.publishedDate)}</p>
                : ''
              }
              
              {averageRating ? handleAddAverageRating(averageRating) : ''}

              <a className='sample'
                href={book.volumeInfo.canonicalVolumeLink} 
                  target='_blank' rel="noopener noreferrer">
                <button>
                  Amostra
                </button>
              </a>

              {book.saleInfo.buyLink && 
                <a className='buy'
                  href={book.saleInfo.buyLink}
                  target='_blank' rel="noopener noreferrer"
                >
                <button>
                  Comprar
                </button>
              </a>
              }
            
            </div>

          </Content>
        }
        <Footer />
      </Container>
    </>
  )
}

export default BookDetails;
