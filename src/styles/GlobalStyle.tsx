import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { colors } from './theme';

const GlobalStyle = createGlobalStyle`
    ${reset};
    html, body {
        margin: 0;
        width: 100%;
        height: 100vh;
        font-family: 'IBM Plex Sans KR', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${colors.bg};
        color: ${colors.black};
    }

    &:link, &:visited {
        text-decoration: none;
        color: ${colors.black};
    }

    button {
        cursor: pointer;
    }

    textarea {
        font-family: 'IBM Plex Sans KR', sans-serif;
    }
`;

export default GlobalStyle;