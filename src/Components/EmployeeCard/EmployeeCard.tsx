import {
    EmployeeCardWrapper,
    CardItem,
    CardLabel,
    CardValue,
} from "./styles";


export interface EmployeeData {
    name: string;
    surname: string;
    age: number;
    jobPosition?: string;

}

// Описываем пропсы компонента: карточка принимает обьект employee типа  EmployeeData
interface EmployeeCardProps {
    employee: EmployeeData;
}

function  EmployeeCard ({ employee }: EmployeeCardProps) {
    const { name, surname, age, jobPosition } = employee;

return (
    <EmployeeCardWrapper>
      

<CardItem>
    <CardLabel>Name:</CardLabel>
    <CardValue>{name}</CardValue>
</CardItem>


<CardItem>
    <CardLabel>Surname:</CardLabel>
    <CardValue>{surname}</CardValue>
</CardItem>

<CardItem>
    <CardLabel>Age:</CardLabel>
    <CardValue>{age}</CardValue>
</CardItem>
 
{/* Условный рендеринг: т.к. это необяз. поле, то мы показываем его блок в случае, если пользователь его ввел */}

{jobPosition && (
    <CardItem>
    <CardLabel>Job Position:</CardLabel>
    <CardValue>{jobPosition}</CardValue>
</CardItem>
        )}

</EmployeeCardWrapper>

    );
}



export default EmployeeCard;
