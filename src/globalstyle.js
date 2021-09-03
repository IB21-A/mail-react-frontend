import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        ${"" /* --maxWidth: 1280px; */}
        --maxWidth: 1000px;
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }

    @media screen and (max-width: 1000px) {
        body {
            padding: 0 2em;
        }
    }
`;
