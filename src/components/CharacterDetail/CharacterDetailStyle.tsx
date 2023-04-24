import styled from "styled-components";

const CharacterDetailStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  left: 50%;
  top: 150px;
  transform: translateX(-50%);
  width: 80%;
  height: 60%;
  overflow: hidden;
  border: 2px solid #000;
  border-radius: 12px;
  font-size: 1.18rem;
  z-index: -1;

  .detail {
    img {
      vertical-align: bottom;
    }

    &__avatar {
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 20px 5px;
    }

    &__character-info {
      display: flex;
      flex-direction: column;
      row-gap: 50px;

      &__name {
        font-size: 55px;
      }

      &__characteristics {
        display: flex;
        flex-direction: column;
        row-gap: 30px;

        &__principal {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          row-gap: 10px;
          justify-items: start;
          padding: 20px;
          box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 20px 5px;
          border-radius: 12px;

          span:nth-child(-n + 3) {
            font-weight: 700;
          }
        }

        &__secondary {
          display: grid;
          row-gap: 10px;
          justify-items: start;
          padding: 20px;
          box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 20px 5px;
          border-radius: 12px;

          span:nth-child(2n + 1) {
            font-weight: 700;
          }
        }
      }
    }
  }
`;
export default CharacterDetailStyle;
