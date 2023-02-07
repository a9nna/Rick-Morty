import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

a,
a:focus,
a:active,
a:visited {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
`;