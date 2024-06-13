import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}

    :root {
        /* main color for bc */
        --base: #dccece;
        /* secondary color for bc */
        --dark: #a39494;
        --light: #f4e9e9;
        /* text */
        --complement: #233131;
        /* clicked */
        --accent: #8b7373;
        /* hover */
        --highlight: #faecec; 
    }

    body {
        padding: 0;
        background-color: var(--base);
        font-family: "Playfair Display", serif;
        font-weight: 400;
        font-style: normal;
        color: var(--complement);
        width: 100%;
        height: 100vh;
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }
    a {
        text-decoration: none;
    }   
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
    button {
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #9ebbff;
        border-radius: 8px;
    }

    ::-webkit-scrollbar-track {
        background-color: rgba(239, 237, 232, 0.1);
    }
    
`;

export default GlobalStyle;
