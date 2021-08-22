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
`;
