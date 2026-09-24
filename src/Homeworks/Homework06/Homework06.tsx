import AnimalCard from "../../Components/AnimalCard/AnimalCard";
import "./styles.css";


interface Animal {
  name: string;
  species: string;
  image: string;
}


const animalsData: Animal[] = [
  {
    name: "Dog",
    species: "Labrador",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Cheetah",
    species: "Predator",
    image:
      "https://images.unsplash.com/photo-1534759846116-5799c33ce22a",
  },
  {
    name: "Owl",
    species: "Bird",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/Bubo_bubo_sibiricus_-_01.JPG",
  },
  {
    name: "Camel",
    species: "Herbivore",
    image:
      "https://www.naturalhistoryonthenet.com/wp-content/uploads/2016/12/Arabian-Camel.jpg",
  },
];


function Homework06() {
  return (
    <div className="homework06-wrapper">
      {animalsData.map((animal: Animal, index: number) => {
        return (
          <AnimalCard
            key={index}
            name={animal.name}
            species={animal.species}
            imgSrc={animal.image}
          />
        );
      })}
    </div>
  );
}

export default Homework06;
