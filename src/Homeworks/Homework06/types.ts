export interface Animal {
    id: string; // Добавляем id, чтобы использовать его как ключ вместо index
  name: string;
  species: string;
  image: string;
}

export interface AnimalCardProps {
  name: string;
  species?: string;
  imgSrc: string;
}
