import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useReceiveCharactersData } from "../../hooks/useReciveCharactersData/useReceiveCharactersData";
import CharactersContext from "../../store/contexts/characters/CharactersContext";
import CharacterDetailStyle from "./CharacterDetailStyle";

const CharacterDetail = (): JSX.Element => {
  const { id } = useParams();

  const { getCharacterById } = useReceiveCharactersData();
  useEffect(() => {
    getCharacterById(Number(id)!);
  }, [getCharacterById, id]);

  const {
    characters: {
      results: [
        {
          gender,
          image,
          location: { name: location },
          name,
          origin: { name: origin },
          species,
          status,
        },
      ],
    },
  } = useContext(CharactersContext);
  return (
    <CharacterDetailStyle className="detail">
      <img
        src={`${image}`}
        alt={`A page detail with ${name}`}
        width={300}
        height={300}
        className="detail__avatar"
      />
      <div className="detail__character-info">
        <span className="detail__character-info__name">{name}</span>
        <div className="detail__character-info__characteristics">
          <div className="detail__character-info__characteristics__principal">
            <span>Gender</span>
            <span>{gender}</span>
            <span>Species</span>
            <span>{species}</span>
            <span>Status</span>
            <span>{status}</span>
          </div>
          <div className="detail__character-info__characteristics__secondary">
            <span>Origin</span>
            <span>{origin}</span>
            <span>Location</span>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </CharacterDetailStyle>
  );
};

export default CharacterDetail;
