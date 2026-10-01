import type { ToDoListProps } from "./types";
import { ListContainer, ListItem } from "./styles";


function ToDoList({ tasks }: ToDoListProps) {
    return (
    <ListContainer>
      {tasks.map((item, index) => (
        <ListItem key={`${item}-${index}`}>{item}</ListItem>
      ))}
    </ListContainer>
  );
}

export default ToDoList;

