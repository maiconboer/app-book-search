import React from 'react'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container } from './styles';
import error404Img from '../../assets/404.svg';

const NotFound = () => {
  return (
    <>
      <Container>
        <Header />

        <img src={error404Img} alt="page not found" />

        <Footer />
      </Container>
    </>
  )
}

export default NotFound
