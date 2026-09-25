/*import "./styles.css";
function AnimalCard({name, species="uknown animal", imgSrc}) {
  return (
    <div className="animal-card-wrapper">
      <h3>{name}</h3>
      <div>{species}</div>
      <img src={imgSrc}/>
    </div>
  );
}
export default AnimalCard;*/
// props - это единственный параметр, который может присутствовать в компоненте
// props - это объект и все значения которы мы передаём в компонент, просто будут
// находиться внутри этого объекта
// props = {
//   name: <в момент вызова компонента>
//   species: <в момент вызова компонента>
//   imgSrc: <в момент вызова компонента>// 
// }
// Чтобы не прописывать каждый раз обращение к объекту props, в круглых скобках
// компонента сразу делают деструктуризацию - {name, species, imgSrc}


import { AnimalCardWrapper, Title, AnimalSpecies, AnimalImage } from "./styles";
import type { AnimalCardProps } from "../../Homeworks/Homework06/types";


/*interface AnimalCardProps {
    name: string;
    species?: string;
    imgSrc: string;
}
*/

function AnimalCard({
    name,
    species = "unknown animal",
    imgSrc,
}: AnimalCardProps) {
    return (
      <AnimalCardWrapper>

      <Title>{name}</Title>
      <AnimalSpecies>{species}</AnimalSpecies>
      <AnimalImage src={imgSrc} alt={name} />

      </AnimalCardWrapper>
        
      
   
  );
}

export default AnimalCard;
    