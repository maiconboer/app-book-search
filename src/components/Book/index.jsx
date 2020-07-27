import React from 'react';
import { Link } from 'react-router-dom';

import { ListItem } from './styles';
import error404Img from '../../assets/404.svg';

const Book = ({books}) => {

  return (
    books.map(book => (
      <ListItem key={book.id}>
        <div className='box-image'>

          {book.volumeInfo.imageLinks !== undefined
            ? <img src={book.volumeInfo.imageLinks.thumbnail} alt=""/>
            : <img src={error404Img} alt="img not found"/>
          }
      
        </div>

        <div className='box-description'>
          <p className='title'>{book.volumeInfo.title}</p>

          <p className='author'><span>Autores: </span>{book.volumeInfo.authors}</p>

          {book.volumeInfo.publisher !== undefined 
            ? <p className='publisher'><span>Editora: </span>{book.volumeInfo.publisher}</p>
            : <p className='publisher'><span>Editora: </span>Não informado</p>
          }
          
          {book.volumeInfo.pageCount !== undefined
            ? <p className='pages'><span>Páginas: </span>{book.volumeInfo.pageCount}</p>
            : <p className='pages'><span>Páginas: </span>Não informado</p>
          }
          
          <Link to={`book/${book.id}`}>
            <button className='more-information'>
              Ver mais
            </button>
          </Link>
        </div>

      </ListItem> )) 
  )
}

export default Book
