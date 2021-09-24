import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        ${"" /* --maxWidth: 1280px; */}
        --maxWidth: 1000px;
        --lightGrey: #aaa;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }

    .error {
		color: red;
		font-size: 1.1em;
	}

    @media screen and (max-width: 1000px) {
        body {
            padding: 0 2em;
        }
    }
`;
