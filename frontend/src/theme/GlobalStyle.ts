import { createGlobalStyle } from '@xstyled/styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        user-select: none;
    }

    html, body, div#root{
        min-width: 100%;
        min-height: 100%;
        color: text;
        background-color: bg;
    }
    
    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 1.8rem;
    }

    h3 {
        font-size: 1.4rem;
    }

    p, a, span, div {
        font-size: 1rem;
    }
`;

export default GlobalStyle;
