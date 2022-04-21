import { FONT_INTER, FONT_PJS } from '@constants';
import { createGlobalStyle, css } from 'styled-components';
import { theme } from './Theme';

const GlobaleStyle = createGlobalStyle`${css`
  /* @font-face {
    font-family: ${FONT_INTER};
    src: url('/fonts/Inter/Inter-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: ${FONT_INTER};
    src: url('/fonts/Inter/Inter-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: ${FONT_INTER};
    src: url('/fonts/Inter/Inter-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: ${FONT_INTER};
    src: url('/fonts/Inter/Inter-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: ${FONT_PJS};
    src: url('/fonts/PlusJakartaSans/PlusJakartaSans-ExtraBold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  } */

  // prettier-ignore
  html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5,
  h6, p, blockquote, pre, a, abbr, acronym, address, big,
  cite, code,del, dfn, em, img, ins, kbd, q, s, samp,small,
  strike, strong, sub, sup, tt, var,b, u, i, center,dl, dt,
  dd, ol, ul, li,fieldset, form, label, legend,table, caption,
  tbody, tfoot, thead, tr, th, td,article, aside, canvas, details,
  embed, figure, figcaption, footer, header, hgroup, menu, nav,
  output, ruby, section, summary,time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  img,
  fieldset,
  a img {
    border: none;
  }

  svg,
  img {
    vertical-align: middle;
  }

  button {
    cursor: pointer;
    background: none;
    /* &::-moz-focus-inner {
      padding: 0;
      border: 0;
    } */
  }

  textarea {
    overflow: auto;
  }

  input,
  button {
    margin: 0;
    padding: 0;
    border: 0;
  }

  // prettier-ignore
  div, input, textarea, select,button,
  h1,h2,h3,h4,h5,h6,a,span,a:focus {
    outline: none
  }

  ul,
  ol {
    list-style-type: none;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; /* 10px */
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${FONT_INTER}, sans-serif;
    font-weight: 400;
    line-height: 1;
    min-width: 375px;
    background-color: ${theme['main-Light']};
  }
`}`;

export default GlobaleStyle;
