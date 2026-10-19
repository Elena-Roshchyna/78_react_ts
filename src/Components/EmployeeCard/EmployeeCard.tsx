import {
  EmployeeCardWrapper,
  CardItem,
  CardLabel,
  CardValue,
} from "./styles";
import type { EmployeeCardProps } from "./types";


function EmployeeCard({ employee }: EmployeeCardProps) {
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
