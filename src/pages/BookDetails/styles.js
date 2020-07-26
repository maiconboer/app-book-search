import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1200px;
  min-width: 300px;
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
  max-width: 768px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 16px;
  border-radius: 4px;
  border: 2px solid #ffffff;
  box-shadow: 0px 2px 6px -2px rgba(0, 0, 0, 0.6);
  background-color: #f9f9f9;
  transition: all 0.3s;
  cursor: default;
  
  &:hover {
    border: 2px solid var(--color1);
  }

  .box-title-and-image {
    text-align: center;
    
    p {
      font-weight: bold;
    }

    img { 
      width: 160px;
      height: 240px;
      margin: 16px 0;
    }
  }

  .box-description {
    padding: 16px;
    font-size: 14px;
    overflow: auto;

    p {
      margin-bottom: 4px;
    }

    span {
      font-weight: bold;
    }

    .averageRating {
      display: flex;
      align-items: center;
      
      span {
        margin-right: 4px;
      }
    }

    .sample, 
    .buy {  
      button {
        margin-right: 8px;
        color: var(--color3);
        background-color: var(--color1);
        border: none;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;

        &:hover{
          filter: brightness(90%); 
        }
      } 
    }   
  }
`;
