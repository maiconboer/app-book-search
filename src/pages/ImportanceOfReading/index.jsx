import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import manyBooksImg from '../../assets/coworking.svg';
import { Container, Content } from './styles';

const ImportanceOfReading = () => {
  return (
    <>
    <Container>
      <Header />

      <Content className='introduction'>

        <div>
          <h2>Prática de leitura melhoria o vocabulário</h2>
          <p>Seja por prazer, estudo ou informação, a prática de leitura melhora o vocabulário e simplifica o raciocínio e a interpretação.</p>
          
          <h2>Avançando a tecnologia</h2>
          <p>Com o avanço das tecnologias no mundo moderno, as pessoas estão cada vez menos interessadas em ler.</p>

          <h2>Leitura dinâmica</h2>
          <p>A leitura dinâmica e descontraída é uma das melhores maneiras de obter informações. O ideal é aprender a ler textos informativos, artigos científicos, livros didáticos, livros educacionais, etc.</p>
        </div>

        <div>
          <img src={manyBooksImg} alt=""/>
        </div>
      </Content>  

      <Footer />
    </Container>
  </>
  )
}

export default ImportanceOfReading;
