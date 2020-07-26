import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  max-height: 220px;
  height: 100%;
  margin: 8px;
  position: relative;
  text-decoration: none;
  list-style: none;
  border-radius: 4px;
  border: 2px solid #ffffff;
  box-shadow: 0px 2px 6px -2px rgba(0, 0, 0, 0.6);
  background-color: #f9f9f9;
  transition: all 0.3s;
  cursor: default;

  @media screen and (max-width: 400px) {
      max-height: 240px;
      height: 100%;
    }
  
  &:hover {
    border: 2px solid var(--color1);
  }

  .box-description {
    padding: 16px;
    font-size: 14px;

    .title {
      font-weight: bold;
      margin-bottom: 4px;
    }

    span {
      font-weight: bold;
    }

    .more-information {
      position: absolute;
      right: 8px;
      bottom: 8px;
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

  .box-image img {
    width: 140px;
    height: 216px;

    @media screen and (max-width: 400px) {
      width: 100px;
      height: 236px;
    }
  }
`;