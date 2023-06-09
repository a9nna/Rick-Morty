import styled from "styled-components";

const CharactersList = styled.ul`
  position: absolute;
  z-index: -1;
  top: 90px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  justify-content: space-around;
  row-gap: 50px;
  padding: 40px;
  width: 100vw;
`;

export default CharactersList;
