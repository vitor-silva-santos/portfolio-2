import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Solway', serif;
        text-decoration: none;
        transition: .3s ease;
        outline: none;
    }

    html {
        scroll-behavior: smooth;
    }

    /* SCROLL */
    /* Works on Firefox */
    * {
        scrollbar-width: thin;
        scrollbar-color: #0298B8 #0D1117;
    }

    /* Works on Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 14px;
    }

    *::-webkit-scrollbar-track {
        background-color: #0D1117;

    }

    *::-webkit-scrollbar-thumb {
        background-color: #0298B8;
        border-radius: 2px;
    }

    /* END SCROLL */

    h2 {
        color: #b3b3b3;
        font-weight: 700;
        font-size: 38px;
        text-shadow: 1px 1px 1px #00d2df;

    }
`;
