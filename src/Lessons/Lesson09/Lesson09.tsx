/* ToDo List
1. Создать компонент Lesson09, в котором должно быть контролируемое поле (input), кнопка
"Добавить"(Add) и вывод списка задач на экран
2. Функционал:
- при вводе значения в поле и нажатия на кнопку "Добавить", значение из
поля должно отображаться под полем, как один из элементов списка
- каждое новое значение должно находить вверху списка
- если поле пустое, то при нажатии на кнопку "Добавить" должна появиться ошибка
- для отображение всех элементов списка дел используйте map
Примечание: по желанию, ToDoList можно вынести в отдельный компонент*/



import { useState, type ChangeEvent } from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import ToDoList from "../../Components/ToDoList/ToDoList";

import {
Lesson09Wrapper,
Title,
FormContainer,
ErrorText,

} from "./styles";

function Lesson09() {

    const [task, setTask] = useState<string>("");
    const [error, setError] = useState("");
    const [tasks, setTasks] = useState<string[]>([]);

    const onChangeTask = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);

    if (error) {
    setError("");
    }
};


const handleAddTask = () => {
    if (!task.trim()) {
    setError("Поле не может быть пустым!");
    return;
    }

    setTasks((prevTasks) => [task, ...prevTasks]);

    setTask("");
    setError("");
};

return (
    <Lesson09Wrapper>
        <Title>Lesson 09: ToDo List</Title>

    <FormContainer>
        <Input
        name="taskInput"
        label="New Task"
        placeholder="Enter your task"
        value={task}
        onChange={onChangeTask}
        />

        {error && <ErrorText>{error}</ErrorText>}

        <Button name="Add" onClick={handleAddTask} />
    </FormContainer>



    <ToDoList tasks={tasks} />
    </Lesson09Wrapper>

    );
}



export default Lesson09;

