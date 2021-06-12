import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
 ${reset}
 body {
    font-family: Noto Sans KR, sans-serif;
    transition: background-color 0.20s linear;
 }
 a{
   text-decoration: none;
   color: #7a7a7a;
 }
 a:hover{
   color:rgb(15, 76, 155);
 }
 button{
    border: 0;
 }
`;
