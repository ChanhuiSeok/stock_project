import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
 ${reset}
 body {
    font-family: Noto Sans KR, sans-serif;
    transition: background-color 0.20s linear;
 }
`;
