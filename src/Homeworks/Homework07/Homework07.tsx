import AnimalCard from "../../Components/AnimalCard/AnimalCard";
import { animalsData } from "../Homework06/data";
import type { Animal } from "../Homework06/types";
import { Homework07Wrapper } from "./styles";

function Homework07() {
  const animalCards = animalsData.map((animal: Animal) => {
    return (
      <AnimalCard
        key={animal.id}
        name={animal.name}
        species={animal.species}
        imgSrc={animal.image}
      />
    );
  });

  return <Homework07Wrapper>{animalCards}</Homework07Wrapper>;
}

export default Homework07;
