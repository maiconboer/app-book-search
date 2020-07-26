import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  height: 95vh;
  margin: 0px auto 40px;
  padding: 40px 20px 0px 20px;

  a {   
    color: var(--color1);
    text-decoration: var(--color1);
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    max-width: 500px;
    margin-right: 40px;

    @media screen and (max-width: 768px) {
      margin-right: 0px;
    }

    h2 {
      font-size: 3rem;
      font-weight: lighter;
      color: var(--color1);
      line-height: 1;
      margin-bottom: 20px;

      @media screen and (max-width: 768px) {
        font-size: 2rem;
      }
    }

    p {
      margin-bottom: 20px;

      span {
      font-weight: bold;
      color: var(--color1);
      }
    } 
  }
  
  .btn-search {
    display: flex;
    align-items: center;
    color: var(--color3);
    border: none;
    background-color: var(--color1);
    padding: 8px 16px;
    border-radius: 4px;

    &:hover{
      filter: brightness(90%); 
    }
    
    a {
      text-decoration: none;
      color: var(--color3);
      padding: 8px 16px;
    }

    svg {
      margin: 0 8px 0 -8px;
    }
  }

  .svg-book {
    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    .btn-search {
      margin-bottom: 60px;
    }
  }
`;
