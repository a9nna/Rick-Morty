import styled from "styled-components";

const CharacterCard = styled.div`
  font-family: "Source Code Pro", sans-serif;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 20px 5px;
  width: fit-content;
  overflow: hidden;

  .card {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: relative;
    width: 300px;
    height: 400px;

    &__header {
      display: grid;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      width: 300px;
      height: 80px;
      padding: 10px;
      border-radius: 12px 12px 0 0;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      background: rgba(254, 253, 253, 0.5);
      font-weight: bold;

      & span {
        font-size: 1.56rem;
        grid-column: 1/2;
      }
    }

    &__resumed-info {
      display: flex;
      flex-wrap: wrap;
      height: 150px;
      width: 300px;
      background: rgba(254, 253, 253, 0.5);
    }

    &__origin {
      width: 300px;
      display: grid;
      grid-template-columns: 150px 150px;
      align-items: center;
      align-items: center;
      font-size: 1.18rem;

      & span {
        grid-column: 2/3;
        padding-right: 10px;
        font-weight: 600;
      }

      & span:first-child {
        grid-column: 1/2;
        padding-left: 10px;
        padding-right: 0;
        font-weight: 700;
      }
    }

    &__specie {
      width: 300px;
      display: grid;
      grid-template-columns: 150px 150px;
      align-items: center;
      font-size: 1.18rem;

      & span {
        grid-column: 2/3;
        padding-right: 10px;
        font-weight: 600;
      }

      & span:first-child {
        grid-column: 1/2;
        padding-left: 10px;
        padding-right: 0;
        font-weight: 700;
      }
    }
  }
`;

export default CharacterCard;
