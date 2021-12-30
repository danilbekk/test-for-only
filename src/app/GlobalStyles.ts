import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
}

html, body {
  font-family: 'Roboto', sans-serif;
}

.container {
  max-width: 640px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50%;
  transform: translate(0, -50%)
}
`;
