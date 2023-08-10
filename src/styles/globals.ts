// :root {
//   --navy-50: #f6f8fc;
//   --navy-80: #eef2fa;
//   --navy-100: #dee2f2;
//   --navy-200: #c9d0e6;
//   --navy-300: #b6bdd7;
//   --navy-400: #8A92BA;
//   --navy-600: #595e8a;
//   --navy-800: #353761;
//   --navy-900: #212242;
//   --neutral-navy-800: #353761;
//   --white: #ffffff;
//   --purple-300: #825eeb;
//   --purple-400: #6440C4;
//   --green-300: #1fcca1;
//   --green-400: #00998c;
//   --red-300: #f24d6b;
//   --red-400: #d92148;
//   --mute-gray: rgba(255, 255, 255, 0.2);
// }

// html,
// body {
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   width: 100vw;
//   min-height: 100vh;
//   margin: 0 auto;
//   /*overflow: hidden;*/
//   padding: 0;
//   font-family: Avenir Next, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
//     Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
//   color: var(--navy-900);
//   text-rendering: optimizeLegibility;
//   -moz-osx-font-smoothing: grayscale;
//   -webkit-font-smoothing: antialiased;
// }

// a {
//   color: inherit;
//   text-decoration: none;
// }

// * {
//   box-sizing: border-box;
// }

// input:-moz-read-only { /* For Firefox */
//   color: var(--navy-600);
// }

// input:read-only {
//   color: var(--navy-600);
// }

// button label {
//   cursor: inherit;
// }

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }
  div {
    text-align: center;
  }
  small {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
  ::-webkit-scrollbar {
    width: 5px;    /* 세로축 스크롤바 길이 */
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: gray;
  }
  
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: var(--navy-400);
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: var(--navy-400);
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: var(--navy-400);
  }
  :-moz-placeholder { /* Firefox 18- */
    color: var(--navy-400);
  }
`;