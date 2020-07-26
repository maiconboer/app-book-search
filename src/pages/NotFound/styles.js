import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 95vh;
  margin: 0px auto 40px;
  padding: 40px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  
  a {
    text-decoration: var(--color1);
  }

  img {
    margin: 60px auto;
    width: 50%;
  }
`;