import styled from 'styled-components';

export const Div = styled.footer`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 0 0;

  a {
    display: flex;
    align-items: center;
    color: var(--color1);
    text-decoration: var(--color1);

    svg {
      margin-left: 8px;
    }
    
    span {
      font-size: 18px;
      margin-left: 8px;
      font-weight: bold;
      visibility: hidden;
      position: relative;
      transition: all .2s;
    }

    &:hover {
      span {
        visibility: visible;
        animation: showLinkHome 0.2s ;
      } 
    }
  }

  @keyframes showLinkHome {
    from {
      left: -20px;
    }

    to {
      left: 0px;
    }
  }
`;