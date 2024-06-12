import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}

    body {
        padding: 0;
        background-color: #8fb6a0;
    }
`;

export default GlobalStyle;
