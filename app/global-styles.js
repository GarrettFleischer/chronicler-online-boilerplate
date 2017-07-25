import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
// injectGlobal`
//    html,
//    body {
//      height: 100%;
//      width: 100%;
//      font-family: 'Roboto', sans-serif;
//    }
//
//   ${'' /* button, html [type="button"],[type="reset"], [type="submit"] {
//     -webkit-appearance: none;
//   } */}
//
// `;
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Roboto', sans-serif;
  }
  
  .hoverable {
    cursor: 'hover';
  }

  ${'' /* #app {
    min-height: 100%;
    min-width: 100%;
  } */}

`;
