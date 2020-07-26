import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0px auto 40px;
  padding: 40px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  .search-image {
    margin: 60px auto 0;

    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 60px auto 0;
    }
  }

  a {
    color: var(--color1);
    text-decoration: var(--color1);
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .wrapper-input-btn {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 50px;
    max-width: 500px;
    width: 100%;

    div {
      max-width: 500px;
      width: 100%;

      input {
        max-width: 500px;
        width: 100%;
        
        padding: 6px;
        border: 2px solid var(--color1);
        border-radius: 4px;
      }
    } 

    .btn-search {
      display: flex;
      align-items: center;
      height: 40px;
      color: var(--color3);
      border: none;
      background-color: var(--color1);
      padding: 8px 16px;
      margin-left: 8px;
      border-radius: 4px;

      &:hover{
        filter: brightness(90%); 
      }

      @media screen and (max-width: 768px) {
        width: 100%;
        justify-content: center;
        margin-top: 8px;
      }
    }

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Books = styled.section`
  .quantity {
      margin-top: 24px;
    }
  
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 20px auto 0;

    @media screen and (max-width: 1000px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 20px auto 0;
    }

    @media screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr;
      margin: 20px auto 0;
    }
  }
`;