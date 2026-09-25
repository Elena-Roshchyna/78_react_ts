import AnimalCard from "../../Components/AnimalCard/AnimalCard";
import { animalsData } from "./data";
import type { Animal } from "./types";
import "./styles.css";


function Homework06() {
  
  const animalCards = animalsData.map((animal: Animal) => {
    return (
      <AnimalCard
        key={animal.id} // id из файла data.ts
        name={animal.name}
        species={animal.species}
        imgSrc={animal.image}
      />
    );
  });

  return (
    <div className="homework06-wrapper">
      {animalCards}
    </div>
  );
}

export default Homework06;
