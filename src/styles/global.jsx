import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    outline: none;
    box-sizing: border-box;
  }

  body, input, button {
    font: 16px 'Nunito', sans-serif;
  }

  :root {
    --color1: #E1776A;
    --color2: #12B4FF;
    --color3: #F3F1F0;
    --color4: #333333;
    --color5: #AF4338;
  }

  button {
    cursor: pointer;
  }
`;