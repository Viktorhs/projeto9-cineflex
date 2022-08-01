import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body{
        font-family: 'Roboto', sans-serif;
        width: 100vw;
    }
`;
 
export default GlobalStyle;