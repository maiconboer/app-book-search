import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 95vh;
  margin: 0px auto 40px;
  padding: 40px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {   
    color: var(--color1);
    text-decoration: var(--color1);
  }

  footer {
    margin-bottom: 40px;
  }
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 60px;
  }

  div {
    max-width: 500px;

    h2 {
      font-size: 3rem;
      font-weight: lighter;
      color: var(--color1);
      line-height: 1;
      margin-bottom: 10px;

      @media screen and (max-width: 768px) {
        font-size: 2rem;
      }
    }

    p {
      margin-bottom: 60px;

      span {
      font-weight: bold;
      color: var(--color1);
      }
    } 

    @media screen and (max-width: 768px) {
      img {
        width: 100%;
      }
    }
  }
`;
