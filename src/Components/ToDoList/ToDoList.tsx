import type { ToDoListProps } from "./types";
import { ListContainer, ListItem } from "./styles";


function ToDoList({ tasks }: ToDoListProps) {

const todoElements = tasks.map((item, index) => (
  <ListItem key={`${item}-${index}`}>{item}</ListItem>
));



    return <ListContainer>{todoElements}</ListContainer>;
    
}

export default ToDoList;

