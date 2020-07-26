import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Content } from './styles';
import bookImage from '../../assets/book-image.svg';

const Home = () => {

  return (   
    <>
      <Container>
        <Header />

        <Content className='introduction'>
          <div>
            <h2>Encontre os livros que você procura</h2>

            <p>Você não precisa saber o nome do <span>livro</span>, se você souber o nome do <span>autor</span> ou  <span>editor</span>, basta digitar e pesquisar, ou então digitar uma <span>palavra chave</span>.</p>

            <button className='btn-search'>
              <Link to='/search'>Pesquisar</Link>
              <FiArrowRight />
            </button>
          </div>

          <div className='svg-book'>
            <img src={bookImage} alt=""/>
          </div>
        </Content>  

        <Footer />
      </Container>
    </>
  )
}

export default Home;
