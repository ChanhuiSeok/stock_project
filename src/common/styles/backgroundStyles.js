import {createGlobalStyle} from 'styled-components';

export const BackgroundStyles = createGlobalStyle`
 body {
  background: ${({theme}) => theme.body};
  color: ${({theme}) => theme.text};
}
`;
