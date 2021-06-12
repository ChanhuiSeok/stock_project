import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    font-family: Noto Sans KR, Roboto, sans-serif;
  }
`;
